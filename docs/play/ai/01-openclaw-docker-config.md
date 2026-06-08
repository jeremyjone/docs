---
title: 可直接运行的 Docker 版 OpenClaw 配置
---

# 可直接运行的 Docker 版 OpenClaw 配置

## 前言

为什么要在 Docker 跑 OpenClaw：

1. 不想和宿主机环境互相污染。
2. 出问题了方便重建。
3. 后面迁移机器也省事。
4. 资源限制、日志、目录挂载这些都比较顺手。

当然，Docker 也不是万能的。像一些深度本地交互的能力，天然就没有直接跑在宿主机上那么自由。但如果目标是搞一套稳定、可迁移、能长期挂着跑的环境，那 Docker 这条路基本还是最省心的。

我这次整理的，不只是一个“把 OpenClaw 跑起来”的 Compose 文件，而是一套稍微完整一点的配套。

## 整体思路

如果你想把 OpenClaw 跑在 Docker 里，而且还希望它能正常走代理、能接浏览器、能接搜索，那么这篇文章应该能给你提供一个比较完整的参考。我会完整的配置：

- `clash` 负责统一代理出口
- `openclaw` 负责核心服务
- `browserless` 负责浏览器自动化
- `searxng` 负责搜索聚合

也就是说，配完之后，OpenClaw 不只是能启动，还能顺手把浏览器访问和搜索这两块能力也接上。

## 服务拆分

我们先看一下为什么要拆成这四个服务。

- `clash`：代理出口
- `openclaw`：核心服务
- `browserless`：浏览器能力
- `searxng`：搜索能力

如果全堆进一个容器，后面出了问题会很难排查。拆开之后，每块职责都比较清晰，而且也方便裁剪。

比如：

- 不需要搜索，就去掉 `searxng`
- 不需要浏览器，就去掉 `browserless`

## Clash

`clash` 在这里不只是一个代理服务，而是整套环境的网络出口。

这一套配置的关键点只有一个：统一网络出口。

我这里把 `clash` 作为代理网关，然后让 `openclaw`、`browserless`、`searxng` 全部共享 `clash` 的网络命名空间。

```yaml
network_mode: "service:clash"
```

这样做有两个直接结果：

1. 所有服务都会走同一套代理。
2. 服务之间访问要走 `localhost`，不能再用服务名。

这套配置里，`clash` 负责这些事情：

- `clash` 以 TUN 模式启动
- 其他容器通过 `network_mode: "service:clash"` 共享它的网络栈
- 所有出站流量都会被它接管
- 对外暴露的端口也统一挂在它这里

所以这里的 `clash` 不能简单理解成“顺手挂一个代理”，它其实是这套 Compose 的网关。

### 网络配置

先看最上面的 network：

```yaml
networks:
  openclaw-net:
    driver: bridge
```

这里定义了一个单独的 bridge 网络，给 `clash` 使用。

后面 `clash` 自己接入这个网络：

```yaml
networks: [openclaw-net]
```

而 `openclaw`、`browserless`、`searxng` 等其他服务没有直接挂这个网络，它们是通过共享 `clash` 的网络命名空间来访问外部网络的。

### 镜像和角色

```yaml
clash:
  image: gangz1o/glash:latest
  container_name: openclaw-clash
  restart: unless-stopped
  networks: [openclaw-net]
```

这里使用的是 [`gangz1o/glash:latest`](https://github.com/gangz1o/clash4docker)。

> 使用它的最大原因是因为该镜像使用了 `Mihomo (Clash Meta)最新内核`，而最原始的 [`dreamacro/clash:latest`](https://hub.docker.com/r/dreamacro/clash) 官方镜像，已经很久没有更新了。

### TUN 必需配置

这一段是核心：

```yaml
cap_add:
  - NET_ADMIN
  - NET_RAW
devices:
  - /dev/net/tun:/dev/net/tun
```

如果没有这部分，TUN 模式就起不来。

这里的意思是：

- 给容器网络管理能力
- 把宿主机的 `/dev/net/tun` 映射进来

如果宿主机不支持 `/dev/net/tun`，那这套“全容器透明代理”的思路就成立不了。这时候只能：

- 关掉 `TUN_ENABLED`
- 或者换别的代理方案
- 或者直接在宿主机上部署代理

### 资源限制

```yaml
mem_limit: 384m
mem_reservation: 128m
cpus: 1
```

这里给 `clash` 的资源不高，也合理。

它的职责是代理和网关，不需要像浏览器那样吃那么多资源。

### 端口映射

该镜像需要映射所有对外端口：

```yaml
ports:
  - "${CLASH_HTTP_PORT:-7890}:7890"
  - "${CLASH_SOCKS_PORT:-7891}:7891"
  - "${CLASH_UI_PORT:-49090}:9090"
  - "${OPENCLAW_PORT:-45678}:${OPENCLAW_PORT:-45678}"
  # 其他共享 netns 服务的端口也需要进行映射
```

对应关系如下：

- `7890`：HTTP 代理
- `7891`：SOCKS5 代理
- `49090`：Clash Dashboard
- `45678`：OpenClaw Gateway / Web UI

### extra_hosts

```yaml
extra_hosts:
  - "host.docker.internal:host-gateway"
```

这个配置主要是为了让容器内部也能通过 `host.docker.internal` 访问宿主机。

有些情况下做调试或者回连时会比较方便。

### environment

`clash` 这块的环境变量比较重要：

```yaml
environment:
  TZ: Asia/Shanghai
  SUB_URL: "${CLASH_SUBSCRIPTION_URL}"
  # SUB_CRON: "0 */6 * * *"
  SUB_CRON: "0 0 31 2 *"
  SECRET: "${CLASH_UI_SECRET:?set in .env}"
  ALLOW_LAN: "true"
  TUN_ENABLED: "${CLASH_TUN_ENABLED:-true}"
  DNS_OVERRIDE: "true"
```

这里分别是：

- `SUB_URL`：订阅地址
- `SUB_CRON`：订阅更新时间
- `SECRET`：Dashboard 和 API 的鉴权密码
- `ALLOW_LAN`：允许局域网访问
- `TUN_ENABLED`：是否启用 TUN
- `DNS_OVERRIDE`：订阅缺少 DNS 段时自动注入

这里需要注意这一句：

```yaml
SUB_CRON: "0 0 31 2 *"
```

这其实是一个永远不会触发的日期。也就是说，这里默认关闭自动更新订阅。

这么配的原因也很实际：更新订阅的时候可能会导致当前连接断开，如果你不想它自动刷新，那就干脆给它一个永远不执行的 cron。

## OpenClaw

接下来配置 `openclaw`。

```yaml
openclaw:
  image: ghcr.io/openclaw/openclaw:latest
  container_name: openclaw
  restart: unless-stopped
  init: true
  user: 0:0
  network_mode: "service:clash"
```

### 基础配置

这里重点看三个地方：

- `init: true`
- `user: 0:0`
- `network_mode: "service:clash"`

`init: true` 主要是为了更好地处理进程回收。

`user: 0:0` 则是为了避免挂载目录后出现权限问题。

最关键的还是 `network_mode: "service:clash"`。只要用了这一句，OpenClaw 的所有网络行为就都走 Clash 了。

### 资源限制

```yaml
mem_limit: 2g
mem_reservation: 1g
cpus: 2
```

这部分比较直白，就是给 OpenClaw 限制资源，避免它在长期运行时把机器吃满。如果机器比较宽裕，也可以适当放开。

### environment

#### 基础环境

```yaml
environment:
  TZ: Asia/Shanghai
  HOME: /home/node
  TERM: xterm-256color

  OPENCLAW_RUN_USER: 0:0
  OPENCLAW_STATE_DIR: /home/node/.openclaw
  OPENCLAW_DATA_DIR: /home/node/.openclaw
  OPENCLAW_CONFIG_DIR: /home/node/.openclaw
  OPENCLAW_WORKSPACE_DIR: /home/node/.openclaw/workspace
  OPENCLAW_AGENTS_DIR: /home/node/.openclaw/agents
  OPENCLAW_DISABLE_BONJOUR: "1"

  OPENCLAW_PLUGINS_ENABLED: "true"
  OPENCLAW_GATEWAY_TOKEN: ${OPENCLAW_GATEWAY_TOKEN:?set in .env}
  OPENCLAW_GATEWAY_BIND: lan
  OPENCLAW_GATEWAY_PORT: "${OPENCLAW_PORT:-45678}"
  # ...
```

### 数据挂载

```yaml
volumes:
  - ./data/home:/home/node
  - ./data/config:/home/node/.openclaw
  - ./data/workspace:/home/node/.openclaw/workspace
  - ./data/agents:/home/node/.openclaw/agents
```

这些目录分别对应主目录、配置目录、工作区和 agent 目录。可以根据自身需要进行适当调整增减，同时需要注意需要在宿主机上提前创建这些目录，否则可能会导致容器无法启动。并且配置好对应文件夹的权限问题。

### 启动命令

```yaml
command:
  - node
  - dist/index.js
  - gateway
  - --bind
  - lan
  - --port
  - "${OPENCLAW_PORT:-45678}"
  - --allow-unconfigured
```

这里表示 OpenClaw 以 Gateway 模式启动，并绑定指定端口。

`--allow-unconfigured` 也比较实用，意味着即使有些应用层配置还没补齐，服务本身也可以先起来。

### depends_on

配置对应依赖：

```yaml
depends_on:
  clash:
    condition: service_healthy
  browserless:
    condition: service_healthy
  searxng:
    condition: service_started
```

## Browserless

再往下是 `browserless`。

```yaml
browserless:
  image: ghcr.io/browserless/chromium:latest
  container_name: openclaw-browserless
  restart: unless-stopped
  network_mode: "service:clash"
```

这部分是给 OpenClaw 提供浏览器能力。OpenClaw 默认会通过下面这个地址连接 Browserless：

```yaml
ws://127.0.0.1:3000
```

来连接它。

### 资源限制

```yaml
mem_limit: 1500m
mem_reservation: 800m
cpus: 2
shm_size: 1g
```

这里最重要的是 `shm_size: 1g`。

因为 Browserless 背后是 Chromium，`/dev/shm` 太小的话很容易出问题，所以这里专门把共享内存调大了。

### 插件配置

这里要注意，Browserless 容器起来不代表 OpenClaw 已经自动接上它。Compose 只负责把 Browserless 跑起来，具体怎么让 OpenClaw 用它，还需要配置 `openclaw.json`。

```json
"browser": {
  "enabled": true,
  "defaultProfile": "browserless",
  "profiles": {
    "browserless": {
      "cdpUrl": "ws://127.0.0.1:3000",
      "color": "00AAFF",
      "attachOnly": true
    }
  }
}
```

## SearXNG

这块主要负责搜索能力。

```yaml
searxng:
  image: searxng/searxng:latest
  container_name: openclaw-searxng
  restart: unless-stopped
  network_mode: "service:clash"
```

同样的，searxng 也需要在 `openclaw.json` 中配置下面这些内容：

```json
"searxng-search": {
  "enabled": true,
  "config": {
    "baseUrl": "http://localhost:8080",
    "secret": "***"
  }
}
```

## 启动前后还需要准备什么

除了 `docker-compose.yaml` 本身，还要准备下面这些东西。

### `.env`

至少包括：

- `OPENCLAW_PORT`
- `OPENCLAW_GATEWAY_TOKEN`
- `SEARXNG_SECRET`
- `CLASH_HTTP_PORT`
- `CLASH_SOCKS_PORT`
- `CLASH_UI_PORT`
- `CLASH_UI_SECRET`
- `CLASH_SUBSCRIPTION_URL`

### 目录结构

原文也已经给了完整目录：

- `data/home`
- `data/config`
- `data/workspace`
- `data/agents`
- `data/browserless`
- `data/searxng`
- `data/clash`

这些目录如果不提前创建，启动时就可能出问题。

### `openclaw.json`

还需要继续补的，主要就是：

- 多 agent 配置
- plugin 配置
- browser 配置
- searxng-search 配置

## 附上完整 yaml

下面是完整配置，并赋完整注释：

```yaml
# 带浏览器功能 docker 版本 openclaw 完整部署配置
#
# ─────────────────────────────────────────────────────────────
# 需求配置
# ─────────────────────────────────────────────────────────────
#  openclaw               核心功能
#  browserless            无头浏览器，用于模拟浏览器行为
#  searxng                聚合搜索，实现本地化的自定义搜索功能
#  clash                  科学上网，魔法，按需求自备
#
# ─────────────────────────────────────────────────────────────
# 资源预算
# ─────────────────────────────────────────────────────────────
#   openclaw              ~1.5 GB（含 N 个 agent 上下文）
#   browserless           ~1.5 GB（chromium + shm）
#   searxng               ~256 MB
#   clash                 ~256 MB（代理核心 + TUN 网关）
#
# ─────────────────────────────────────────────────────────────
# 网络拓扑（重要）
# ─────────────────────────────────────────────────────────────
#   clash 服务以 TUN 模式启动并独占网络命名空间，
#   其他所有容器通过 network_mode: "service:clash" 共享 clash 的网络栈，
#   因此：
#     1. 所有容器的全部出站流量（含 UDP / WebSocket / CDP / 原生 socket）
#        都会被 clash 的 TUN 设备捕获，由 mihomo 按 rules 自动分流。
#     2. 对外暴露的端口（45678/49090/7890/7891）统一挂在 clash 服务上。
#     3. 容器之间互访不再使用服务名，必须使用 localhost / 127.0.0.1。
#        参见 data/config/openclaw.json 中的 cdpUrl / baseUrl 配置。
#     4. TUN 已透明接管 L3，无需也不应再叠加应用层代理。
#
# ─────────────────────────────────────────────────────────────
# 端口（统一由 clash 暴露到宿主机）
# ─────────────────────────────────────────────────────────────
#   45678 → OpenClaw Gateway / Web UI
#   49090 → clash Dashboard
#   7890  → clash HTTP 代理（外部应用可选用）
#   7891  → clash SOCKS5 代理（外部应用可选用）
#   browserless / searxng 仅在共享 netns 内部经 localhost 访问，不暴露
#
# ─────────────────────────────────────────────────────────────
# 目录（这些文件/文件夹需要手动创建，否则无法创建成功）
# ─────────────────────────────────────────────────────────────
#   /volume1/docker/openclaw/
#     ├── docker-compose.yml        ← 本文件
#     ├── .env                      ← ① compose 启动 env
#     └── data/
#          ├── home/                → /home/node
#          ├── config/              → /home/node/.openclaw
#          │    ├── openclaw.json   ← 多 agent / plugin 配置
#          │    └── .env            ← ② 运行时 env（skill/provider key）
#          ├── workspace/           → /home/node/.openclaw/workspace（default agent，可选）
#          ├── agents/              → /home/node/.openclaw/agents/（其他 agent，可选）
#          ├── browserless/
#          ├── searxng/
#          └── clash/               ← Clash 配置文件（自动下载订阅）
#
# ─────────────────────────────────────────────────────────────
# Key / Token 一览（保持原状）
# ─────────────────────────────────────────────────────────────
#  位置 ① /volume1/docker/openclaw/.env
#      OPENCLAW_PORT=45678
#      OPENCLAW_GATEWAY_TOKEN=*** rand -hex 16>
#      SEARXNG_SECRET=*** rand -hex 32>
#      CLASH_HTTP_PORT=7890
#      CLASH_SOCKS_PORT=7891
#      CLASH_UI_PORT=49090
#      CLASH_UI_SECRET=*** 密码>
#      CLASH_SUBSCRIPTION_URL=<你的订阅源>
#
# ─────────────────────────────────────────────────────────────
# 首次启动前测试 TUN（部署的 电脑/服务器/NAS 上必须支持 /dev/net/tun）
# ─────────────────────────────────────────────────────────────
#   modprobe tun                    # 宿主机加载 TUN 内核模块（多数发行版默认已加载）
#   ls -l /dev/net/tun              # 验证设备存在
#   docker compose up -d
#   docker logs -f openclaw-clash   # 看到 "TUN listening at: ..." 即成功
#
#   验证流量是否真的走 clash：
#   docker compose exec openclaw sh -c "curl -s https://api.ipify.org"
#   输出应为 clash 节点的出口 IP，而不是宿主机直连 IP。

networks:
  openclaw-net:
    driver: bridge

services:
  # ─────────────────────────────────────────────────────────────
  # Clash：所有容器的网络网关 + 代理核心 + Dashboard
  # GitHub：https://github.com/gangz1o/clash4docker
  # 关键：开启 TUN 模式后，本服务即承担整个 compose 集群的网络出口。
  # 所有对宿主机暴露的端口都集中在这里。
  # ─────────────────────────────────────────────────────────────
  clash:
    image: gangz1o/glash:latest
    container_name: openclaw-clash
    restart: unless-stopped
    networks: [openclaw-net]

    # ── TUN 模式必需 ──
    # 如果不支持 /dev/net/tun，把 TUN_ENABLED 设为 false 临时关闭，
    # 但这样就无法做到"全容器透明代理"，仅 clash 自身能上网。
    # 可以考虑不使用 clash，或者在 服务器 上直接物理部署 clash 等高科技代理。
    cap_add:
      - NET_ADMIN
      - NET_RAW
    devices:
      - /dev/net/tun:/dev/net/tun

    mem_limit: 384m
    mem_reservation: 128m
    cpus: 1

    # ── 集中暴露所有共享 netns 服务的端口 ──
    ports:
      - "${CLASH_HTTP_PORT:-7890}:7890"                     # HTTP 代理（可选外部使用）
      - "${CLASH_SOCKS_PORT:-7891}:7891"                    # SOCKS5 代理（可选外部使用）
      - "${CLASH_UI_PORT:-49090}:9090"                      # clash Dashboard
      - "${OPENCLAW_PORT:-45678}:${OPENCLAW_PORT:-45678}"   # OpenClaw Gateway / UI

    extra_hosts:
      - "host.docker.internal:host-gateway"

    environment:
      TZ: Asia/Shanghai
      SUB_URL: "${CLASH_SUBSCRIPTION_URL}"
      # 如果不需要更新，则使用一个不存在的日期即可。更新订阅可能会导致当前连接断开。
      # SUB_CRON: "0 */6 * * *"                        # 每 6 小时自动更新订阅
      SUB_CRON: "0 0 31 2 *"                         # 2 月 31 日 0 点 —— 永远不存在的日期
      SECRET: "${CLASH_UI_SECRET:?set in .env}"      # Dashboard 和 API 鉴权密码
      ALLOW_LAN: "true"                              # 允许局域网设备访问 API
      TUN_ENABLED: "${CLASH_TUN_ENABLED:-true}"      # 关闭：在 .env 设 CLASH_TUN_ENABLED=false
      DNS_OVERRIDE: "true"                           # 订阅缺 DNS 段时自动注入

    volumes:
      - ./data/clash:/root/.config/mihomo

    healthcheck:
      # mihomo 的 RESTful API 全部要求 Bearer 鉴权，401 也算"server 在监听"，
      # 用 -S 让 wget 在 401 时仍输出但 --spider 不下载，再用 grep 判断状态码。
      test: ["CMD-SHELL", "wget -S -q --spider http://127.0.0.1:9090/ 2>&1 | grep -q 'HTTP/' || exit 1"]
      interval: 15s
      timeout: 10s
      retries: 10
      start_period: 90s     # 首次启动可能要下载订阅，给宽裕一点

    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"

  # -────────────────────────────────────────────────────────────
  # OpenClaw：核心服务，提供 Gateway / Web UI / Agent 执行环境
  # 共享 clash 网络命名空间，所有流量自动走代理。
  # 注意：容器内访问其他服务（如 browserless、searxng）必须通过 localhost，而非服务名。
  # -────────────────────────────────────────────────────────────
  openclaw:
    image: ghcr.io/openclaw/openclaw:latest
    container_name: openclaw
    restart: unless-stopped
    init: true
    user: 0:0
    network_mode: "service:clash"           # 共享 clash 网络命名空间

    # ── 资源限制 ──
    mem_limit: 2g
    mem_reservation: 1g
    cpus: 2

    environment:
      TZ: Asia/Shanghai
      HOME: /home/node
      TERM: xterm-256color

      OPENCLAW_RUN_USER: 0:0
      OPENCLAW_STATE_DIR: /home/node/.openclaw
      OPENCLAW_DATA_DIR: /home/node/.openclaw
      OPENCLAW_CONFIG_DIR: /home/node/.openclaw
      OPENCLAW_WORKSPACE_DIR: /home/node/.openclaw/workspace

      OPENCLAW_DISABLE_BONJOUR: "1"

      OPENCLAW_PLUGINS_ENABLED: "true"
      OPENCLAW_GATEWAY_TOKEN: ${OPENCLAW_GATEWAY_TOKEN:?set in .env}
      OPENCLAW_GATEWAY_BIND: lan
      OPENCLAW_GATEWAY_PORT: "${OPENCLAW_PORT:-45678}"
      OPENCLAW_GATEWAY_MODE: local
      OPENCLAW_GATEWAY_AUTH_MODE: token

      # 启用记忆插件
      OPENCLAW_PLUGINS_SLOTS_MEMORY: "memory-lancedb"

      NODE_OPTIONS: "--max-http-header-size=16384"

    volumes:
      - ./data/home:/home/node
      - ./data/config:/home/node/.openclaw
      - ./data/workspace:/home/node/.openclaw/workspace
      - ./data/agents:/home/node/.openclaw/agents
      # 启用 code_execution docker sandbox 时打开
      # - /var/run/docker.sock:/var/run/docker.sock

    command:
      - node
      - dist/index.js
      - gateway
      - --bind
      - lan
      - --port
      - "${OPENCLAW_PORT:-45678}"
      - --allow-unconfigured

    depends_on:
      clash:
        condition: service_healthy
      browserless:
        condition: service_healthy
      searxng:
        condition: service_started

    healthcheck:
      test:
        - CMD
        - node
        - -e
        - "fetch('http://127.0.0.1:${OPENCLAW_PORT:-45678}/healthz').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
      interval: 30s
      timeout: 5s
      retries: 5
      start_period: 30s

    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "3"

  # ─────────────────────────────────────────────────────────────
  # Browserless：浏览器自动化 CDP 服务。有了它就可以实现与本地体验一致的浏览器访问能力
  # 共享 clash netns，openclaw 通过 ws://localhost:3000 访问
  # 该配置需要在 openclaw.json 中配置 browser 字段：
  # "browser": {
  #   "enabled": true,
  #   "defaultProfile": "browserless",
  #   "profiles": {
  #     "browserless": {
  #       "cdpUrl": "ws://127.0.0.1:3000",
  #       "color": "00AAFF",
  #       "attachOnly": true
  #     }
  #   }
  # }
  # 此外，还需要在 plugins 中配置 entries.browser.enabled = true
  # ─────────────────────────────────────────────────────────────
  browserless:
    image: ghcr.io/browserless/chromium:latest
    container_name: openclaw-browserless
    restart: unless-stopped
    network_mode: "service:clash"

    mem_limit: 1500m
    mem_reservation: 800m
    cpus: 2
    shm_size: 1g

    environment:
      TIMEOUT: "60000"
      CONCURRENT: "2"
      QUEUED: "5"
      TOKEN: ${BROWSERLESS_TOKEN:?set in .env}      # 置空则任意访问
      EXTERNAL: "ws://127.0.0.1:3000"
      DEFAULT_HEADLESS: "true"
      DEFAULT_STEALTH: "true"
      DEFAULT_BLOCK_ADS: "true"
      ENABLE_DEBUGGER: "false"
      CORS: "false"
    volumes:
      - ./data/browserless:/usr/src/app/workspace
    depends_on:
      clash:
        condition: service_healthy
    healthcheck:
      test: ["CMD", "wget", "-q", "-O", "-", "http://127.0.0.1:3000/pressure"]
      interval: 30s
      timeout: 5s
      retries: 5
      start_period: 20s
    logging:
      driver: json-file
      options:
        max-size: "5m"
        max-file: "2"

  # ─────────────────────────────────────────────────────────────
  # SearXNG：自托管搜索聚合
  # 共享 clash netns，openclaw 通过 http://localhost:8080 访问
  # 该配置需要在 openclaw.json 的 plugins.entries 字段中添加：
  # "searxng-search": {
  #   "enabled": true,
  #   "config": {
  #     "baseUrl": "http://localhost:8080",
  #     "secret": "***"
  #   }
  # }
  # ─────────────────────────────────────────────────────────────
  searxng:
    image: searxng/searxng:latest
    container_name: openclaw-searxng
    restart: unless-stopped
    network_mode: "service:clash"

    mem_limit: 384m
    mem_reservation: 128m
    cpus: 1

    environment:
      SEARXNG_SECRET: ${SEARXNG_SECRET:?set in .env}
      SEARXNG_BASE_URL: http://localhost:8080/
    volumes:
      - ./data/searxng:/etc/searxng
    cap_drop: [ALL]
    cap_add: [CHOWN, SETGID, SETUID]
    depends_on:
      clash:
        condition: service_healthy
    logging:
      driver: json-file
      options:
        max-size: "5m"
        max-file: "2"
```

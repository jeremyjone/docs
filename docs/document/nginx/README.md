# Nginx 使用文档

## 安装

### CentOS 7+

```sh
# 关闭防火墙（非必须，但测试阶段建议关闭）
systemctl stop firewalld
systemctl disable firewalld

# 安装 yum 工具
sudo yum install -y yum-utils

# 配置 nginx 仓库
sudo tee /etc/yum.repos.d/nginx.repo <<-'EOF'
[nginx-stable]
name=nginx stable repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=1
enabled=1
gpgkey=https://nginx.org/keys/nginx_signing.key
module_hotfixes=true
EOF

# 确认仓库生效
yum repolist | grep nginx

# 安装 nginx
sudo yum install -y nginx
```

安装后通过 `nginx` 命令可直接启动服务，访问本机 80 端口测试：

```sh
curl http://localhost
```

返回 HTML 且包含 `Welcome to nginx!` 表示安装成功。

### Ubuntu / Debian

```sh
# 安装依赖
sudo apt update
sudo apt install -y curl gnupg2 ca-certificates lsb-release ubuntu-keyring

# 导入 nginx 签名密钥
curl https://nginx.org/keys/nginx_signing.key | gpg --dearmor \
  | sudo tee /usr/share/keyrings/nginx-archive-keyring.gpg >/dev/null

# 配置仓库
echo "deb [signed-by=/usr/share/keyrings/nginx-archive-keyring.gpg] \
http://nginx.org/packages/ubuntu $(lsb_release -cs) nginx" \
  | sudo tee /etc/apt/sources.list.d/nginx.list

# 安装
sudo apt update
sudo apt install -y nginx
```

## 常用命令

```sh
nginx              # 启动
nginx -s stop      # 快速停止
nginx -s quit      # 优雅停止（处理完当前请求后退出）
nginx -s reload    # 重载配置（不中断服务）
nginx -s reopen    # 重新打开日志文件
nginx -t           # 测试配置文件语法
nginx -T           # 测试配置并打印完整文件
nginx -v           # 查看版本
nginx -V           # 查看版本和编译参数
```

## 文件与目录结构

默认安装路径：

| 用途 | 路径 |
|------|------|
| 主配置文件 | `/etc/nginx/nginx.conf` |
| 子配置文件 | `/etc/nginx/conf.d/*.conf` |
| 日志目录 | `/var/log/nginx/` |
| 默认站点根 | `/usr/share/nginx/html/` |

Nginx 通过 `include` 语法引入子配置文件，通常主配置文件末尾会包含：

```nginx
include /etc/nginx/conf.d/*.conf;
```

这样每个站点可以独立写一个 `.conf` 文件，保持主配置简洁。

## 配置文件结构

一个最基础的 nginx 配置文件分三层：

```nginx
# 全局块 — 影响 nginx 全局行为
user  nginx;
worker_processes  auto;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;

# events 块 — 网络连接配置
events {
    worker_connections  1024;
    multi_accept on;
    use epoll;
}

# http 块 — HTTP 相关配置
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # 日志格式
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    keepalive_timeout  65;

    # server 块 — 虚拟主机配置
    server {
        listen       80;
        server_name  example.com;

        # location 块 — 路径匹配规则
        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }
    }
}
```

### 全局块配置说明

| 指令 | 作用 |
|------|------|
| `user` | nginx 工作进程运行的用户 |
| `worker_processes` | 工作进程数。`auto` 按 CPU 核心数自动设置 |
| `error_log` | 错误日志路径和级别（debug/info/notice/warn/error/crit） |
| `pid` | 进程 PID 文件路径 |

### events 块配置说明

| 指令 | 作用 |
|------|------|
| `worker_connections` | 每个工作进程的最大连接数 |
| `multi_accept` | 是否一次接受多个新连接 |
| `use` | 事件模型。Linux 推荐 `epoll`，FreeBSD 用 `kqueue` |

## 静态资源配置

### 托管静态页面

```nginx
server {
    listen 80;
    server_name mysite.com;

    location / {
        root /var/www/mysite;
        index index.html index.htm;
    }
}
```

### 配置错误页

```nginx
server {
    listen 80;
    server_name mysite.com;

    error_page 404 /404.html;
    error_page 500 502 503 504 /50x.html;

    location = /404.html {
        root /var/www/mysite/errors;
    }

    location = /50x.html {
        root /var/www/mysite/errors;
    }
}
```

如果配置多个 `error_page`，从上到下依次匹配，命中即返回。

### 静态资源配置路径

```nginx
location /static/ {
    alias /data/static/;
    expires 7d;                          # 缓存过期时间
    add_header Cache-Control "public";   # 允许代理/CDN 缓存
}
```

配置静态资源需要注意 nginx 工作进程对目标目录有读取权限，否则返回 403。

### location 修饰符

| 修饰符 | 含义 | 优先级 |
|--------|------|--------|
| `=` | 严格精确匹配 | 1（最高） |
| `^~` | 前缀匹配，匹配后不再检查正则 | 2 |
| `~` | 正则匹配，区分大小写 | 3 |
| `~*` | 正则匹配，不区分大小写 | 4 |
| 无修饰符 | 普通前缀匹配 | 5（最低） |

```nginx
location = /exact.html {
    # 严格匹配 /exact.html
}

location ^~ /static/ {
    # 匹配 /static/ 开头的路径
}

location ~ \.(jpg|jpeg|png|gif)$ {
    # 匹配图片格式
}

location ~* \.(jpg|jpeg|png|gif)$ {
    # 不区分大小写的图片匹配
}

location / {
    # 兜底规则
}
```

## 反向代理

反向代理是 nginx 最常用的功能。nginx 统一接收所有请求，按 location 转发给后端服务。

```nginx
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 代理请求头说明

| 请求头 | 值 | 作用 |
|--------|----|------|
| `Host` | `$host` | 客户端请求中的 Host 字段 |
| `X-Real-IP` | `$remote_addr` | 客户端真实 IP |
| `X-Forwarded-For` | `$proxy_add_x_forwarded_for` | 客户端 IP 链（追加模式） |
| `X-Forwarded-Proto` | `$scheme` | 客户端请求协议（http/https） |

如果不传递请求头，后端服务接收到的请求头会变成 nginx 本身的地址和端口，导致日志丢失真实 IP、重定向 URL 错误等问题。

### proxy_pass 规则

`proxy_pass` 带 URI 和不带 URI 的行为不同：

**不带 URI — 转发保留原始路径：**

```nginx
location /api/ {
    proxy_pass http://localhost:8080;
}
# 请求 /api/v1/users → 转发到 http://localhost:8080/api/v1/users
```

**带 URI — 用 URI 替换匹配路径：**

```nginx
location /api/ {
    proxy_pass http://localhost:8080/v1/;
}
# 请求 /api/v1/users → 转发到 http://localhost:8080/v1/v1/users
```

注意带 URI 时，匹配路径（`/api/`）会被替换为 `proxy_pass` 中的 URI（`/v1/`），但原始路径的剩余部分会追加。如果只想把 `/api/xxx` 映射到 `/xxx`，可以这样写：

```nginx
location /api/ {
    proxy_pass http://localhost:8080/;
}
# 请求 /api/v1/users → 转发到 http://localhost:8080/v1/users
```

### WebSocket 代理

```nginx
location /ws/ {
    proxy_pass http://backend:8080;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_read_timeout 86400s;  # WebSocket 长连接超时
}
```

关键点：`proxy_http_version 1.1` 和 `Upgrade` / `Connection` 头是 WebSocket 握手必需的。超时时间建议设长一些（24 小时），防止长时间无消息的 WebSocket 连接被断开。

## 缓冲与缓存

### 缓冲（Buffer）

代理时 nginx 会缓冲后端响应，避免一次只传一点数据导致客户端慢速拖累后端。

```nginx
location / {
    proxy_buffering on;                          # 开启缓冲（默认）
    proxy_buffer_size 4k;                        # 响应头缓冲区（默认 4k）
    proxy_buffers 8 8k;                          # 8 个 8k 缓冲区
    proxy_busy_buffers_size 16k;                 # 主动发给客户端的缓冲大小
    proxy_temp_file_write_size 8k;               # 一次写入临时文件大小

    proxy_max_temp_file_size 1024m;              # 临时文件最大（超出则暂停缓冲）
}
```

如果后端响应较大，缓冲可以将整个响应存在内存或临时文件中，等收完再发给客户端，减少后端连接占用时间。

### 缓存（Cache）

缓存将后端响应存到本地磁盘，相同请求直接返回缓存，避免重复请求后端。

```nginx
# http 块 — 定义缓存区
http {
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=my_cache:10m
                     max_size=1g inactive=60m use_temp_path=off;

    server {
        location / {
            proxy_cache my_cache;               # 使用名为 my_cache 的缓存区

            # 缓存 key（按域名 + URI + 参数区分）
            proxy_cache_key $scheme$proxy_host$uri$is_args$args;

            # 缓存 200/302 响应 10 分钟，404 缓存 1 分钟
            proxy_cache_valid 200 302 10m;
            proxy_cache_valid 404 1m;

            # 请求 3 次后再缓存（低频请求不缓存）
            proxy_cache_min_uses 3;

            # 后端挂了时使用过期缓存
            proxy_cache_use_stale error timeout updating http_500 http_502;
        }
    }
}
```

`proxy_cache_path` 参数说明：

| 参数 | 作用 |
|------|------|
| `levels=1:2` | 缓存目录层级（1 个字符 / 2 个字符的子目录） |
| `keys_zone=my_cache:10m` | 缓存元数据区名称和大小（10m 约可存 8 万个 key） |
| `max_size=1g` | 缓存磁盘最大 1GB |
| `inactive=60m` | 60 分钟没被访问则清理 |
| `use_temp_path=off` | 直接写入缓存目录（不写临时路径） |

## 负载均衡

负载均衡将请求分发到多个后端服务，提升吞吐量和容错率。

```nginx
# http 块 — 定义服务器组
http {
    upstream backend {
        server localhost:8080;
        server localhost:8081;
        server localhost:8082;
    }

    server {
        listen 80;
        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
        }
    }
}
```

**注意：** `upstream` 中只写地址和端口，不写协议。`proxy_pass` 中指定 `http://` 协议。

### 轮询（默认）

不指定策略就是轮询，请求按顺序依次分配给后端服务器。

```nginx
upstream backend {
    server localhost:8080;
    server localhost:8081;
    server localhost:8082;
}
```

### 最小连接数

将请求分配给当前活动连接最少的服务器。

```nginx
upstream backend {
    least_conn;
    server localhost:8080;
    server localhost:8081;
    server localhost:8082;
}
```

### IP 哈希

同一 IP 地址始终访问同一台服务器，解决 Session 共享问题。

```nginx
upstream backend {
    ip_hash;
    server localhost:8080;
    server localhost:8081;
    server localhost:8082;
}
```

### 自定义哈希

用 `$request_uri`、`$args` 等变量自定义哈希键，比 `ip_hash` 更灵活。

```nginx
upstream backend {
    hash $request_uri consistent;
    server localhost:8080;
    server localhost:8081;
}
```

`consistent` 参数启用 Ketama 一致性哈希算法。后端服务器增减时，只影响被修改节点的映射关系，其他节点的连接保持有效，减少缓存失效。

### 随机

每次请求随机选择服务器。

```nginx
upstream backend {
    random two least_conn;
    server localhost:8080;
    server localhost:8081;
    server localhost:8082;
}
```

`two` 是可选参数：在考虑权重的前提下随机选两台，再用指定方法（如 `least_conn`）从中挑一台。

### 权重

服务器权重决定分配比例。

```nginx
upstream backend {
    server localhost:8080 weight=3;
    server localhost:8081 weight=2;
    server localhost:8082 weight=1;
}
```

上面配置下，6 次请求中有 3 次走 8080、2 次走 8081、1 次走 8082。

### 健康检查

```nginx
upstream backend {
    server localhost:8080 max_fails=3 fail_timeout=30s;
    server localhost:8081 max_fails=3 fail_timeout=30s;
}
```

- `max_fails=3`：连续 3 次失败标记为不可用
- `fail_timeout=30s`：标记为不可用后 30 秒内不再转发请求

## HTTPS 配置

HTTPS 在 `server` 块中配置 SSL 证书，监听 443 端口。

```nginx
server {
    listen 443 ssl http2;
    server_name example.com;

    # 证书文件（需从服务商获取）
    ssl_certificate     /etc/nginx/ssl/example.com.pem;
    ssl_certificate_key /etc/nginx/ssl/example.com.key;

    # 协议和加密套件
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;
    ssl_prefer_server_ciphers on;

    # 会话缓存（提高 SSL 握手性能）
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    location / {
        root /var/www/html;
    }
}

# HTTP → HTTPS 重定向
server {
    listen 80;
    server_name example.com;
    return 301 https://$host$request_uri;
}
```

证书文件从服务商下载后放到指定路径即可。常见证书类型：

| 文件 | 对应参数 |
|------|----------|
| `.pem` / `.crt` | `ssl_certificate` |
| `.key` | `ssl_certificate_key` |

```nginx
# SSL 会话缓存
ssl_session_cache shared:SSL:10m;   # 1m ≈ 4000 个会话
ssl_session_timeout 10m;            # 超时时间（默认 5 分钟）
```

会话缓存可以减少重复 SSL 握手的开销。多工作进程共享缓存需要 `shared:` 前缀。

## TCP/UDP 代理（stream）

`stream` 块与 `http` 平级，用于代理 TCP 或 UDP 流量。

```nginx
stream {
    upstream tcp_backend {
        server localhost:3306;
        server localhost:3307;
    }

    server {
        listen 3306;
        proxy_pass tcp_backend;
        proxy_connect_timeout 5s;
    }
}
```

支持与 http 级别的负载相同策略：

```nginx
stream {
    upstream db_servers {
        least_conn;
        server 10.0.0.1:3306 max_fails=3 fail_timeout=30s;
        server 10.0.0.2:3306;
    }

    server {
        listen 33060;
        proxy_pass db_servers;
        proxy_timeout 3600s;
    }
}
```

`stream` 适合数据库、Redis、MQ 等 TCP 协议的反代和负载均衡。

## URL 重写

### return

直接返回状态码和内容给客户端，常用于重定向。

```nginx
location /old-path {
    return 301 http://example.com/new-path;
}
```

301 告诉客户端地址已经永久变更，浏览器会记住并在后续直接访问新地址。如果需要隐藏新地址，用 `proxy_pass` 代替。

**实际应用：HTTP → HTTPS**

```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    return 301 https://$server_name$request_uri;
}
```

**只返回状态码：**

```nginx
location /api/v1/old {
    return 410;   # 资源已永久删除
}

location /health {
    return 200 "OK\n";
    add_header Content-Type text/plain;
}
```

### rewrite

`rewrite` 用正则匹配并修改请求 URI，可以按顺序配置多条。

```nginx
location / {
    rewrite ^/old/(.*)$ /new/$1 redirect;
    rewrite ^/users/(\d+)$ /user?id=$1 last;
}
```

rewrite 按顺序从上到下匹配，匹配到就执行并终止后续规则。

**保留与丢弃参数：**

```nginx
# 保留原参数（默认行为）
rewrite ^/post/(\d+)$ /post?id=$1 last;

# 丢弃原参数（加 ? 号）
rewrite ^/post/(\d+)$ /post?id=$1? last;
```

**开启 rewrite 日志：**

```nginx
http {
    rewrite_log on;
    error_log /var/log/nginx/rewrite.log notice;
}
```

**`last` 和 `break` 的区别：**

```nginx
server {
    listen 8000;

    location /old/ {
        rewrite ^/old/(.*)$ /new/$1 last;
        # last — 停止当前 rewrite 块，用新路径重新匹配 location
    }

    location /new/ {
        rewrite ^/new/(.*)$ /final/$1 break;
        # break — 停止 rewrite，执行当前 location 块内的其他指令
        proxy_pass http://backend;
    }

    location /final/ {
        alias /data/files/;
    }
}
```

**完整流程示例：**

客户端访问 `localhost:8000/old/1.txt`

```nginx
location /old/ {
    rewrite ^/old/(.*)$ /new/$1 last;
}
# → 路径改写为 /new/1.txt，重新匹配 location

location /new/ {
    # 匹配到此 location
    rewrite ^/new/(.*)$ /final/$1 break;
    # → 路径改写为 /final/1.txt，break 停止，执行本块
    proxy_pass http://backend/files/;
    # → 转发到 http://backend/files/1.txt
}
```

## 访问控制

### IP 黑白名单

```nginx
# 允许指定 IP（白名单）
location /admin {
    allow 192.168.1.0/24;
    allow 10.0.0.1;
    deny all;                          # 其他全部拒绝
}

# 拒绝指定 IP（黑名单）
location /api {
    deny 1.2.3.4;
    deny 5.6.7.0/24;
    allow all;                         # 其他全部允许
}
```

`allow` 和 `deny` 按顺序匹配，命中即停止。通常白名单用 `deny all` 结尾，黑名单用 `allow all` 结尾。

### 基础认证

```nginx
location /private/ {
    auth_basic "Restricted Area";
    auth_basic_user_file /etc/nginx/.htpasswd;
}
```

密码文件通过 `htpasswd` 工具生成：

```sh
# 安装 htpasswd
sudo yum install -y httpd-tools
# 或
sudo apt install -y apache2-utils

# 创建密码文件（首次 -c 创建）
sudo htpasswd -c /etc/nginx/.htpasswd username

# 添加更多用户（不加 -c）
sudo htpasswd /etc/nginx/.htpasswd anotheruser
```

## 限流

### 请求频率限制

```nginx
# http 块 — 定义限流区
http {
    # 定义：名称为 mylimit，10m 内存，速率 10r/s（每秒 10 个请求）
    limit_req_zone $binary_remote_addr zone=mylimit:10m rate=10r/s;

    server {
        location /api/ {
            limit_req zone=mylimit burst=20 nodelay;
            proxy_pass http://backend;
        }
    }
}
```

- `rate=10r/s`：每秒最多 10 个请求
- `burst=20`：允许峰值突发 20 个请求排队
- `nodelay`：突发请求不等待，直接处理（但会消耗 burst 配额）。不加 nodelay 时突发请求会排队等待

### 并发连接数限制

```nginx
http {
    limit_conn_zone $binary_remote_addr zone=addr:10m;

    server {
        location /download/ {
            limit_conn addr 10;         # 同一 IP 最多 10 个并发连接
            limit_conn_status 503;      # 超过限制时返回 503
        }
    }
}
```

## 日志配置

### 自定义日志格式

```nginx
http {
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    log_format json escape=json '{'
        '"time":"$time_local",'
        '"remote_ip":"$remote_addr",'
        '"request":"$request",'
        '"status":$status,'
        '"bytes":$body_bytes_sent,'
        '"referer":"$http_referer",'
        '"agent":"$http_user_agent",'
        '"upstream":"$upstream_addr",'
        '"upstream_time":"$upstream_response_time"'
    '}';

    access_log /var/log/nginx/access.log main;
    access_log /var/log/nginx/access.json.log json buffer=32k;  # 同时输出 JSON
}
```

JSON 格式方便对接日志收集系统（ELK、Loki 等）。`buffer=32k` 可以批量写入，减少磁盘 IO。

### 错误日志级别

```nginx
error_log /var/log/nginx/error.log warn;       # 推荐：记录警告及以上
# error_log /var/log/nginx/error.log debug;    # 调试时用，会记录大量信息
```

### 取消特定请求的日志

```nginx
location /health {
    access_log off;
    return 200 "OK\n";
}
```

## 跨域配置（CORS）

```nginx
location /api/ {
    # 允许的来源（生产环境替换为具体域名）
    add_header 'Access-Control-Allow-Origin' '$http_origin' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range,Authorization' always;
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range' always;

    # 跨域预检请求（OPTIONS）直接返回 204
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Max-Age' 1728000;
        add_header 'Content-Type' 'text/plain; charset=utf-8';
        add_header 'Content-Length' 0;
        return 204;
    }
}
```

## 防盗链

```nginx
location ~ \.(jpg|jpeg|png|gif|svg|ico|webp)$ {
    valid_referers none blocked server_names
                   ~\.example\.com;
    if ($invalid_referer) {
        return 403;
    }
}
```

`valid_referers` 规则：

| 值 | 含义 |
|----|------|
| `none` | 允许直接访问（不带 Referer） |
| `blocked` | 允许 Referer 存在但被防火墙隐藏的情况 |
| `server_names` | 允许当前 server_name |
| `~\.example\.com` | 正则匹配允许的域名 |

## 文件处理

### Gzip 压缩

```nginx
http {
    gzip on;
    gzip_vary on;                      # 响应头添加 Vary: Accept-Encoding
    gzip_proxied any;                  # 对代理请求也压缩
    gzip_comp_level 6;                 # 压缩级别（1-9，6 是平衡点）
    gzip_min_length 1000;              # 小于 1KB 的文件不压缩
    gzip_types text/plain text/css application/json
               application/javascript text/xml application/xml
               image/svg+xml;          # 针对文本类资源压缩
    gzip_disable "msie6";              # 禁用 IE6 的压缩
}
```

### sendfile

默认 nginx 将文件复制到缓冲区再发送。`sendfile` 直接在内核态传输文件，减少内存拷贝。

```nginx
http {
    sendfile on;
    sendfile_max_chunk 512k;           # 单次传输最大 512KB
    tcp_nopush on;                     # 优化发送包（与 sendfile 配合使用）
}
```

### try_files

`try_files` 按顺序查找文件，找到即止。常用于 SPA 路由和静态文件查找。

```nginx
# SPA 单页应用：前端路由全部指向 index.html
location / {
    try_files $uri $uri/ /index.html;
}

# 找不到时返回指定状态码
location / {
    try_files $uri $uri/ =404;
}

# 静态文件由 nginx 直接处理，不命中时转发给后端
location /static/ {
    try_files $uri @backend;
}

location @backend {
    proxy_pass http://localhost:3000;
}
```

## 替换返回内容

`sub_filter` 可以在响应返回到客户端之前替换文本内容。

```nginx
location / {
    sub_filter 'old-text' 'new-text';
    sub_filter_once on;                # 只替换第一次匹配（off 替换所有）
    sub_filter_types text/html;        # 仅对 HTML 生效
}
```

注意 `sub_filter` 需要安装 `ngx_http_sub_module`（通常默认包含）。替换只对响应体有效，不修改响应头。

## 完整配置示例

将以上各节整合为一个可用的完整配置：

```nginx
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events {
    worker_connections 1024;
    multi_accept on;
    use epoll;
}

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    # 日志
    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
    access_log /var/log/nginx/access.log main;

    # 性能优化
    sendfile on;
    tcp_nopush on;
    keepalive_timeout 65;

    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json application/javascript
               text/xml application/xml image/svg+xml;

    # 缓存区定义
    proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=static_cache:10m
                     max_size=1g inactive=60m use_temp_path=off;

    # 限流区定义
    limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

    # 负载均衡组
    upstream backend {
        least_conn;
        server 192.168.1.10:8080 max_fails=3 fail_timeout=30s;
        server 192.168.1.11:8080 max_fails=3 fail_timeout=30s;
        server 192.168.1.12:8080 backup;  # 备用：其他都挂了才启用
    }

    # —— 站点：前端静态页面 ——
    server {
        listen 80;
        server_name www.example.com;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name www.example.com;

        ssl_certificate /etc/nginx/ssl/example.pem;
        ssl_certificate_key /etc/nginx/ssl/example.key;
        ssl_protocols TLSv1.2 TLSv1.3;
        ssl_session_cache shared:SSL:10m;
        ssl_session_timeout 10m;

        # SPA 路由
        location / {
            root /var/www/html;
            index index.html;
            try_files $uri $uri/ /index.html;
            expires 7d;
        }

        # API 反向代理
        location /api/ {
            limit_req zone=api_limit burst=20 nodelay;
            proxy_pass http://backend/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # 缓存
            proxy_cache static_cache;
            proxy_cache_valid 200 5m;
            proxy_cache_key $scheme$proxy_host$uri$is_args$args;
        }

        # WebSocket
        location /ws/ {
            proxy_pass http://backend;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_read_timeout 86400s;
        }

        # 静态资源
        location /static/ {
            alias /data/static/;
            expires 30d;
            add_header Cache-Control "public";
        }

        # 图片防盗链
        location ~ \.(jpg|jpeg|png|gif|webp)$ {
            valid_referers none blocked ~\.example\.com;
            if ($invalid_referer) {
                return 403;
            }
            root /var/www/html;
            expires 30d;
        }

        # 管理后台 IP 白名单
        location /admin {
            allow 192.168.0.0/16;
            deny all;
            proxy_pass http://backend/admin;
        }

        # 健康检查（不记日志）
        location /health {
            access_log off;
            return 200 "OK\n";
            add_header Content-Type text/plain;
        }
    }

    # —— 站点：纯后端 API ——
    server {
        listen 80;
        server_name api.example.com;

        location / {
            proxy_pass http://backend;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

            # 跨域
            add_header 'Access-Control-Allow-Origin' '*' always;
            add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
            add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type' always;

            if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Max-Age' 1728000;
                return 204;
            }
        }
    }
}

# TCP 代理（数据库）
stream {
    upstream mysql_backend {
        server 192.168.1.20:3306;
        server 192.168.1.21:3306;
    }

    server {
        listen 3306;
        proxy_pass mysql_backend;
        proxy_connect_timeout 5s;
        proxy_timeout 3600s;
    }
}
```

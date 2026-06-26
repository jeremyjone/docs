# 域名

域名（Domain Name）是人类可读的网站名称，如 `google.com`。它的本质是 IP 地址的"别名"——人记不住 IP，但记得住名字。

## 域名结构

域名采用分层结构，从右到左范围逐级缩小：

```text
docs.jeremyjone.com.
└──┘└─────┘└───┘└─
 主机  二级  顶级  根
        域名  域名
```

- **根域**（`.`）：最顶层，全球 13 组根域名服务器
- **顶级域 TLD**：`.com`、`.org`、`.net`、`.cn`、`.io` 等
- **二级域**：`jeremyjone`——通常是组织或品牌名
- **三级域 / 主机名**：`docs`——具体服务，也叫子域名

## 域名的解析过程

访问 `docs.jeremyjone.com` 时，DNS 解析大致经过：

```
1. 浏览器 → 本地 hosts 文件（查缓存）
2. 浏览器 → 本地 DNS 缓存
3. 浏览器 → 递归 DNS 服务器（通常是 ISP 或 114.114.114.114）
4. 递归服务器 → 根域名服务器（返回 .com 的 NS 地址）
5. 递归服务器 → .com 顶级域服务器（返回 jeremyjone.com 的 NS 地址）
6. 递归服务器 → jeremyjone.com 权威服务器（返回 docs.jeremyjone.com 的 IP）
7. 浏览器拿到 IP 开始 TCP 连接
```

**关键角色**：

| 角色 | 作用 |
|------|------|
| 根域名服务器 | 知道所有顶级域在哪 |
| TLD 服务器 | 知道二级域在哪 |
| 权威 DNS 服务器 | 知道具体域名对应的 IP |
| 递归 DNS 服务器 | 替客户端跑完整查询链，缓存结果 |
| 本地 DNS 缓存 | 浏览器/OS 缓存，最快 |

## DNS 记录类型

| 类型 | 含义 | 示例 |
|------|------|------|
| A | 域名 → IPv4 | `jeremyjone.com → 123.123.123.123` |
| AAAA | 域名 → IPv6 | `jeremyjone.com → 2001:db8::1` |
| CNAME | 域名 → 另一个域名 | `www.jeremyjone.com → jeremyjone.com` |
| MX | 邮件服务器 | `jeremyjone.com → mail.jeremyjone.com`（含优先级） |
| NS | 域名服务器 | `jeremyjone.com → ns1.dns.com` |
| TXT | 任意文本 | 用于域名验证、SPF 防伪造邮件 |

## 常见 DNS 服务器

| 服务商 | 首选 DNS | 备选 DNS |
|--------|---------|---------|
| 国内通用 | 114.114.114.114 | 114.114.115.115 |
| 阿里 | 223.5.5.5 | 223.6.6.6 |
| Google | 8.8.8.8 | 8.8.4.4 |
| Cloudflare | 1.1.1.1 | 1.0.0.1 |
| OpenDNS | 208.67.222.222 | 208.67.220.220 |

> **实际建议**：国内用户优先用 114 或阿里 DNS，延迟更低。Google/Cloudflare 在全球更快但在国内有丢包。

## 常见操作

**查看域名 IP**：
```bash
ping jeremyjone.com
nslookup jeremyjone.com
dig jeremyjone.com
```

**查找域名 NS 记录**：
```bash
nslookup -type=NS jeremyjone.com
```

## 需要注意的点

- **DNS 缓存**：修改 DNS 记录后不会立即生效，TTL 决定缓存时长
- **DNS 劫持**：运营商可能劫持 NXDOMAIN 跳广告页，用 DNSSEC 或 DoH 可防范
- **泛域名**：`*.jeremyjone.com` 可以匹配所有未单独定义的子域名
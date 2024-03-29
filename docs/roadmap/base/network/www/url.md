# URL

`URL`：`Uniform Resource Identifier`，即统一资源定位符。是对可以从因特网上得到的资源的位置和防蚊方法的一种简洁的表示。`URL` 给资源的位置提供一种抽象的识别方法，并用这种方法给资源定位。只要能够对资源定位，系统就可以对资源进行各种操作，如存取、更新、替换和查找等。

`URL` 相当于一个文件名在网络范围的扩展。因此 `URL` 是与因特网相连的机器上的任何可访问对象的一个指针。

<img :src="$withBase('/assets/roadmap/base/network/url.png')" alt="">

## URI、URL 与 URN

- `URI`：`Uniform Resource Identifier`，统一资源标识符。一个紧凑的字符串，用来表示抽象或物理资源
- `URL`：`Uniform Resource Locator`，统一资源定位符。是 URI 的子集，除了确定一个资源，还提供一种定位该资源的主要访问机制
- `URN`：`Uniform Resource Name`，统一资源名称。作为特定内容的唯一名称使用的，与当前资源的所在地无关。使用 URN，就可以将资源四处迁移，而不用担心迁移后无法访问。

::: tip 题外话
P2P 下载中使用的磁力链接是 URN 的一种实现，它可以持久化的标识一个 BT 资源，资源分布式的存储在 P2P 网络中，无需中心服务器用户即可找到并下载它。
:::

它们的关系：

<img :src="$withBase('/assets/roadmap/frontend/uri.png')" alt="">

更详细的内容可以参考 [stackoverflow](https://stackoverflow.com/questions/4913343/what-is-the-difference-between-uri-url-and-urn)

对于 `URL` 的设计，可以参考 [网站 URL 设计远没那么简单](https://www.biaodianfu.com/url-design.html)

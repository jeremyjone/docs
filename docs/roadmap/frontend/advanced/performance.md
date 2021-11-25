# 性能部分

## 网站的性能优化

网站的性能主要是指一个网站从请求到完全打开的过程是否顺畅以及用时是否能够达到用户的承受度。简单来说，就是用户打开网站，如果时间过长，或者打开时很不顺畅，那么这种体验是非常糟糕的，也就是性能不好。

通常现在使用 `RAIL` 评估标准，即：

- Response：响应，处理事件应在 50ms 以内完成
- Animation：动画，每 10ms 产生一帧，至少每秒 60 帧
- Idle：空闲，尽可能增加空闲时间
- Load：加载，在 5s 内完成所有内容加载并可以交互

<img :src="$withBase('/assets/roadmap/frontend/rail.png')" alt="">

关于网站的性能优化，可以从以下多个方面入手：

- 请求内容

减少 HTTP 请求次数和文件大小，对于资源文件可以使用缓存。

    - 资源需要合并压缩 `content-encoding: gzip`
    - 图片尽量懒加载
    - 音视频流尽可能走流文件
    - css 放在头部，js 放在 body 的底部。

- cookie

减少 `cookie` 的大小

- 避免回流

[避免 DOM 的回流](./principle.html#避免-dom-的回流) 可以有效提高前端性能。

## JavaScript 加载时的阻塞问题
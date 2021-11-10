# 入门

<Description author="jeremyjone" version="0.0.17" date="2020-12-22" copyright="jeremyjone" />

通过入门的章节内容，可以快速引入并使用 JzGantt。

## 安装

使用 `npm` 安装：

```bash
npm install jz-gantt --save
```

::: tip 提示
因为处于完善阶段，请确保使用最新版本。
:::

## 引入

JzGantt 会被整体引入，引入的 Gantt 就是 JzGantt 的根组件。同时需要单独引入样式表，方式如下：

```js
import Vue from "vue";
import Gantt from "jz-gantt";
import "jz-gantt/lib/jz-gantt.css";

Vue.use(Gantt);
```

## 使用

JzGantt 需要一个数组形式的数据对象。例如，您拥有如下数据：

```js
const dataList = [
  {
    index: 1,
    startDate: "2020-06-05",
    endDate: "2020-08-20",
    ttt: {
      a: "aaa",
      b: "bbb"
    },
    name: "mydata1",
    children: []
  },
  {
    index: 2,
    startDate: "2020-07-07",
    endDate: "2020-09-11",
    ttt: {},
    name: "mydata2",
    children: [
      {
        index: 3,
        startDate: "2020-07-10",
        endDate: "2020-08-15",
        ttt: {
          a: "aaa"
        },
        name: "child1",
        children: []
      }
    ]
  }
];
```

那么只需要在 `html` 中简单的使用 JzGantt，即可创建一个甘特内容：

```html{2}
<j-gantt data-index="index" <!-- 请确保它存在 -->
  :data="dataList" />
</j-gantt>
```

如上操作之后，您将看到：

<img :src="$withBase('/assets/gantt/basic.png')" alt="basic">

如果没有，请尝试重新操作。

如果它正常显示，请继续深入学习其他属性，以便更好的适应您的页面。

## 支持 TypeScript

JGantt 已经有了完整的 TypeScript 类型声明文件，如果您需要，只需要在使用中通过：

```js
import { JGantt, JGanttColumn, JGanttSlider } from "jz-gantt";
```

按需导入即可。

## 更新日志

::: tip
您可以跳过此内容以继续深入学习具体配置 JGantt。
:::

### Release 0.0.17

- 调整滑块移动的接口，现在它抛出了旧数据。

### Release 0.0.16

- 添加了一个方法 `setSelected`，用于设置一条选中的项。
- 修正了一些样式问题。

### Release 0.0.15

- 添加了一个 `settings` 的具名插槽，可以向设置抽屉插入自定义内容。
- 添加了一个 `dark` 属性，适配黑暗模式。
- 调整了表头的格式。

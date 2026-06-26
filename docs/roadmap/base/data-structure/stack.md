# 栈

栈（Stack）是一种**后进先出（LIFO）**的线性数据结构，只能在栈顶操作。

---

## 基本操作

| 操作 | 描述 | 复杂度 |
|------|------|--------|
| `push(x)` | 将元素 x 压入栈顶 | O(1) |
| `pop()` | 弹出栈顶元素 | O(1) |
| `peek()` | 查看栈顶元素（不弹出） | O(1) |
| `isEmpty()` | 判断栈是否为空 | O(1) |

---

## 示意图

<img :src="$withBase('/assets/roadmap/base/stack.svg')" alt="栈结构示意图" style="max-width:100%;margin:20px 0;">

---

## 实现方式

### 基于数组

```js
class Stack {
  constructor() { this.items = []; }

  push(x) { this.items.push(x); }
  pop()   { return this.items.pop(); }
  peek()  { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}
```

### 基于链表

用链表实现时，在头部进行 push/pop 操作，复杂度同样为 O(1)。

---

## 常见应用场景

| 场景 | 说明 |
|------|------|
| **函数调用栈** | 每次函数调用压栈，返回时出栈（递归的底层实现） |
| **括号匹配** | 左括号入栈，右括号匹配栈顶元素 |
| **浏览器后退** | 访问页面入栈，后退出栈 |
| **撤销操作** | 编辑器中的 Ctrl+Z |
| **表达式求值** | 中缀转后缀、计算器实现 |

> 栈的核心就是"后进先出"——最近添加的数据最先被取出，与队列恰好相反。

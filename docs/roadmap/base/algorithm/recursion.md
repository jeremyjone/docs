# 递归

递归是函数调用自身的编程方式。核心是**递推公式** + **终止条件**。

---

## 核心思路

把一个大问题拆成相似的小问题，小问题拆到不能再拆（终止条件），然后逐层返回结果。

---

## 分步拆解：阶乘 factorial(4)

```
factorial(4)
  = 4 × factorial(3)           ← 拆解（递推）
    = 4 × (3 × factorial(2))
      = 4 × (3 × (2 × factorial(1)))
        = 4 × (3 × (2 × 1))    ← 终止条件 factorial(1)=1
      = 4 × (3 × 2)            ← 回归
    = 4 × 6
  = 24                         ← 最终结果
```

<img :src="$withBase('/assets/roadmap/base/recursion.svg')" alt="递归调用栈示意图" style="max-width:100%;margin:20px 0;">

---

## 伪代码

```js
function factorial(n) {
  // 终止条件：n <= 1 时直接返回 1
  if (n <= 1) return 1;

  // 递推公式：n! = n × (n-1)!
  return n * factorial(n - 1);
}
```

---

## 递归三要素

| 要素 | 说明 | 示例（阶乘） |
|------|------|-------------|
| 递推公式 | 大问题如何分解为小问题 | `factorial(n) = n × factorial(n-1)` |
| 终止条件 | 何时不再递归，直接返回 | `n <= 1` |
| 递进方向 | 每次递归向终止条件靠近 | n 每次减 1 |

---

## 复杂度

- **时间**：O(n) — 一共递归 n 层
- **空间**：O(n) — 递归栈深度为 n

---

## 尾递归优化

如果递归调用是函数的最后一步（且不需要当前帧的状态），编译器可以复用栈帧，把空间降到 O(1)：

```js
// 普通递归 — 需要当前帧的 n 做乘法
function factorial(n) {
  return n * factorial(n - 1);
}

// 尾递归 — 最后一步只调用自身，不依赖当前帧
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, n * acc);
}
```

> 很多编译器/解释器会对尾递归做优化（如 Safari、ES6 严格模式），但主流 JS 引擎（V8）未完全实现尾递归优化，写代码时不必强求。

---

## 经典递归问题

| 问题 | 递推公式 | 终止条件 |
|------|---------|---------|
| 阶乘 | `f(n) = n × f(n-1)` | `f(1) = 1` |
| 斐波那契 | `f(n) = f(n-1) + f(n-2)` | `f(0)=0, f(1)=1` |
| 二叉树中序遍历 | `traverse(root) = traverse(left) + root + traverse(right)` | 节点为 null |
| 汉诺塔 | `hanoi(n) = hanoi(n-1) + move + hanoi(n-1)` | `n = 1` |

> 没有终止条件 = 无限递归 → 栈溢出（Stack Overflow）。
# 快速排序

选一个 pivot（基准值），把比它小的放左边、大的放右边，然后递归左右子数组。

---

## 核心思路

1. 选一个 pivot（通常取最右元素）
2. 用指针 i 和 j 遍历数组：
   - j 从左往右扫描
   - 碰到比 pivot 小的，就与 i 位置交换，i 右移
3. 遍历结束后，把 pivot 换到 i 的位置
4. 递归对左右两半重复上述过程

---

## 分步拆解

以 `[5, 3, 8, 4, 2]` 升序排序为例：

```
原始：[5, 3, 8, 4, 2]
选 pivot=2（最右元素）

扫描：5>2 不动，3>2 不动，8>2 不动，4>2 不动
把 pivot 换到位置 0 → [2, 3, 8, 4, 5]
                          ↑ pivot 已就位

递归左 [ ] → 空，跳过
递归右 [3, 8, 4, 5]
  pivot=5
  扫描：3<5 → 放左边，8>5 不动，4<5 → 放左边
  pivot 归位 → [3, 4, 5, 8]
                     ↑ 就位
  递归左 [3, 4] → pivot=4 → [3, 4]
  递归右 [8] → 单元素，结束
```

<img :src="$withBase('/assets/roadmap/base/quicksort.svg')" alt="快速排序分区图" style="max-width:100%;margin:20px 0;">

---

## 伪代码

```js
function quickSort(arr, left, right) {
  if (left >= right) return; // 0 或 1 个元素，不排

  let pivot = arr[right]; // 选最右为 pivot
  let i = left; // i 是"小元素区"右边界

  for (let j = left; j <= right - 1; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]]; // pivot 归位

  quickSort(arr, left, i - 1); // 递归左半
  quickSort(arr, i + 1, right); // 递归右半
}
```

---

## 复杂度

| 维度 | 值 |
|------|-----|
| 平均 | O(n log n) — 每次分区 O(n)，递归深度 log n |
| 最坏 | O(n²) — 每次 pivot 都是最大/最小值（如已排序数组） |
| 空间 | O(log n) — 递归栈空间 |
| 稳定 | 否（交换可能改变相等元素的相对顺序） |

---

## 避免最坏情况

已排序数组选最右元素做 pivot 会导致 O(n²)。优化方式：

- **随机选 pivot**：在 `[left, right]` 区间随机选一个与最右交换
- **三数取中**：取 `arr[left]`、`arr[mid]`、`arr[right]` 的中位数做 pivot
- **混合排序**：子数组长度 < 某个阈值（如 10）时改用插入排序

> 快速排序是工程中最常用的排序。实际性能优于归并排序（CPU 缓存友好）。多数语言的内置排序底层就是快排的优化变种。
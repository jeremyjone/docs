# 算法

算法是解决问题的明确步骤序列。程序 = 数据结构 + 算法，两者相辅相成。

## 内容导航

| 章节 | 核心内容 | 难度 |
|------|---------|------|
| [复杂度分析](/roadmap/base/algorithm/complexity.html) | 大 O 表示法、常见复杂度、估算方法 | ⭐ |
| [二分查找](/roadmap/base/algorithm/binary-search.html) | 有序数组中找目标，O(log n) | ⭐⭐ |
| [冒泡排序](/roadmap/base/algorithm/bubble-sort.html) | 相邻比较，O(n²)，适合教学 | ⭐ |
| [快速排序](/roadmap/base/algorithm/quick-sort.html) | 分治思想，O(n log n)，工程首选 | ⭐⭐⭐ |
| [递归](/roadmap/base/algorithm/recursion.html) | 递推公式 + 终止条件，函数调用自身 | ⭐⭐ |
| [动态规划](/roadmap/base/algorithm/dp.html) | 重叠子问题、状态转移、空间换时间 | ⭐⭐⭐⭐ |
| [图遍历](/roadmap/base/algorithm/graph-traversal.html) | BFS 队列 vs DFS 栈，线性扫图 | ⭐⭐⭐ |

## 学习建议

1. **优先掌握**：复杂度 + 二分查找 + 排序（快排原理）+ 递归 + BFS/DFS，覆盖日常最高频场景
2. **按题型刷题**：数组、链表、树、动态规划各刷 10 道经典
3. **先边界再逻辑**：空输入、单元素、已排序、逆序——这些情况先想好
4. **复杂度先估算**：数据量 10³ 以内什么都行，10⁵ 以上只能用 O(n log n) 以下

> 结合 [数据结构](/roadmap/base/data-structure/) 一起学——数据结构是容器，算法是操作步骤。

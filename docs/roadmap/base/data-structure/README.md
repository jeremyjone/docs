# 数据结构

数据结构是计算机存储和组织数据的方式。选择合适的数据结构，直接影响程序的性能和复杂度。

> 程序 = 数据结构 + 算法。数据结构是"容器"，算法是"操作容器的方法"。

## 内容导航

| 结构 | 核心特点 | 复杂度亮点 |
|------|---------|-----------|
| [数组与链表](/roadmap/base/data-structure/array.html) | 连续 vs 分散，随机访问 vs 指针链接 | 数组读 O(1)、链表写 O(1) |
| [栈](/roadmap/base/data-structure/stack.html) | 后进先出（LIFO） | 所有操作 O(1) |
| [队列](/roadmap/base/data-structure/queue.html) | 先进先出（FIFO） | 所有操作 O(1) |
| [树结构](/roadmap/base/data-structure/tree.html) | 二叉树、BST、堆 | BST 查 O(log n)、堆取极值 O(1) |
| [哈希表](/roadmap/base/data-structure/hash.html) | 键值映射 | 查找 O(1) 平均 |
| [图的表示](/roadmap/base/data-structure/graph.html) | 邻接矩阵 vs 邻接表 | 矩阵查边 O(1)、邻接表省空间 |

## 快速选择

| 核心需求 | 推荐结构 |
|---------|---------|
| 按索引快速访问 | 数组 |
| 频繁插入删除 | 链表 |
| 后进先出 | 栈 |
| 先进先出 | 队列 |
| 快速查找 | 哈希表 |
| 有序存储 + 快速查找 | 二叉搜索树 |
| 快速取最大/最小值 | 堆 |

> 口诀：**访问用数组，增删用链表，查找用哈希，顺序用树，极值用堆。**
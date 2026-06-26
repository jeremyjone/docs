# 算法

算法是解决问题的明确步骤序列。程序 = 数据结构 + 算法，数据结构组织数据，算法处理数据。

本章覆盖最核心的几类算法，每个都按 **核心思路 → 分步拆解 → 图例 → 伪代码 → 复杂度** 展开。

---

## 复杂度分析基础

算法好坏用**时间复杂度**（执行时间随数据量的增长趋势）和**空间复杂度**（额外内存消耗）衡量。

| 大 O | 名称 | 含义 |
|------|------|------|
| O(1) | 常数时间 | 与数据量无关，一步到位 |
| O(log n) | 对数时间 | 每步排除一半数据，飞速收敛 |
| O(n) | 线性时间 | 遍历所有数据一次 |
| O(n log n) | 线性对数 | 典型高效排序的性能 |
| O(n²) | 平方时间 | 两层嵌套循环 |
| O(2ⁿ) | 指数时间 | n 稍微一大就爆炸 |

<img :src="$withBase('/assets/roadmap/base/time-complexity.svg')" alt="时间复杂度对比" style="max-width:100%;margin:20px 0;">

> 实操参考：n < 10³ 时 O(n²) 勉强可用；n > 10⁵ 必须 O(n log n) 或更低。O(2ⁿ) 只在 n < 30 时才考虑。

---

## 二分查找

在**有序数组**中找到目标值，每次排除一半数据。

### 核心思路

取数组中间元素与目标值比较：
- 相等 → 找到了
- 目标值更小 → 往左半边继续找
- 目标值更大 → 往右半边继续找

### 分步拆解

在 `[2, 8, 13, 18, 23, 31, 42, 56, 67]` 中找 31：

```
S1: left=0, right=8, mid=(0+8)/2=4 → arr[4]=23
    23 < 31 → 舍弃左半 → left=5

S2: left=5, right=8, mid=(5+8)/2=6 → arr[6]=42
    42 > 31 → 舍弃右半 → right=5

S3: left=5, right=5, mid=5 → arr[5]=31 ✅ 找到
```

只查了 3 次。线性查找最坏要查 9 次。

<img :src="$withBase('/assets/roadmap/base/binary-search.svg')" alt="二分查找示意图" style="max-width:100%;margin:20px 0;">

### 伪代码

```text
function binarySearch(arr, target):
    left = 0
    right = arr.length - 1

    while left <= right:
        mid = (left + right) / 2

        if arr[mid] == target:
            return mid           // 找到了
        else if arr[mid] < target:
            left = mid + 1       // 去右边找
        else:
            right = mid - 1      // 去左边找

    return -1  // 没找到
```

### 复杂度

- **时间**：O(log n) — 每步数据量减半
- **空间**：O(1) — 只用了几个变量

**前提**：数组必须已排序。

---

## 冒泡排序

重复遍历数组，比较相邻元素，把大的一路"冒泡"到末尾。

### 核心思路

每一轮遍历，从头到尾比较相邻两个元素。如果前 > 后，就交换。一轮结束后，最大的元素被"冒泡"到最后面。下一轮就不用再管它了。重复 n-1 轮。

### 分步拆解

以 `[5, 3, 8, 4, 2]` 升序排序为例：

```
初始：[5, 3, 8, 4, 2]

第1轮：比较所有相邻对
  5>3 → 交换 → [3, 5, 8, 4, 2]
  5<8 → 不动
  8>4 → 交换 → [3, 5, 4, 8, 2]
  8>2 → 交换 → [3, 5, 4, 2, 8]  ← 8 冒泡到末尾 ✅

第2轮：忽略最后1个（已就位）
  3<5 → 不动
  5>4 → 交换 → [3, 4, 5, 2, 8]
  5>2 → 交换 → [3, 4, 2, 5, 8]  ← 5 就位 ✅

第3轮：忽略最后2个
  3<4 → 不动
  4>2 → 交换 → [3, 2, 4, 5, 8]  ← 4 就位 ✅

第4轮：忽略最后3个
  3>2 → 交换 → [2, 3, 4, 5, 8]  ← 3 就位 ✅ 排序完成
```

<img :src="$withBase('/assets/roadmap/base/bubble-sort.svg')" alt="冒泡排序分步图" style="max-width:100%;margin:20px 0;">

### 伪代码

```text
function bubbleSort(arr):
    n = arr.length

    for i = 0 to n-2:          // 共 n-1 轮
        for j = 0 to n-2-i:    // 每轮比较范围缩小
            if arr[j] > arr[j+1]:
                swap(arr[j], arr[j+1])

    return arr
```

### 复杂度

- **最坏/平均**：O(n²) — 完全逆序时全部交换
- **最好**：O(n) — 数组已有序，可加提前退出优化
- **空间**：O(1) — 原地排序
- **稳定**：相等元素不交换，相对顺序不变

> 冒泡排序适合教学，实际开发中 n > 100 就不推荐了。

---

## 快速排序

选一个 pivot（基准值），把比它小的放左边、大的放右边，然后递归左右子数组。

### 核心思路

1. 选一个 pivot（通常取最右元素）
2. 用两个指针 i 和 j，遍历数组：
   - j 从左往右扫描
   - 碰到比 pivot 小的，就与 i 位置交换，i 右移
3. 遍历结束后，把 pivot 换到 i 的位置
4. 递归对左右两半重复上述过程

### 分步拆解

以 `[5, 3, 8, 4, 2]` 升序排序为例：

```
选 pivot=2（最右元素）
扫描：5>2 不动，3>2 不动，8>2 不动，4>2 不动
把 pivot 换到位置 0 → [2, 3, 8, 4, 5]
                         ↑ pivot 已就位

递归左子数组 [] → 空，跳过

递归右子数组 [3, 8, 4, 5]
选 pivot=5
扫描：3<5 → 放左边，8>5 不动，4<5 → 放左边
把 pivot 换到位置 2 → [3, 4, 5, 8]
                              ↑ pivot 就位

递归左 [3, 4] → 选 pivot=4 → [3, 4] → 递归 [3] 结束
递归右 [8] → 单元素，结束
```

<img :src="$withBase('/assets/roadmap/base/quicksort.svg')" alt="快速排序分区图" style="max-width:100%;margin:20px 0;">

### 伪代码

```text
function quickSort(arr, left, right):
    if left >= right:
        return                     // 0 或 1 个元素，不用排

    pivot = arr[right]             // 选最右为 pivot
    i = left                       // i 是"小元素区"的右边界

    for j = left to right-1:
        if arr[j] < pivot:
            swap(arr[i], arr[j])
            i = i + 1

    swap(arr[i], arr[right])       // pivot 归位

    quickSort(arr, left, i-1)     // 递归左半
    quickSort(arr, i+1, right)    // 递归右半
```

### 复杂度

- **平均**：O(n log n) — 每次分区 O(n)，递归深度 log n
- **最坏**：O(n²) — 每次 pivot 都是最大/最小（如已排序数组）
- **空间**：O(log n) — 递归栈空间
- **不稳定**：交换可能改变相等元素的相对顺序

> 快速排序是工程中最常用的排序，实际性能优于归并排序（CPU 缓存友好）。随机选 pivot 可避免最坏情况。

---

## 递归

递归是函数调用自身的编程方式。核心是**递推公式** + **终止条件**。

### 核心思路

把一个大问题拆成相似的小问题，小问题拆到不能再拆（终止条件），然后逐层返回结果。

### 分步拆解：阶乘 factorial(4) = 4 × 3 × 2 × 1

```
factorial(4)
  = 4 × factorial(3)           ← 拆解
    = 4 × (3 × factorial(2))
      = 4 × (3 × (2 × factorial(1)))
        = 4 × (3 × (2 × 1))    ← 终止条件 factorial(1)=1
      = 4 × (3 × 2)            ← 逐层回归
    = 4 × 6
  = 24                         ← 最终结果
```

<img :src="$withBase('/assets/roadmap/base/recursion.svg')" alt="递归调用栈示意图" style="max-width:100%;margin:20px 0;">

### 伪代码

```text
function factorial(n):
    // 终止条件：n <= 1 时直接返回 1
    if n <= 1:
        return 1

    // 递推公式：n! = n × (n-1)!
    return n × factorial(n - 1)
```

### 递归三要素

| 要素 | 说明 | 示例 |
|------|------|------|
| 递推公式 | 大问题如何分解为小问题 | `factorial(n) = n × factorial(n-1)` |
| 终止条件 | 何时不再递归，直接返回 | `n <= 1` |
| 递进方向 | 每次递归向终止条件靠近 | n 每次减 1 |

### 复杂度

- **时间**：O(n) — 一共递归 n 层
- **空间**：O(n) — 递归栈深度为 n

> **尾递归优化**：如果递归调用是函数最后一步（且不再需要当前帧的状态），编译器可以复用栈帧，把空间降到 O(1)。上面的 factorial 不是尾递归（乘法的结果还需要当前帧的 n）。

---

## 动态规划

动态规划把大问题拆成**重叠子问题**，每个子问题只计算一次，结果存起来复用。

### 核心思路

几种思路的演进对比：

| 方案 | 思路 | 复杂度 |
|------|------|--------|
| 朴素递归 | 直接递归，重复计算 | O(2ⁿ) |
| 记忆化递归 | 递归 + 缓存已计算结果（自顶向下） | O(n) |
| 动态规划 | 从小往大迭代填表（自底向上） | O(n) |

### 分步拆解：斐波那契数列 F(5)

斐波那契数列定义：
```
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)   (n >= 2)
```

**朴素递归（低效，重复计算）：**

```
          F(5)
         /    \
      F(4)    F(3)
     /   \    /   \
   F(3)  F(2) F(2) F(1)
   /  \  / \  / \
 F(2)F(1)F(1)F(0)F(1)F(0)
 / \
F(1)F(0)
```

F(3) 算了 2 次，F(2) 算了 3 次，F(1) 算了 5 次——大量重复。

**动态规划（自底向上填表）：**

```
F(0) = 0          ← 已知
F(1) = 1          ← 已知

F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5  ✅
```

每个子问题只算一次，结果存下来给后面用。

### 伪代码

```text
// 动态规划（自底向上）
function fibonacci(n):
    if n <= 1:
        return n

    dp = new int[n+1]
    dp[0] = 0
    dp[1] = 1

    for i = 2 to n:
        dp[i] = dp[i-1] + dp[i-2]

    return dp[n]
```

**空间优化版**（只用两个变量）：

```text
function fibonacci(n):
    if n <= 1:
        return n

    prev2 = 0   // F(i-2)
    prev1 = 1   // F(i-1)

    for i = 2 to n:
        curr = prev1 + prev2
        prev2 = prev1
        prev1 = curr

    return prev1
```

### 复杂度

| 方案 | 时间 | 空间 |
|------|------|------|
| 朴素递归 | O(2ⁿ) | O(n) 栈空间 |
| 记忆化递归 | O(n) | O(n) |
| 动态规划（填表） | O(n) | O(n) |
| 动态规划（空间优化） | O(n) | O(1) |

> DP 的思考步骤：① 确认问题有最优子结构 ② 定义状态（dp[i] 表示什么） ③ 找状态转移方程 ④ 确定初始值 ⑤ 按顺序计算。

---

## 图遍历：BFS 与 DFS

从某个起点出发，按一定顺序访问图中的所有节点。

### 核心思路

| 算法 | 数据结构 | 策略 | 特点 |
|------|---------|------|------|
| BFS | 队列（FIFO） | 按层扩散 | 找无权图最短路径 |
| DFS | 栈（LIFO）或递归 | 一条路走到底再回溯 | 找是否存在路径 |

### 分步拆解

从节点 A 出发遍历下面的图：

```
    A
   / \
  B   C
  |   |
  D---E
  |
  F
```

**BFS（队列）：A → B、C → D、E → F**

```
队列: [A]          出 A，B、C 入队
队列: [B, C]       出 B，D 入队
队列: [C, D]       出 C，E 入队
队列: [D, E]       出 D，F 入队
队列: [E, F]       出 E
队列: [F]          出 F
结束
```

**DFS（栈）：A → B → D → F → E → C**

```
栈: [A]            出 A，B、C 入栈
栈: [B, C]         出 C（栈顶），E 入栈
栈: [B, E]         出 E，D 入栈
栈: [B, D]         出 D，F 入栈
栈: [B, F]         出 F
栈: [B]            出 B
栈: []             结束
```

> 注意：DFS 的顺序取决于子节点的入栈顺序。上面是假设按字母顺序入栈（C 先出），如果 B 先入栈则 C 后出，实际路径会不同。

<img :src="$withBase('/assets/roadmap/base/bfs-dfs.svg')" alt="BFS与DFS对比图" style="max-width:100%;margin:20px 0;">

### 伪代码

**BFS 用队列：**

```text
function bfs(graph, start):
    queue = [start]
    visited = {start}

    while queue is not empty:
        node = queue.dequeue()
        print(node)                    // 访问当前节点

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.enqueue(neighbor)
```

**DFS 用递归：**

```text
function dfs(graph, node, visited):
    visited.add(node)
    print(node)                        // 访问当前节点

    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

**DFS 用栈（非递归）：**

```text
function dfs(graph, start):
    stack = [start]
    visited = {start}

    while stack is not empty:
        node = stack.pop()
        print(node)                    // 访问当前节点

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                stack.push(neighbor)
```

### 复杂度

两种算法：
- **时间**：O(V + E) — V 是顶点数，E 是边数
- **空间**：O(V) — 需要 visited 集合 + 队列/栈

### 应用场景

| 场景 | 用 BFS 还是 DFS |
|------|----------------|
| 最短路径（无权图） | BFS — 首次到达就是最短 |
| 判断连通性 | DFS — 更简洁 |
| 拓扑排序 | DFS — 后序遍历 |
| 走迷宫找出口 | BFS — 最短路径 |
| 检测图中是否有环 | DFS — 检测回边 |
| 社交网络推荐 | BFS — 按距离分层 |

---

## 实践建议

1. **优先掌握**：二分查找 + 排序（至少理解快排）+ 递归 + BFS/DFS，这是日常开发最高频的
2. **按题型刷题**：数组、链表、树、动态规划各刷 10 道经典，不要按算法名瞎刷
3. **先边界再逻辑**：空输入、单元素、已排序、逆序、最大值溢出——这些情况先想好
4. **复杂度先估算**：数据量 10³ 以内什么都行，10⁵ 以上只能用 O(n log n) 以下

> 结合 [数据结构](/roadmap/base/data-structure/) 一起学，效果更好——数据结构是容器，算法是操作容器的步骤。
# 图遍历：BFS 与 DFS

从某个起点出发，按一定顺序访问图中的所有节点。两种核心策略：**广度优先（BFS）** 和 **深度优先（DFS）**。

---

## 核心对比

| 算法 | 数据结构 | 策略 | 特点 |
|------|---------|------|------|
| BFS | 队列（FIFO） | 按层扩散 | 找无权图最短路径 |
| DFS | 栈（LIFO）或递归 | 一条路走到底再回溯 | 判断连通性、检测环 |

---

## 分步拆解

从节点 A 出发遍历下面的图：

```
    A
   / \
  B   C
  |   |
  D——E
  |
  F
```

### BFS（队列）——逐层访问

```
队列: [A]          出 A，B、C 入队
队列: [B, C]       出 B，D 入队
队列: [C, D]       出 C，E 入队
队列: [D, E]       出 D，F 入队
队列: [E, F]       出 E
队列: [F]          出 F → 结束

访问顺序：A → B → C → D → E → F
```

### DFS（栈/递归）——一条路走到底

```
栈: [A]            出 A，B、C 入栈
栈: [B, C]         出 C（栈顶），E 入栈
栈: [B, E]         出 E，D 入栈
栈: [B, D]         出 D，F 入栈
栈: [B, F]         出 F
栈: [B]            出 B → 结束

访问顺序：A → C → E → D → F → B
```

> 注意：DFS 的顺序取决于入栈顺序。上面假设按字母倒序入栈。

<img :src="$withBase('/assets/roadmap/base/bfs-dfs.svg')" alt="BFS与DFS对比图" style="max-width:100%;margin:20px 0;">

---

## 伪代码

### BFS（队列）

```text
function bfs(graph, start):
    queue = [start]
    visited = {start}

    while queue is not empty:
        node = queue.dequeue()
        print(node)                    // 访问

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.enqueue(neighbor)
```

### DFS（递归）

```text
function dfs(graph, node, visited):
    visited.add(node)
    print(node)                        // 访问

    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

### DFS（非递归栈）

```text
function dfs(graph, start):
    stack = [start]
    visited = {start}

    while stack is not empty:
        node = stack.pop()
        print(node)                    // 访问

        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                stack.push(neighbor)
```

---

## 复杂度

两种算法相同：

- **时间**：O(V + E) — V 是顶点数，E 是边数
- **空间**：O(V) — visited 集合 + 队列/栈

---

## 应用场景

| 场景 | 用哪个 |
|------|--------|
| 最短路径（无权图） | BFS — 首次到达就是最短 |
| 判断连通性 | DFS — 代码更简洁 |
| 拓扑排序 | DFS — 后序遍历 |
| 走迷宫找出口 | BFS — 最短路径 |
| 检测图中是否有环 | DFS — 检测回边 |
| 社交网络推荐 | BFS — 按距离分层 |
| 二分图检测 | BFS — 染色法 |
| 全排列/组合 | DFS — 回溯法 |

> BFS 和 DFS 是图算法的基础，Dijkstra、A*、拓扑排序等高级算法都是在此基础上扩展的。
# 二分查找

在**有序数组**中找到目标值，每次排除一半数据，时间复杂度 O(log n)。

---

## 核心思路

取数组中间元素与目标值比较：

- 相等 → 找到了 ✅
- 目标值更小 → 往左半边继续找
- 目标值更大 → 往右半边继续找

---

## 分步拆解

在 `[2, 8, 13, 18, 23, 31, 42, 56, 67]` 中找 **31**：

```
S1: left=0, right=8, mid=(0+8)/2=4 → arr[4]=23
    23 < 31 → 舍弃左半 → left=5

S2: left=5, right=8, mid=(5+8)/2=6 → arr[6]=42
    42 > 31 → 舍弃右半 → right=5

S3: left=5, right=5, mid=5 → arr[5]=31 ✅ 找到了
```

只查了 3 次就找到了。线性查找最坏要查 9 次。

<img :src="$withBase('/assets/roadmap/base/binary-search.svg')" alt="二分查找示意图" style="max-width:100%;margin:20px 0;">

---

## 伪代码

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // 找到了
    } else if (arr[mid] < target) {
      left = mid + 1; // 去右边找
    } else {
      right = mid - 1; // 去左边找
    }
  }

  return -1; // 没找到
}
```

---

## 复杂度

- **时间**：O(log n) — 每步数据量减半
- **空间**：O(1) — 只用了几个变量

**前提**：数组必须已排序。

---

## 常见变种

| 变种 | 说明 |
|------|------|
| 查找第一个等于 target | 找到后继续向左 |
| 查找最后一个等于 target | 找到后继续向右 |
| 查找第一个大于等于 target | 左边界二分 |
| 查找最后一个小于等于 target | 右边界二分 |

> 二分查找的思路可以延伸到很多场景，比如在有序旋转数组中查找、在无限数组中查找等。
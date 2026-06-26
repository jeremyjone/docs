# TypeScript

TypeScript 是 JavaScript 的超集，在 JS 的基础上加了**静态类型系统**。代码最终编译为纯 JavaScript 运行。

> TypeScript = JavaScript + 类型注解。它不会改变 JS 的运行方式，只是在开发阶段帮你提前发现类型错误。

---

## 为什么用 TypeScript

- **编译期查错** — 类型不匹配、属性不存在等问题在保存时就能看到红线，不用跑起来才发现
- **更好的 IDE 支持** — 智能提示、自动补全、重构更安全
- **代码自文档化** — 函数的输入输出一看类型就清楚
- **大型项目必备** — 团队协作时类型就是最好的文档

---

## 基础类型

```typescript
const name: string = 'Jeremy';
const age: number = 18;
const isActive: boolean = true;
const tags: string[] = ['ts', '前端'];
const info: [string, number] = ['版本', 5];  // 元组
const nullable: null = null;
const undef: undefined = undefined;
```

### any vs unknown

```typescript
let a: any = 1;        // 任意类型，跳过所有类型检查（尽量少用）
a.toUpperCase();       // 编译不报错，运行时崩溃
a.foo.bar.baz();       // 也不报错——any 就是"放弃治疗"

let u: unknown = 1;    // 未知类型，赋值随意但使用前必须收窄
u.toUpperCase();       // ❌ 编译报错：Object is of type 'unknown'

if (typeof u === 'string') {
  u.toUpperCase();     // ✅ 收窄后可以使用
}
```

> **经验**：`any` 是逃生舱，能不用就不用。`unknown` 是安全替代方案。

---

## 接口 Interface

```typescript
interface User {
  id: number;
  name: string;
  email?: string;        // ? 表示可选
  readonly createdAt: Date;  // 只读，不可修改
}

const user: User = {
  id: 1,
  name: 'Jeremy',
  createdAt: new Date(),
};

// user.createdAt = new Date();  // ❌ 只读属性不允许赋值
```

### 接口合并与扩展

```typescript
// 同名接口自动合并
interface Pagination {
  page: number;
  pageSize: number;
}

interface Pagination {
  total: number;
}
// 最终 Pagination 包含 page、pageSize、total

// 扩展
interface SearchResult extends Pagination {
  keyword: string;
}
```

---

## 类型别名 Type

`type` 能干的事比 `interface` 更多，但两者在对象类型上有细微差别：

```typescript
// 基本等价于 interface
type Point = { x: number; y: number };

// type 能做但 interface 不能的：
type ID = string | number;              // 联合类型
type Status = 'active' | 'inactive';    // 字面量联合
type Callback<T> = (data: T) => void;   // 函数类型 + 泛型

// 联合类型的使用
function printId(id: ID) {
  console.log(`ID: ${id}`);
}
printId(123);        // ✅
printId('abc');      // ✅
// printId(true);    // ❌ 布尔不在联合类型中
```

---

## 泛型

泛型让类型像参数一样可配置，是 TS 中复用性最强的特性。

### 基础泛型函数

```typescript
// 不用泛型：只能写死一个类型
function first(arr: number[]): number { return arr[0]; }

// 用泛型：任意类型都能用
function first<T>(arr: T[]): T {
  return arr[0];
}

const num = first([1, 2, 3]);     // num 类型为 number
const str = first(['a', 'b']);    // str 类型为 string
```

### 泛型接口

```typescript
interface ApiResponse<T> {
  code: number;
  data: T;
  message: string;
}

const userResp: ApiResponse<User> = {
  code: 200,
  data: { id: 1, name: 'Jeremy' },
  message: 'ok',
};
```

### 泛型约束

```typescript
// 约束 T 必须有 .length 属性
function logLength<T extends { length: number }>(item: T): number {
  return item.length;
}

logLength('hello');     // ✅ string 有 length
logLength([1, 2, 3]);  // ✅ array 有 length
// logLength(123);      // ❌ number 没有 length
```

---

## 类型收窄

TS 通过条件判断自动收窄类型范围：

```typescript
function process(value: string | number | null) {
  if (value === null) {
    // 这里 value 是 null
    return;
  }

  if (typeof value === 'string') {
    // 这里 value 是 string
    return value.toUpperCase();
  }

  // 这里 value 是 number
  return value.toFixed(2);
}
```

### 类型守卫

```typescript
interface Cat { meow(): void; }
interface Dog { bark(): void; }

function isCat(pet: Cat | Dog): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

function handlePet(pet: Cat | Dog) {
  if (isCat(pet)) {
    pet.meow();  // ✅ 收窄为 Cat
  } else {
    pet.bark();  // ✅ 收窄为 Dog
  }
}
```

---

## 常用工具类型

TS 内置的一些类型转换工具：

| 工具类型 | 作用 | 示例 |
|---------|------|------|
| `Partial<T>` | 全部变成可选 | `Partial<User>` → id、name 都可省略 |
| `Required<T>` | 全部变成必选 | `Required<User>` → 所有字段必填 |
| `Pick<T, K>` | 挑出指定字段 | `Pick<User, 'id' | 'name'>` |
| `Omit<T, K>` | 排除指定字段 | `Omit<User, 'createdAt'>` |
| `Record<K, V>` | 构造对象类型 | `Record<string, number>` → `{ [key: string]: number }` |
| `Readonly<T>` | 全部只读 | `Readonly<User>` |

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 只更新部分字段
function updateTodo(todo: Todo, fields: Partial<Todo>) {
  return { ...todo, ...fields };
}

// 挑出两个字段
type TodoPreview = Pick<Todo, 'title' | 'completed'>;
// 等价于 { title: string; completed: boolean; }
```

---

## tsconfig.json 关键配置

```jsonc
{
  "compilerOptions": {
    "strict": true,              // 开启所有严格检查（推荐）
    "target": "ES2020",          // 编译目标版本
    "module": "ESNext",          // 模块系统
    "moduleResolution": "bundler", // 模块解析策略
    "outDir": "./dist",          // 编译输出目录
    "rootDir": "./src",          // 源码目录
    "skipLibCheck": true         // 跳过 .d.ts 检查（加速编译）
  },
  "include": ["src"]
}
```

> `strict: true` 是最重要的一个选项，它同时启用 `noImplicitAny`、`strictNullChecks` 等多项检查。

---

## 实践建议

1. **能用 interface 就用 interface**，需要联合类型/字面量时用 type
2. **any 是敌人** — 新代码出现 any 要有充分理由
3. **泛型写三遍再抽象** — 不要第一次写就泛型，等重复三次再提取
4. **`as` 断言慎用** — `xxx as string` 是告诉编译器"我比你懂"，用 Trust me, bro 模式，用多了取消类型检查的意义
5. **`@ts-expect-error` 比 `@ts-ignore` 好** — 前者会在问题修复后提示你删除注释

> TypeScript 的主要价值不是"写类型"，而是**让编辑器在敲代码时就帮你发现错误**。学会看类型错误信息比记住所有语法更重要。

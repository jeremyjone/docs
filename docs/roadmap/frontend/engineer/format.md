# 格式化工具

代码格式化工具自动统一代码风格，从根本上杜绝"缩进用空格还是 Tab"的争论。

---

## ESLint

检查代码**质量**（未使用变量、潜在错误）和**风格**（缩进、引号、分号）。

```bash
npm install -D eslint

# 初始化配置
npx eslint --init
```

### 基础配置

```js
// eslint.config.js（Flat Config，ESLint 9+）
export default [
  { rules: {
    'no-unused-vars': 'error',          // 未使用变量报错
    'no-console': 'warn',               // console.log 警告
    'quotes': ['error', 'single'],       // 强制单引号
    'semi': ['error', 'always'],         // 末尾分号
    'indent': ['error', 2],              // 2 空格缩进
  }}
];
```

---

## Prettier

专注**代码格式**，不管代码质量。缩进、分行、空格全都自动修。

```bash
npm install -D prettier
```

### 配置

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

---

## ESLint + Prettier 联用

ESLint 管"对不对"，Prettier 管"好不好看"。两者同时使用时，通过配置避免规则冲突：

```bash
npm install -D eslint-config-prettier  # 关闭 ESLint 中与 Prettier 冲突的规则
```

然后 ESLint 配置中加一行：

```js
// eslint.config.js
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  eslintConfigPrettier,   // 放在最后，覆盖前面所有风格规则
  // ... 其他规则
];
```

### VS Code 自动格式化

项目建一个 `.vscode/settings.json`：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

> 这样保存文件时：先 ESlint 修复质量问题，再 Prettier 格式化代码风格。

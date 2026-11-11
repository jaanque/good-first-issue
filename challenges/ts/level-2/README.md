# 🟢 Level 2: Variables & Explicit Primitive Types

> **Difficulty:** Very Easy | **Estimated Time:** 5-10 mins | **Track:** TypeScript

Welcome to **Level 2**! In this challenge, you will explore TypeScript's primitive types (`string`, `number`, `boolean`) and use modern template literals to assemble a strongly typed profile summary.

---

## 📖 What You'll Learn & Why It Matters

TypeScript provides static typing for JavaScript's core primitive types:
- `string`: Textual data (`"TypeScript"`)
- `number`: Numeric data, including integers and floats (`42`, `3.14`)
- `boolean`: Logical values (`true`, `false`)

```typescript
const username: string = "octocat";
const level: number = 2;
const isCompleted: boolean = true;
```

By explicitly specifying types, you ensure your code is self-documenting and protected against accidental type mismatches.

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing typed variables for your contributor card and print a formatted summary.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-2/<your-username>.ts` *(e.g. `challenges/ts/level-2/octocat.ts`)*

2. **Specifications:**
   - Define the following variables with explicit type annotations:
     - `username`: `string`
     - `name`: `string`
     - `favoriteLanguage`: `string`
     - `level`: `number` (set to `2`)
     - `isAvailable`: `boolean` (e.g. `true`)
   - Assemble a summary string using template literals (`` `...${}` ``).
   - Print the summary using `console.log()`.

---

## 💡 Example

```typescript
// Level 2: Variables & Explicit Types
// Contributor: @octocat

const username: string = "octocat";
const name: string = "Mona Lisa Octocat";
const favoriteLanguage: string = "TypeScript";
const level: number = 2;
const isAvailable: boolean = true;

const profile: string = `Contributor: ${name} (@${username}) | Level: ${level} | Favorite: ${favoriteLanguage} | Available: ${isAvailable}`;

console.log(profile);
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-2/<your-username>.ts
```

### Expected Output:
```text
Contributor: Mona Lisa Octocat (@octocat) | Level: 2 | Favorite: TypeScript | Available: true
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 1](../level-1/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 3 (Functions) →](../level-3/) |
| :---: | :---: | :---: |

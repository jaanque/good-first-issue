# 🟢 Level 4: Basic Arithmetic Calculator & Union Types

> **Difficulty:** Easy | **Estimated Time:** 10-15 mins | **Track:** TypeScript

Welcome to **Level 4**! In this challenge, you will practice one of TypeScript's standout features: **Union Types** and **String Literal Types** by building a safe, strongly typed calculator.

---

## 📖 What You'll Learn & Why It Matters

### 1. String Literal Union Types
Instead of accepting any generic `string` for mathematical operations, TypeScript lets you restrict inputs to a fixed set of allowed string values:

```typescript
type Operation = "+" | "-" | "*" | "/";
```

Now, passing an invalid operator like `"^"` or `"foo"` is flagged by TypeScript at compile-time!

### 2. Return Type Unions
When a function can return either a successful numeric result or an error message, we model this using a union:

```typescript
function calculate(a: number, b: number, op: Operation): number | string {
  // ...
}
```

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing a type alias `Operation` and a function `calculate(a, b, operation)` that safely performs arithmetic operations.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-4/<your-username>.ts` *(e.g. `challenges/ts/level-4/octocat.ts`)*

2. **Specifications:**
   - Define a type alias `type Operation = "+" | "-" | "*" | "/";`.
   - Define a function `calculate(a: number, b: number, operation: Operation | string): number | string`.
   - Support `"+"`, `"-"`, `"*"`, `"/"`.
   - **Edge Case 1:** If `operation === "/"` and `b === 0`, return `"Error: Division by zero"`.
   - **Edge Case 2:** If `operation` is unrecognized, return `"Error: Invalid operation"`.
   - Log demonstrations of operations and error handling.

---

## 💡 Example

```typescript
// Level 4: Basic Calculator & Union Types
// Contributor: @octocat

type Operation = "+" | "-" | "*" | "/";

function calculate(
  a: number,
  b: number,
  operation: Operation | string
): number | string {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error: Division by zero" : a / b;
    default:
      return "Error: Invalid operation";
  }
}

console.log("10 + 5 =", calculate(10, 5, "+"));
console.log("20 - 8 =", calculate(20, 8, "-"));
console.log("6 * 7  =", calculate(6, 7, "*"));
console.log("15 / 3 =", calculate(15, 3, "/"));
console.log("10 / 0 =", calculate(10, 0, "/"));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-4/<your-username>.ts
```

### Expected Output:
```text
10 + 5 = 15
20 - 8 = 12
6 * 7  = 42
15 / 3 = 5
10 / 0 = Error: Division by zero
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 3](../level-3/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 5 (FizzBuzz & Arrays) →](../level-5/) |
| :---: | :---: | :---: |

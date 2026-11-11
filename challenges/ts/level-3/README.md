# 🟢 Level 3: Functions & Typed Signatures

> **Difficulty:** Easy | **Estimated Time:** 10 mins | **Track:** TypeScript

Welcome to **Level 3**! In this challenge, you will write a strongly typed reusable function with typed parameters, default values, and an explicit return type.

---

## 📖 What You'll Learn & Why It Matters

In TypeScript, function signatures provide a strict contract between the caller and the function:

```typescript
function add(a: number, b: number = 0): number {
  return a + b;
}
```

- `a: number`: The first argument must be a number.
- `b: number = 0`: The second argument is optional with a default value of `0`.
- `: number` (after the parentheses): Guarantees that the function always returns a number.

This prevents callers from passing unexpected arguments (like `undefined` or a string) and guarantees the return shape.

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing a typed function `greet(name: string)` that returns a greeting string.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-3/<your-username>.ts` *(e.g. `challenges/ts/level-3/octocat.ts`)*

2. **Specifications:**
   - Define a function `greet(name: string = "World"): string`.
   - Provide `"World"` as the default argument value.
   - Return a formatted string including:
     - The target name.
     - Your GitHub handle (e.g. `@<your-username>`).
     - A mention of TS Level 3.
   - Log calls demonstrating the default argument and custom names.

---

## 💡 Example

```typescript
// Level 3: Functions & Typed Signatures
// Contributor: @octocat

function greet(name: string = "World"): string {
  return `Hello, ${name}! This is @octocat welcoming you to TS Level 3.`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("fellow developer"));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-3/<your-username>.ts
```

### Expected Output:
```text
Hello, World! This is @octocat welcoming you to TS Level 3.
Hello, Alice! This is @octocat welcoming you to TS Level 3.
Hello, fellow developer! This is @octocat welcoming you to TS Level 3.
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 2](../level-2/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 4 (Calculator & Union Types) →](../level-4/) |
| :---: | :---: | :---: |

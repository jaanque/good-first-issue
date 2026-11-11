# 🟢 Level 1: Print Welcome Message

> **Difficulty:** Very Easy | **Estimated Time:** 5 mins | **Track:** TypeScript

Welcome to **Level 1** of the TypeScript Track! In this challenge, you will write your first TypeScript program using explicit type annotations and terminal output.

---

## 📖 What You'll Learn & Why It Matters

TypeScript is a superset of JavaScript that adds **static typing**. While JavaScript is dynamically typed, TypeScript allows you to specify the type of variables, function parameters, and return values:

```typescript
const greeting: string = "Hello, World!";
```

- `: string` tells the TypeScript compiler that `greeting` can only hold string values.
- If you accidentally try to assign a number or object to `greeting`, TypeScript catches the error immediately during development!

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory that declares a typed string variable and outputs a welcome message to the console.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-1/<your-username>.ts` *(e.g. `challenges/ts/level-1/octocat.ts`)*

2. **Specifications:**
   - Declare a `const` variable annotated with the `: string` type.
   - The message must include:
     - The phrase `"Hello Open Source!"`
     - Your GitHub handle (e.g. `@<your-username>`)
     - A mention of your TS Level 1 contribution.
   - Print the variable to the console using `console.log()`.

---

## 💡 Example

```typescript
// Level 1: Print Welcome Message
// Contributor: @octocat

const message: string =
  "Hello Open Source! I am @octocat and this is my TS Level 1 contribution.";

console.log(message);
```

---

## 🧪 Testing Your Solution

Run your script in your terminal using Node.js:

```bash
node challenges/ts/level-1/<your-username>.ts
```

### Expected Output:
```text
Hello Open Source! I am @octocat and this is my TS Level 1 contribution.
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| 🏠 [TypeScript Track Overview](../README.md) | 🚀 [All Tracks](../../README.md) | ➡️ [Next: Level 2 (Variables & Types) →](../level-2/) |
| :---: | :---: | :---: |

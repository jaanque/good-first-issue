# 🟢 Level 3: Functions & Default Parameters

> **Difficulty:** Easy | **Estimated Time:** 10 mins | **Track:** JavaScript

Welcome to **Level 3**! Functions are the fundamental building blocks of all software. In this challenge, you will create a reusable function equipped with a default parameter and a clean return statement.

---

## 📖 What You'll Learn & Why It Matters

Functions let you write logic once and reuse it anywhere with different inputs:

```javascript
function add(a, b) {
  return a + b;
}
```

### Key Concepts:
1. **`return` vs `console.log()`:**
   - `console.log()` displays text on the screen for humans to see.
   - `return` passes the computed result back to the caller so other parts of your code can use it.
2. **Default Parameters (ES6):**
   If someone calls a function without passing an argument, JavaScript assigns `undefined` by default. With default parameters, you provide a fallback value:
   ```javascript
   function sayHi(target = "Friend") {
     return `Hi, ${target}!`;
   }
   sayHi();        // Output: "Hi, Friend!"
   sayHi("Jan");   // Output: "Hi, Jan!"
   ```

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `greet(name)` that returns a greeting string.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-3/<your-username>.js` *(e.g. `levels/js/level-3/octocat.js`)*

2. **Specifications:**
   - Define a function named `greet` that accepts one parameter: `name = "World"`.
   - When called without an argument, `name` must default to `"World"`.
   - Return a formatted string welcoming the person, including:
     - The target name.
     - Your GitHub username (e.g. `@<your-username>`).
     - A mention of JS Level 3.
   - Demonstrate your function by logging calls with and without arguments.

---

## 💡 Example

```javascript
// Contributor: @octocat

function greet(name = "World") {
  return `Hello, ${name}! This is @octocat welcoming you to JS Level 3.`;
}

// Demonstrating calls
console.log(greet());
console.log(greet("Alice"));
console.log(greet("fellow developer"));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Don't Forget to `return`:** If your function doesn't include a `return` statement, calling it will produce `undefined`!
- 💡 **Function Styles:** You can use a standard `function greet(...) {}` declaration or an arrow function `const greet = (name = "World") => ...`.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-3/<your-username>.js
```

### Expected Terminal Output:
```text
Hello, World! This is @octocat welcoming you to JS Level 3.
Hello, Alice! This is @octocat welcoming you to JS Level 3.
Hello, fellow developer! This is @octocat welcoming you to JS Level 3.
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 2](../level-2/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 4 (Calculator & Logic) →](../level-4/) |
| :---: | :---: | :---: |

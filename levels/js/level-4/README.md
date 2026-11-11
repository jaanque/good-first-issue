# 🟢 Level 4: Basic Arithmetic Calculator & Defensive Logic

> **Difficulty:** Easy | **Estimated Time:** 10-15 mins | **Track:** JavaScript

Welcome to **Level 4**! Here you will practice mathematical operations, conditional control flow (`switch` / `if`), and **defensive programming** — handling edge cases such as division by zero and invalid inputs before they break your program.

---

## 📖 What You'll Learn & Why It Matters

Real-world code must be resilient against unexpected or invalid inputs.

### Key Concepts:
1. **Arithmetic Operators:**
   - Addition: `+`
   - Subtraction: `-`
   - Multiplication: `*`
   - Division: `/`

2. **The Division by Zero Gotcha:**
   In JavaScript, `10 / 0` does not throw an exception; it evaluates to `Infinity`. In robust applications, dividing by zero is usually an error condition that must be explicitly detected and handled.

3. **`switch` vs `if...else`:**
   A `switch` statement is ideal when comparing a single variable against multiple fixed string commands:
   ```javascript
   switch (operation) {
     case "+":
       return a + b;
     default:
       return "Error: Invalid operation";
   }
   ```

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `calculate(a, b, operation)` that safely performs arithmetic operations.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-4/<your-username>.js` *(e.g. `levels/js/level-4/octocat.js`)*

2. **Specifications:**
   - Define a function `calculate(a, b, operation)`.
   - Support four operations: `"+"`, `"-"`, `"*"`, `"/"`.
   - **Edge Case 1:** If `operation === "/"` and `b === 0`, return the exact string:  
     `"Error: Division by zero"`
   - **Edge Case 2:** For any unsupported operator, return the exact string:  
     `"Error: Invalid operation"`
   - For valid operations, return the numerical result.
   - Log test calls covering addition, subtraction, multiplication, division, division by zero, and invalid operator.

---

## 💡 Example

```javascript
// Contributor: @octocat

function calculate(a, b, operation) {
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

// Verification calls
console.log("10 + 5 =", calculate(10, 5, "+"));
console.log("20 - 8 =", calculate(20, 8, "-"));
console.log("6 * 7  =", calculate(6, 7, "*"));
console.log("15 / 3 =", calculate(15, 3, "/"));
console.log("10 / 0 =", calculate(10, 0, "/"));
console.log("10 % 2 =", calculate(10, 2, "%"));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Strict Equality:** Always use `===` instead of `==` for comparisons in JavaScript to avoid unintentional type coercion.
- 💡 **Early Returns:** Notice that returning directly inside each `case` eliminates the need for `break` statements.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-4/<your-username>.js
```

### Expected Terminal Output:
```text
10 + 5 = 15
20 - 8 = 12
6 * 7  = 42
15 / 3 = 5
10 / 0 = Error: Division by zero
10 % 2 = Error: Invalid operation
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 3](../level-3/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 5 (FizzBuzz & Logic) →](../level-5/) |
| :---: | :---: | :---: |

# 🟢 Level 4: Basic Arithmetic Calculator

Welcome to Level 4! Practice arithmetic operations, conditionals, and error handling by implementing a basic calculator function.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-4/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Define a function `calculate(a, b, operation)`.
- Support operations: `"+"`, `"-"`, `"*"`, `"/"`.
- If `operation` is `"/"` and `b === 0`, return `"Error: Division by zero"`.
- For unknown operations, return `"Error: Invalid operation"`.

---

## 💡 Example

```javascript
function calculate(a, b, operation) {
  switch (operation) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b === 0 ? "Error: Division by zero" : a / b;
    default: return "Error: Invalid operation";
  }
}

console.log(calculate(10, 5, "+")); // 15
console.log(calculate(10, 0, "/")); // Error: Division by zero
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-4/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

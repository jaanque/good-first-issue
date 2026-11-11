# 🟢 Level 3: Functions & Default Parameters

Welcome to Level 3! In this challenge you will write a reusable function with a default parameter and a return statement.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-3/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Define a function `greet(name = "World")`.
- If called without arguments, it should return a greeting using `"World"`.
- If called with a custom name, it should return a greeting using that name.
- Include your GitHub username in the returned string.
- Print sample calls using `console.log()`.

---

## 💡 Example

```javascript
function greet(name = "World") {
  return `Hello, ${name}! This is @octocat welcoming you to JS Level 3.`;
}

console.log(greet());
console.log(greet("Alice"));
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-3/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

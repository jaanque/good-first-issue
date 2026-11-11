# 🟢 Level 2: Variables & Template Literals

Welcome to Level 2! In this challenge you will declare variables using `const` and `let`, and use ES6 template literals (backticks) to build a formatted profile string.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-2/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Declare variables for:
  - `username` *(string)*
  - `name` *(string)*
  - `favoriteLanguage` *(string)*
  - `level` *(number, 2)*
- Combine them into a single string using a template literal (`` `...` ``).
- Output the string using `console.log()`.

---

## 💡 Example

```javascript
const username = "octocat";
const name = "Mona Lisa Octocat";
const favoriteLanguage = "JavaScript";
const level = 2;

const profile = `Contributor: ${name} (@${username}) | Level: ${level} | Favorite Language: ${favoriteLanguage}`;
console.log(profile);
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-2/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

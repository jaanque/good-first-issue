# 🟢 Level 2: Variables & Template Literals

> **Difficulty:** Very Easy | **Estimated Time:** 5-10 mins | **Track:** JavaScript

Welcome to **Level 2**! In this challenge, you will step up from static text to declaring variables and dynamically formatting them using modern ES6 template literals.

---

## 📖 What You'll Learn & Why It Matters

In modern JavaScript (ES6+), we manage data in memory using variables:

- `const`: For values that won't be reassigned (best practice default).
- `let`: For values that will change later.
- *(We avoid legacy `var` because it lacks block scoping!)*

### Why Template Literals?
In traditional JavaScript, combining text and variables required concatenating with `+`:
```javascript
// Legacy way (error-prone):
console.log("Hello " + name + ", you are level " + level + "!");
```

ES6 introduced **Template Literals** using backticks (`` `...` ``) and the `${...}` syntax, making string interpolation clean, readable, and less error-prone:
```javascript
// Modern ES6 way (clean & elegant):
console.log(`Hello ${name}, you are level ${level}!`);
```

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory where you define your profile variables and log a cleanly formatted contributor summary card.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-2/<your-username>.js` *(e.g. `levels/js/level-2/octocat.js`)*

2. **Specifications:**
   - Declare the following variables (preferably using `const`):
     - `username` *(string)*: Your GitHub username.
     - `name` *(string)*: Your real name or nickname.
     - `favoriteLanguage` *(string)*: Your favorite programming language.
     - `level` *(number)*: The number `2`.
   - Combine all variables into a single string using a template literal (`` `...` ``).
   - Log the final string to the console using `console.log()`.

---

## 💡 Example

```javascript
// Contributor: @octocat
const username = "octocat";
const name = "Mona Lisa Octocat";
const favoriteLanguage = "JavaScript";
const level = 2;

const profile = `Contributor: ${name} (@${username}) | Level: ${level} | Favorite Language: ${favoriteLanguage}`;
console.log(profile);
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Backticks vs Single Quotes:** Make sure you use actual backticks (`` ` ``) rather than single quotes (`'`) or double quotes (`"`). String interpolation `${}` only evaluates inside backticks!
- 💡 **Data Types:** `level` should be a `number` (`2`), not a string (`"2"`).

---

## 🧪 Testing Your Solution

Run your script in your terminal using Node.js:

```bash
node levels/js/level-2/<your-username>.js
```

### Expected Terminal Output:
```text
Contributor: Mona Lisa Octocat (@octocat) | Level: 2 | Favorite Language: JavaScript
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 1](../level-1/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 3 (Functions) →](../level-3/) |
| :---: | :---: | :---: |

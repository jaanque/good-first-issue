# 🔴 Level 10: ES6 Classes & Object-Oriented Programming

Welcome to Level 10! The final challenge of the JavaScript track. Build a modern ES6 class to manage contributor progress, handle methods, and serialize data to JSON.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-10/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Class `ContributorProfile` with constructor:
  - `username` *(string)*
  - `name` *(string)*
  - `languages` *(array of strings, default `[]`)*
  - `completedLevels` *(array of numbers, default `[]`)*
- Methods:
  - `addLanguage(lang)`: appends language if not present.
  - `completeLevel(level)`: marks level (1-10) as completed if valid and new. Returns boolean.
  - `getProgress()`: returns percentage (0-100) of the 10 levels completed rounded to 1 decimal.
  - `introduce()`: returns introduction string.
  - `toJSON()`: returns plain object representation.

---

## 💡 Example

```javascript
class ContributorProfile {
  constructor(username, name, languages = [], completedLevels = []) {
    this.username = username;
    this.name = name;
    this.languages = [...languages];
    this.completedLevels = [...new Set(completedLevels)].sort((a, b) => a - b);
  }
}
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-10/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

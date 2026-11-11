# 🔴 Level 10: ES6 Classes & Object-Oriented Programming

> **Difficulty:** Advanced- | **Estimated Time:** 25-30 mins | **Track:** JavaScript

Welcome to **Level 10**! The culminating capstone challenge of the JavaScript track. Here you will use **Object-Oriented Programming (OOP)** and modern ES6 class syntax to build a complete profile management system for open-source contributors.

---

## 📖 What You'll Learn & Why It Matters

Object-Oriented Programming models systems as **objects** that pair internal data (**state**) with associated actions (**methods**).

### Key Concepts:
1. **The `class` & `constructor`:**
   ```javascript
   class ContributorProfile {
     constructor(username, name) {
       this.username = username;
       this.name = name;
     }
   }
   ```
   - The `constructor` initializes new instances created with `new ContributorProfile(...)`.
   - `this` refers to the specific instance being operated on.

2. **Deduplication with `Set`:**
   To guarantee completed levels and languages don't contain duplicates:
   ```javascript
   this.completedLevels = [...new Set(completedLevels)].sort((a, b) => a - b);
   ```

3. **Data Serialization (`toJSON`):**
   Providing a method that exports the object's internal state into a plain serializable JSON object.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a class `ContributorProfile` that manages an open-source contributor's journey across the 10 coding levels.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-10/<your-username>.js` *(e.g. `levels/js/level-10/octocat.js`)*

2. **Class API:**
   ```javascript
   class ContributorProfile {
     constructor(username, name, languages = [], completedLevels = []) { /* ... */ }
     addLanguage(language) { /* ... */ }
     completeLevel(level) { /* ... */ }
     getProgress() { /* ... */ }
     introduce() { /* ... */ }
     toJSON() { /* ... */ }
   }
   ```

3. **Method Specifications:**
   - **`constructor(username, name, languages = [], completedLevels = [])`**:
     Initializes `this.username`, `this.name`, `this.languages` (cloned array), and `this.completedLevels` (sorted array of unique numbers).
   - **`addLanguage(language)`**:
     Adds the language string to `this.languages` if not already present.
   - **`completeLevel(level)`**:
     If `level` is an integer between `1` and `10` and not already completed:
     adds it, sorts `this.completedLevels` in ascending order, and returns `true`.
     Otherwise, returns `false`.
   - **`getProgress()`**:
     Calculates percentage of 10 levels completed: `(this.completedLevels.length / 10) * 100`, rounded to 1 decimal place as a number.
   - **`introduce()`**:
     Returns a presentation string matching:
     `"Hi! I'm <name> (@<username>). Progress: <progress>% (levels: <completed>). Languages: <languages>."`
     *(If empty: use `"none"` for completed levels and `"none yet"` for languages).*
   - **`toJSON()`**:
     Returns an object with keys: `{ username, name, languages, completedLevels, progress }`.

---

## 💡 Example

```javascript
// Contributor: @octocat

class ContributorProfile {
  constructor(username, name, languages = [], completedLevels = []) {
    this.username = username;
    this.name = name;
    this.languages = [...languages];
    this.completedLevels = [...new Set(completedLevels)].sort((a, b) => a - b);
  }

  addLanguage(language) {
    if (!this.languages.includes(language)) {
      this.languages.push(language);
    }
  }

  completeLevel(level) {
    if (level >= 1 && level <= 10 && !this.completedLevels.includes(level)) {
      this.completedLevels.push(level);
      this.completedLevels.sort((a, b) => a - b);
      return true;
    }
    return false;
  }

  getProgress() {
    return Number(((this.completedLevels.length / 10) * 100).toFixed(1));
  }

  introduce() {
    const langs = this.languages.length > 0 ? this.languages.join(", ") : "none yet";
    const completed = this.completedLevels.length > 0 ? this.completedLevels.join(", ") : "none";
    return `Hi! I'm ${this.name} (@${this.username}). Progress: ${this.getProgress()}% (levels: ${completed}). Languages: ${langs}.`;
  }

  toJSON() {
    return {
      username: this.username,
      name: this.name,
      languages: this.languages,
      completedLevels: this.completedLevels,
      progress: this.getProgress(),
    };
  }
}

// Verification demonstration
const profile = new ContributorProfile("octocat", "Mona Lisa", ["JavaScript"]);
console.log(profile.introduce());

[1, 2, 3, 4, 5].forEach(lvl => profile.completeLevel(lvl));
profile.addLanguage("Python");

console.log("\nAfter progress:");
console.log(profile.introduce());
console.log("\nSerialized object:", profile.toJSON());
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Defensive Array Copies:** Use `[...languages]` inside the constructor so mutations to the input argument don't mutate the internal instance state.
- 💡 **Sorting Numbers:** Remember that `.sort()` in JavaScript sorts alphabetically by default! Always pass a numerical comparator: `.sort((a, b) => a - b)`.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-10/<your-username>.js
```

### Expected Terminal Output:
```text
Hi! I'm Mona Lisa (@octocat). Progress: 0% (levels: none). Languages: JavaScript.

After progress:
Hi! I'm Mona Lisa (@octocat). Progress: 50% (levels: 1, 2, 3, 4, 5). Languages: JavaScript, Python.

Serialized object: {
  username: 'octocat',
  name: 'Mona Lisa',
  languages: [ 'JavaScript', 'Python' ],
  completedLevels: [ 1, 2, 3, 4, 5 ],
  progress: 50
}
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 9](../level-9/) | 🏠 [JS Track Overview](../README.md) | 🐍 [Try Python Track](../../python/) | 🚀 [All Tracks](../../README.md) |
| :---: | :---: | :---: | :---: |

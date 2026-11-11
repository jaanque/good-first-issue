# 🔴 Level 9: Data Aggregation & Score Records

> **Difficulty:** Intermediate+ | **Estimated Time:** 20-25 mins | **Track:** JavaScript

Welcome to **Level 9**! In this challenge, you will work with realistic data records (an array of contributor objects) to compute analytical statistics, rankings, and filtered lists.

---

## 📖 What You'll Learn & Why It Matters

Every backend API, dashboard, and reporting tool performs **data aggregation**: taking a collection of records and calculating statistical summaries like totals, averages, min/max values, and categorized subsets.

### Key Concepts:
1. **Accumulating Totals with `.reduce()`:**
   `.reduce()` rolls an array into a single accumulated value:
   ```javascript
   const sum = records.reduce((acc, r) => acc + r.score, 0);
   ```

2. **Safe Array Sorting Without Mutation:**
   `.sort()` mutates an array in place! To avoid modifying your input dataset, always sort a shallow copy:
   ```javascript
   const sorted = [...records].sort((a, b) => b.score - a.score);
   const highest = sorted[0];
   const lowest = sorted[sorted.length - 1];
   ```

3. **Filtering & Projecting (Chaining):**
   ```javascript
   const passed = records
     .filter(r => r.score >= 60)
     .map(r => r.name)
     .sort();
   ```

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `analyzeScores(records)` that processes an array of participant score objects and returns a comprehensive metrics summary.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-9/<your-username>.js` *(e.g. `levels/js/level-9/octocat.js`)*

2. **Specifications:**
   - Define a function `analyzeScores(records)`.
   - Each record object has the structure: `{ name: string, score: number }`.
   - Handle empty arrays or falsy inputs gracefully by returning:
     `{ total: 0, average: 0, highest: null, lowest: null, passed: [] }`
   - Calculate:
     - `total` *(number)*: Number of records.
     - `average` *(number)*: Mean score, rounded to 2 decimal places.
     - `highest` *(object)*: The record object with the highest score.
     - `lowest` *(object)*: The record object with the lowest score.
     - `passed` *(array of strings)*: Alphabetically sorted names of all participants with `score >= 60`.
   - Return an object with these 5 keys.

---

## 💡 Example

```javascript
// Contributor: @octocat

function analyzeScores(records) {
  if (!records || records.length === 0) {
    return { total: 0, average: 0, highest: null, lowest: null, passed: [] };
  }

  const total = records.length;
  const sum = records.reduce((acc, r) => acc + r.score, 0);
  const average = Number((sum / total).toFixed(2));
  const sorted = [...records].sort((a, b) => b.score - a.score);
  const passed = records.filter(r => r.score >= 60).map(r => r.name).sort();

  return {
    total,
    average,
    highest: sorted[0],
    lowest: sorted[sorted.length - 1],
    passed,
  };
}

const sampleStudents = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 78 },
];

console.log(analyzeScores(sampleStudents));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Rounding to 2 Decimals:** `toFixed(2)` returns a string (`"76.75"`). Wrap with `Number(...)` or prefix with `+` to keep it as a numerical float.
- 💡 **Spread Syntax `[...]`:** Spreading `[...records]` before sorting guarantees that the order in the caller's original array is preserved.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-9/<your-username>.js
```

### Expected Terminal Output:
```text
{
  total: 4,
  average: 76.75,
  highest: { name: 'Charlie', score: 92 },
  lowest: { name: 'Bob', score: 52 },
  passed: [ 'Alice', 'Charlie', 'Diana' ]
}
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 8](../level-8/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 10 (ES6 Classes & OOP) →](../level-10/) |
| :---: | :---: | :---: |

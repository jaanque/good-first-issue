# 🔴 Level 9: Data Aggregation & Score Records

Welcome to Level 9! In this challenge you will aggregate data across an array of objects to compute statistics, rankings, and filtered lists.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-9/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Function `analyzeScores(records)`.
- Input: array of `{ name: string, score: number }`.
- Return object with:
  - `total`: total count of records
  - `average`: mean score rounded to 2 decimals
  - `highest`: record with highest score
  - `lowest`: record with lowest score
  - `passed`: sorted array of names with `score >= 60`
- Return default object if `records` is empty.

---

## 💡 Example

```javascript
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
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-9/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

# 🔴 Level 9: Data Aggregation & Score Records

> **Difficulty:** Intermediate+ | **Estimated Time:** 20-25 mins | **Track:** TypeScript

Welcome to **Level 9**! In this challenge, you will process structured datasets using custom interfaces to calculate statistical metrics, find extrema, and produce typed reports.

---

## 📖 What You'll Learn & Why It Matters

In professional software development, data arrives in structured collections of objects (e.g. from a database or REST API). Typing both the input items and the aggregated report guarantees schema reliability:

```typescript
interface StudentRecord {
  name: string;
  score: number;
}

interface ScoreSummary {
  total: number;
  average: number;
  highest: StudentRecord | null;
  lowest: StudentRecord | null;
  passed: string[];
}
```

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing interfaces `StudentRecord` and `ScoreSummary`, and a function `analyzeScores(records: StudentRecord[] | null | undefined): ScoreSummary`.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-9/<your-username>.ts` *(e.g. `challenges/ts/level-9/octocat.ts`)*

2. **Specifications:**
   - Define interface `StudentRecord` (`name: string`, `score: number`).
   - Define interface `ScoreSummary` (`total: number`, `average: number`, `highest: StudentRecord | null`, `lowest: StudentRecord | null`, `passed: string[]`).
   - If `records` is empty or nullish, return safe defaults with `highest: null` and `lowest: null`.
   - Otherwise, calculate:
     - `total`: number of records.
     - `average`: mean score rounded to 2 decimal places.
     - `highest`: record with the highest score.
     - `lowest`: record with the lowest score.
     - `passed`: array of names for records with `score >= 60`, sorted alphabetically.

---

## 💡 Example

```typescript
// Level 9: Data Aggregation & Score Records
// Contributor: @octocat

interface StudentRecord {
  name: string;
  score: number;
}

interface ScoreSummary {
  total: number;
  average: number;
  highest: StudentRecord | null;
  lowest: StudentRecord | null;
  passed: string[];
}

function analyzeScores(
  records: StudentRecord[] | null | undefined
): ScoreSummary {
  if (!records || records.length === 0) {
    return {
      total: 0,
      average: 0,
      highest: null,
      lowest: null,
      passed: [],
    };
  }

  const total: number = records.length;
  const sum: number = records.reduce(
    (acc: number, r: StudentRecord) => acc + r.score,
    0
  );
  const average: number = Number((sum / total).toFixed(2));
  const sorted: StudentRecord[] = [...records].sort(
    (a, b) => b.score - a.score
  );
  const passed: string[] = records
    .filter((r: StudentRecord) => r.score >= 60)
    .map((r: StudentRecord) => r.name)
    .sort();

  return {
    total,
    average,
    highest: sorted[0],
    lowest: sorted[sorted.length - 1],
    passed,
  };
}

const sampleStudents: StudentRecord[] = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 78 },
  { name: "Evan", score: 45 },
];

console.log(analyzeScores(sampleStudents));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-9/<your-username>.ts
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 8](../level-8/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 10 (OOP & Interfaces) →](../level-10/) |
| :---: | :---: | :---: |

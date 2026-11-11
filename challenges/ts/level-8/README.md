# 🟡 Level 8: Interfaces & Word Frequency Counter (`Record`)

> **Difficulty:** Intermediate | **Estimated Time:** 20 mins | **Track:** TypeScript

Welcome to **Level 8**! In this challenge, you will explore two essential TypeScript constructs for modeling dictionary data structures: custom **`interface`** definitions and the built-in **`Record<K, V>`** generic utility.

---

## 📖 What You'll Learn & Why It Matters

### 1. The `Record<Keys, Type>` Utility
When building hash maps or lookup tables where keys are dynamic strings and values are numbers, TypeScript provides `Record<string, number>`:

```typescript
const wordFrequencies: Record<string, number> = {
  typescript: 3,
  javascript: 2,
};
```

### 2. Defining a Strongly Typed Return Interface
Instead of returning a loose untyped object, defining an interface guarantees the return shape:

```typescript
interface WordAnalysis {
  totalWords: number;
  uniqueWords: number;
  wordFrequencies: Record<string, number>;
  mostCommon: string | null;
}
```

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing an interface `WordAnalysis` and a function `analyzeText(text: string): WordAnalysis` that tokenizes text and counts word occurrences.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-8/<your-username>.ts` *(e.g. `challenges/ts/level-8/octocat.ts`)*

2. **Specifications:**
   - Define an interface `WordAnalysis`:
     - `totalWords`: `number`
     - `uniqueWords`: `number`
     - `wordFrequencies`: `Record<string, number>`
     - `mostCommon`: `string | null`
   - Define a function `analyzeText(text: string): WordAnalysis`.
   - Tokenize text into lowercase words ignoring punctuation using `text.toLowerCase().match(/\b\w+\b/g) || []`.
   - If empty, return `{ totalWords: 0, uniqueWords: 0, wordFrequencies: {}, mostCommon: null }`.
   - Otherwise, populate frequencies and determine the most common word.

---

## 💡 Example

```typescript
// Level 8: Interfaces & Word Frequency Counter
// Contributor: @octocat

interface WordAnalysis {
  totalWords: number;
  uniqueWords: number;
  wordFrequencies: Record<string, number>;
  mostCommon: string | null;
}

function analyzeText(text: string): WordAnalysis {
  const words: string[] = text.toLowerCase().match(/\b\w+\b/g) || [];
  if (words.length === 0) {
    return {
      totalWords: 0,
      uniqueWords: 0,
      wordFrequencies: {},
      mostCommon: null,
    };
  }

  const freq: Record<string, number> = {};
  let mostCommon: string | null = null;
  let maxCount: number = 0;

  for (const w of words) {
    freq[w] = (freq[w] || 0) + 1;
    if (freq[w] > maxCount) {
      maxCount = freq[w];
      mostCommon = w;
    }
  }

  return {
    totalWords: words.length,
    uniqueWords: Object.keys(freq).length,
    wordFrequencies: freq,
    mostCommon,
  };
}

const sample: string = "TypeScript is great and Open Source is awesome. TypeScript for all!";
console.log(analyzeText(sample));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-8/<your-username>.ts
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 7](../level-7/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 9 (Data Aggregation) →](../level-9/) |
| :---: | :---: | :---: |

# 🟡 Level 8: Objects & Word Frequency Counter

> **Difficulty:** Intermediate | **Estimated Time:** 20 mins | **Track:** JavaScript

Welcome to **Level 8**! In this challenge, you will use JavaScript **Objects as hash maps** to analyze text, tally word counts, and identify the most frequently used words.

---

## 📖 What You'll Learn & Why It Matters

Objects in JavaScript are versatile key-value collections. In data processing, searching, and Natural Language Processing (NLP), counting frequencies using a hash map is one of the most fundamental operations with an efficient $O(N)$ runtime.

### Key Concepts:
1. **Extracting Words with Regular Expressions:**
   ```javascript
   const words = text.toLowerCase().match(/\b\w+\b/g) || [];
   ```
   - `\b`: Word boundary anchor.
   - `\w+`: One or more alphanumeric characters.
   - `|| []`: Fallback to an empty array if no words match (avoiding `null`).

2. **The Frequency Accumulator Pattern:**
   ```javascript
   const freq = {};
   for (const word of words) {
     freq[word] = (freq[word] || 0) + 1;
   }
   ```
   If `freq[word]` doesn't exist yet, `(freq[word] || 0)` evaluates to `0`, and adding `1` sets the initial count.

3. **Inspecting Objects:**
   - `Object.keys(freq).length`: Count how many unique words were found.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `analyzeText(text)` that processes a string and returns an analytical summary object.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/js/level-8/<your-username>.js` *(e.g. `challenges/js/level-8/octocat.js`)*

2. **Specifications:**
   - Define a function `analyzeText(text)`.
   - Tokenize the text into lowercase words, ignoring punctuation.
   - Calculate:
     - `totalWords` *(number)*: Total word count.
     - `uniqueWords` *(number)*: Count of distinct words.
     - `wordFrequencies` *(object)*: Map of `{ [word]: count }`.
     - `mostCommon` *(string or null)*: The word with the highest frequency (or `null` if empty).
   - Return an object with these 4 properties.
   - Log the result of analyzing a sample paragraph.

---

## 💡 Example

```javascript
// Contributor: @octocat

function analyzeText(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const freq = {};
  let mostCommon = null;
  let maxCount = 0;

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

const sample = "JavaScript is great and Open Source is awesome. JavaScript for all!";
console.log(analyzeText(sample));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Tie-breaking:** If two words tie for the highest frequency, returning whichever appeared first is standard and expected.
- 💡 **Edge Cases:** If `text` is empty (`""`), your function should safely return `{ totalWords: 0, uniqueWords: 0, wordFrequencies: {}, mostCommon: null }`.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node challenges/js/level-8/<your-username>.js
```

### Expected Terminal Output:
```text
{
  totalWords: 11,
  uniqueWords: 9,
  wordFrequencies: {
    javascript: 2,
    is: 2,
    great: 1,
    and: 1,
    open: 1,
    source: 1,
    awesome: 1,
    for: 1,
    all: 1
  },
  mostCommon: 'javascript'
}
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 7](../level-7/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 9 (Data Aggregation) →](../level-9/) |
| :---: | :---: | :---: |

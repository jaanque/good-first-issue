# 🟡 Level 8: Objects & Word Frequency Counter

Welcome to Level 8! Practice working with JavaScript objects as hash maps to count word occurrences and find the most common word in a text string.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-8/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Function `analyzeText(text)`.
- Return an object with:
  - `totalWords` *(number)*
  - `uniqueWords` *(number)*
  - `wordFrequencies` *(object of { word: count })*
  - `mostCommon` *(string or null)*

---

## 💡 Example

```javascript
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
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-8/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

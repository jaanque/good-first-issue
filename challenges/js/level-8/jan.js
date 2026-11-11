// Level 8: Objects & Word Frequency Counter
// Contributor: @jaanque (Jan)

const assert = require("node:assert/strict");

function analyzeText(text) {
  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  if (words.length === 0) {
    return {
      totalWords: 0,
      uniqueWords: 0,
      wordFrequencies: {},
      mostCommon: null,
    };
  }

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
console.log("Sample text:\n", sample);
const analysis = analyzeText(sample);
console.log("\nAnalysis:\n", analysis);

assert.strictEqual(analysis.totalWords, 11);
assert.strictEqual(analysis.uniqueWords, 9);
assert.ok(["javascript", "is"].includes(analysis.mostCommon));
assert.strictEqual(analysis.wordFrequencies.javascript, 2);
assert.strictEqual(analysis.wordFrequencies.is, 2);

// Edge cases
const emptyAnalysis = analyzeText("");
assert.deepStrictEqual(emptyAnalysis, {
  totalWords: 0,
  uniqueWords: 0,
  wordFrequencies: {},
  mostCommon: null,
});

const punctAnalysis = analyzeText("!@#$%^&*()");
assert.deepStrictEqual(punctAnalysis, {
  totalWords: 0,
  uniqueWords: 0,
  wordFrequencies: {},
  mostCommon: null,
});

console.log("✅ All tests passed successfully!");

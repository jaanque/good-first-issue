// Level 8: Interfaces & Word Frequency Counter
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

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

const sample: string =
  "TypeScript is great and Open Source is awesome. TypeScript for all!";
console.log("Sample text:\n", sample);
const analysis: WordAnalysis = analyzeText(sample);
console.log("\nAnalysis:\n", analysis);

assert.strictEqual(analysis.totalWords, 11);
assert.strictEqual(analysis.uniqueWords, 9);
assert.ok(["typescript", "is"].includes(analysis.mostCommon as string));
assert.strictEqual(analysis.wordFrequencies.typescript, 2);
assert.strictEqual(analysis.wordFrequencies.is, 2);

// Edge cases
const emptyAnalysis: WordAnalysis = analyzeText("");
assert.deepStrictEqual(emptyAnalysis, {
  totalWords: 0,
  uniqueWords: 0,
  wordFrequencies: {},
  mostCommon: null,
});

const punctAnalysis: WordAnalysis = analyzeText("!@#$%^&*()");
assert.deepStrictEqual(punctAnalysis, {
  totalWords: 0,
  uniqueWords: 0,
  wordFrequencies: {},
  mostCommon: null,
});

console.log("✅ All tests passed successfully!");


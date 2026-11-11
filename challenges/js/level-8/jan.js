// Level 8: Objects & Word Frequency Counter
// Contributor: @jaanque (Jan)

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
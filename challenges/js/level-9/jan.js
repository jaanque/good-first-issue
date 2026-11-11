// Level 9: Data Aggregation & Score Records
// Contributor: @jaanque (Jan)

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
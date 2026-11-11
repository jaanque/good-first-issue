// Level 9: Data Aggregation & Score Records
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

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

console.log("Sample records:\n", sampleStudents);
const analysis: ScoreSummary = analyzeScores(sampleStudents);
console.log("\nScore Analysis:\n", analysis);

assert.strictEqual(analysis.total, 5);
assert.strictEqual(analysis.average, 70.4);
assert.deepStrictEqual(analysis.highest, { name: "Charlie", score: 92 });
assert.deepStrictEqual(analysis.lowest, { name: "Evan", score: 45 });
assert.deepStrictEqual(analysis.passed, ["Alice", "Charlie", "Diana"]);

// Edge cases
assert.deepStrictEqual(analyzeScores([]), {
  total: 0,
  average: 0,
  highest: null,
  lowest: null,
  passed: [],
});

assert.deepStrictEqual(analyzeScores(null), {
  total: 0,
  average: 0,
  highest: null,
  lowest: null,
  passed: [],
});

console.log("✅ All tests passed successfully!");


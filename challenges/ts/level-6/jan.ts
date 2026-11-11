// Level 6: Array Methods (filter & map)
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

function processNumbers(numbers: number[]): number[] {
  return numbers
    .filter((n: number) => n > 0 && n % 2 === 0)
    .map((n: number) => n ** 2);
}

const samples: [number[], number[]][] = [
  [[-4, 2, 0, 3, 4, 5, 6], [4, 16, 36]],
  [[-1, -2, -3], []],
  [[1, 3, 5, 7], []],
  [[2, 4, 8], [4, 16, 64]],
  [[], []],
];

samples.forEach(([nums, expected]) => {
  const result: number[] = processNumbers(nums);
  assert.deepStrictEqual(result, expected);
  console.log(`✅ PASS | Input: [${nums}] -> Output: [${result}]`);
});

console.log("✅ All tests passed successfully!");

// Level 6: Array Methods (filter & map)
// Contributor: @jaanque (Jan)

const assert = require("node:assert/strict");

function processNumbers(numbers) {
  return numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(n => n ** 2);
}

const samples = [
  [[-4, 2, 0, 3, 4, 5, 6], [4, 16, 36]],
  [[-1, -2, -3], []],
  [[1, 3, 5, 7], []],
  [[2, 4, 8], [4, 16, 64]],
  [[], []],
];

samples.forEach(([nums, expected]) => {
  const result = processNumbers(nums);
  assert.deepStrictEqual(result, expected);
  console.log(`✅ PASS | Input: [${nums}] -> Output: [${result}]`);
});

console.log("✅ All tests passed successfully!");

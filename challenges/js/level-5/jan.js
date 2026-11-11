// Level 5: Conditionals & Logic (FizzBuzz)
// Contributor: @jaanque (Jan)

const assert = require("node:assert/strict");

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}

const output = fizzBuzz(15);
console.log("FizzBuzz sequence (1 to 15):");
console.log(output);

const expected = [
  "1", "2", "Fizz", "4", "Buzz",
  "Fizz", "7", "8", "Fizz", "Buzz",
  "11", "Fizz", "13", "14", "FizzBuzz",
];

assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(fizzBuzz(0), []);
assert.deepStrictEqual(fizzBuzz(3), ["1", "2", "Fizz"]);
assert.deepStrictEqual(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
console.log("✅ All tests passed successfully!");

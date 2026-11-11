// Level 7: String Manipulation & Palindrome Checker
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

function isPalindrome(text: string): boolean {
  const cleaned: string = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

const testCases: [string, boolean][] = [
  ["radar", true],
  ["A man, a plan, a canal: Panama", true],
  ["Was it a car or a cat I saw?", true],
  ["typescript", false],
  ["open source", false],
  ["", true],
  ["12321", true],
  ["12345", false],
];

testCases.forEach(([sample, expected]) => {
  const result: boolean = isPalindrome(sample);
  assert.strictEqual(
    result,
    expected,
    `For '${sample}', expected ${expected}, got ${result}`
  );
  console.log(`✅ PASS | '${sample}' -> ${result}`);
});

console.log("✅ All tests passed successfully!");

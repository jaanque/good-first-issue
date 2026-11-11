// Level 4: Basic Arithmetic Calculator & Union Types
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

type Operation = "+" | "-" | "*" | "/";

function calculate(
  a: number,
  b: number,
  operation: Operation | string
): number | string {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error: Division by zero" : a / b;
    default:
      return "Error: Invalid operation";
  }
}

const tests: [number, number, Operation | string, number | string][] = [
  [10, 5, "+", 15],
  [20, 8, "-", 12],
  [6, 7, "*", 42],
  [15, 3, "/", 5],
  [10, 0, "/", "Error: Division by zero"],
  [4, 2, "%", "Error: Invalid operation"],
  [7, 2, "^", "Error: Invalid operation"],
];

tests.forEach(([a, b, op, expected]) => {
  const res = calculate(a, b, op);
  assert.strictEqual(res, expected, `Expected ${expected}, got ${res}`);
  console.log(`✅ PASS | ${a} ${op} ${b} = ${res}`);
});

console.log("✅ All tests passed successfully!");


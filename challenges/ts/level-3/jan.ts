// Level 3: Functions & Typed Signatures
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

function greet(name: string = "World"): string {
  return `Hello, ${name}! This is @jaanque welcoming you to TS Level 3.`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("fellow developer"));

// Assertions
assert.strictEqual(
  greet(),
  "Hello, World! This is @jaanque welcoming you to TS Level 3."
);
assert.strictEqual(
  greet("Alice"),
  "Hello, Alice! This is @jaanque welcoming you to TS Level 3."
);
assert.strictEqual(
  greet("fellow developer"),
  "Hello, fellow developer! This is @jaanque welcoming you to TS Level 3."
);

console.log("✅ All tests passed successfully!");


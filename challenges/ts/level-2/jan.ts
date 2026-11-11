// Level 2: Variables & Explicit Primitive Types
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

const username: string = "jaanque";
const name: string = "Jan";
const favoriteLanguage: string = "TypeScript";
const level: number = 2;
const isAvailable: boolean = true;

const profile: string = `Contributor: ${name} (@${username}) | Level: ${level} | Favorite: ${favoriteLanguage} | Available: ${isAvailable}`;

console.log(profile);

// Assertions
assert.strictEqual(username, "jaanque");
assert.strictEqual(name, "Jan");
assert.strictEqual(favoriteLanguage, "TypeScript");
assert.strictEqual(level, 2);
assert.strictEqual(isAvailable, true);
assert.ok(profile.includes("Contributor: Jan (@jaanque)"));
console.log("✅ All assertions passed successfully!");

// Level 2: Variables & Template Literals
// Contributor: @jaanque (Jan)

const assert = require("node:assert/strict");

const username = "jaanque";
const name = "Jan";
const favoriteLanguage = "JavaScript";
const level = 2;

const profile = `Contributor: ${name} (@${username}) | Level: ${level} | Favorite Language: ${favoriteLanguage}`;

console.log(profile);

// Assertions
assert.strictEqual(username, "jaanque");
assert.strictEqual(name, "Jan");
assert.strictEqual(favoriteLanguage, "JavaScript");
assert.strictEqual(level, 2);
assert.ok(profile.includes("Contributor: Jan (@jaanque)"));
console.log("✅ All assertions passed successfully!");

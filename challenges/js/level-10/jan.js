// Level 10: ES6 Classes & Object-Oriented Programming
// Contributor: @jaanque (Jan)

const assert = require("node:assert/strict");

class ContributorProfile {
  constructor(username, name, languages = [], completedLevels = []) {
    this.username = username;
    this.name = name;
    this.languages = [...languages];
    this.completedLevels = [...new Set(completedLevels)].sort((a, b) => a - b);
  }

  addLanguage(language) {
    if (!this.languages.includes(language)) {
      this.languages.push(language);
    }
  }

  completeLevel(level) {
    if (
      Number.isInteger(level) &&
      level >= 1 &&
      level <= 10 &&
      !this.completedLevels.includes(level)
    ) {
      this.completedLevels.push(level);
      this.completedLevels.sort((a, b) => a - b);
      return true;
    }
    return false;
  }

  getProgress() {
    return Number(((this.completedLevels.length / 10) * 100).toFixed(1));
  }

  introduce() {
    const langs =
      this.languages.length > 0 ? this.languages.join(", ") : "none yet";
    const completed =
      this.completedLevels.length > 0
        ? this.completedLevels.join(", ")
        : "none";
    return `Hi! I'm ${this.name} (@${this.username}). Progress: ${this.getProgress()}% (levels: ${completed}). Languages: ${langs}.`;
  }

  toJSON() {
    return {
      username: this.username,
      name: this.name,
      languages: this.languages,
      completedLevels: this.completedLevels,
      progress: this.getProgress(),
    };
  }
}

const profile = new ContributorProfile("jaanque", "Jan", [
  "JavaScript",
  "HTML",
  "CSS",
]);
console.log(profile.introduce());

assert.strictEqual(profile.username, "jaanque");
assert.strictEqual(profile.name, "Jan");
assert.deepStrictEqual(profile.languages, ["JavaScript", "HTML", "CSS"]);
assert.deepStrictEqual(profile.completedLevels, []);
assert.strictEqual(profile.getProgress(), 0);

// Prevent duplicate languages
profile.addLanguage("JavaScript");
assert.deepStrictEqual(profile.languages, ["JavaScript", "HTML", "CSS"]);

// Complete levels
[1, 2, 3, 4, 5].forEach((lvl) => {
  assert.strictEqual(profile.completeLevel(lvl), true);
});

// Reject duplicate level
assert.strictEqual(profile.completeLevel(3), false);

// Reject out of range level
assert.strictEqual(profile.completeLevel(0), false);
assert.strictEqual(profile.completeLevel(11), false);
assert.strictEqual(profile.completeLevel("5"), false);

assert.deepStrictEqual(profile.completedLevels, [1, 2, 3, 4, 5]);
assert.strictEqual(profile.getProgress(), 50);

profile.addLanguage("Python");
console.log("\nAfter progress:");
console.log(profile.introduce());

const json = profile.toJSON();
console.log("\nSerialized object:", json);
assert.strictEqual(json.username, "jaanque");
assert.strictEqual(json.progress, 50);
assert.deepStrictEqual(json.completedLevels, [1, 2, 3, 4, 5]);
assert.ok(json.languages.includes("Python"));

console.log("✅ All tests passed successfully!");

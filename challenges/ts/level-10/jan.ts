// Level 10: OOP Class & Interface Implementation
// Contributor: @jaanque (Jan)

import assert from "node:assert/strict";

interface ProfileData {
  username: string;
  name: string;
  languages: string[];
  completedLevels: number[];
  progress: number;
}

class ContributorProfile {
  public username: string;
  public name: string;
  public languages: string[];
  public completedLevels: number[];

  constructor(
    username: string,
    name: string,
    languages: string[] = [],
    completedLevels: number[] = []
  ) {
    this.username = username;
    this.name = name;
    this.languages = [...languages];
    this.completedLevels = [...new Set(completedLevels)].sort((a, b) => a - b);
  }

  addLanguage(language: string): void {
    if (!this.languages.includes(language)) {
      this.languages.push(language);
    }
  }

  completeLevel(level: number): boolean {
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

  getProgress(): number {
    return Number(((this.completedLevels.length / 10) * 100).toFixed(1));
  }

  introduce(): string {
    const langs: string =
      this.languages.length > 0 ? this.languages.join(", ") : "none yet";
    const completed: string =
      this.completedLevels.length > 0
        ? this.completedLevels.join(", ")
        : "none";
    return `Hi! I'm ${this.name} (@${this.username}). Progress: ${this.getProgress()}% (levels: ${completed}). Languages: ${langs}.`;
  }

  toJSON(): ProfileData {
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
  "TypeScript",
  "HTML",
  "CSS",
]);
console.log(profile.introduce());

assert.strictEqual(profile.username, "jaanque");
assert.strictEqual(profile.name, "Jan");
assert.deepStrictEqual(profile.languages, ["TypeScript", "HTML", "CSS"]);
assert.deepStrictEqual(profile.completedLevels, []);
assert.strictEqual(profile.getProgress(), 0);

// Prevent duplicate languages
profile.addLanguage("TypeScript");
assert.deepStrictEqual(profile.languages, ["TypeScript", "HTML", "CSS"]);

// Complete levels
[1, 2, 3, 4, 5].forEach((lvl: number) => {
  assert.strictEqual(profile.completeLevel(lvl), true);
});

// Reject duplicate level
assert.strictEqual(profile.completeLevel(3), false);

// Reject out of range level
assert.strictEqual(profile.completeLevel(0), false);
assert.strictEqual(profile.completeLevel(11), false);

assert.deepStrictEqual(profile.completedLevels, [1, 2, 3, 4, 5]);
assert.strictEqual(profile.getProgress(), 50);

profile.addLanguage("Python");
console.log("\nAfter progress:");
console.log(profile.introduce());

const json: ProfileData = profile.toJSON();
console.log("\nSerialized object:", json);
assert.strictEqual(json.username, "jaanque");
assert.strictEqual(json.progress, 50);
assert.deepStrictEqual(json.completedLevels, [1, 2, 3, 4, 5]);
assert.ok(json.languages.includes("Python"));

console.log("✅ All tests passed successfully!");

// Level 10: ES6 Classes & Object-Oriented Programming
// Contributor: @jaanque (Jan)

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
    if (level >= 1 && level <= 10 && !this.completedLevels.includes(level)) {
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
    const langs = this.languages.length > 0 ? this.languages.join(", ") : "none yet";
    const completed = this.completedLevels.length > 0 ? this.completedLevels.join(", ") : "none";
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

const profile = new ContributorProfile("jaanque", "Jan", ["JavaScript", "HTML", "CSS"]);
console.log(profile.introduce());

[1, 2, 3, 4, 5].forEach(lvl => profile.completeLevel(lvl));
profile.addLanguage("Python");

console.log("\nAfter progress:");
console.log(profile.introduce());
console.log("\nSerialized object:", profile.toJSON());

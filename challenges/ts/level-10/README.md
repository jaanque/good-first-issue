# 🔴 Level 10: OOP Class & Interface Implementation

> **Difficulty:** Advanced- | **Estimated Time:** 25-30 mins | **Track:** TypeScript

Welcome to **Level 10**! In this capstone challenge of the TypeScript track, you will design a class that implements a contract defined by a TypeScript **`interface`**, utilizing access modifiers and typed serialization.

---

## 📖 What You'll Learn & Why It Matters

### 1. Interface Contracts with `implements`
In TypeScript, classes can implement interfaces to guarantee that they provide specific fields and methods:

```typescript
interface IProfile {
  username: string;
  introduce(): string;
}

class UserProfile implements IProfile {
  constructor(public username: string) {}
  introduce(): string {
    return `User: ${this.username}`;
  }
}
```

### 2. Access Modifiers & Encapsulation
TypeScript supports:
- `public`: Accessible from anywhere (default).
- `private`: Accessible only within the class.
- `readonly`: Value can only be assigned during initialization.

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing an interface `IContributorProfile` and a class `ContributorProfile` that implements it.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-10/<your-username>.ts` *(e.g. `challenges/ts/level-10/octocat.ts`)*

2. **Interface & Class Specifications:**
   - Define interface `ProfileData`:
     - `username: string`
     - `name: string`
     - `languages: string[]`
     - `completedLevels: number[]`
     - `progress: number`
   - Define class `ContributorProfile`:
     - `constructor(username: string, name: string, languages?: string[], completedLevels?: number[])`
     - `addLanguage(language: string): void` (prevents duplicates)
     - `completeLevel(level: number): boolean` (validates integer between 1 and 10, prevents duplicates, sorts, returns `true` on success, `false` otherwise)
     - `getProgress(): number` (percentage of 10 levels completed, 1 decimal place)
     - `introduce(): string`
     - `toJSON(): ProfileData`

---

## 💡 Example

```typescript
// Level 10: OOP Class & Interface Implementation
// Contributor: @octocat

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
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-10/<your-username>.ts
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 9](../level-9/) | 🏠 [TypeScript Track Overview](../README.md) | 🚀 [All Tracks](../../README.md) |
| :---: | :---: | :---: |

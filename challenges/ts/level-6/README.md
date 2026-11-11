# 🟡 Level 6: Array Methods (`filter` & `map`)

> **Difficulty:** Intermediate- | **Estimated Time:** 15-20 mins | **Track:** TypeScript

Welcome to **Level 6**! In this challenge, you will master functional array pipelines in TypeScript using typed arrow predicates in `.filter()` and `.map()`.

---

## 📖 What You'll Learn & Why It Matters

TypeScript automatically infers the element type inside array callback functions:

```typescript
const numbers: number[] = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // inferred as number[]
```

- When you write `numbers.filter(n => ...)`, TypeScript already knows that `n` is of type `number`, giving you full autocompletion and mathematical validation.
- Purity: `.filter()` and `.map()` return a new array without mutating the original input array.

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing a function `processNumbers(numbers: number[]): number[]` that filters for positive even numbers and returns their squares.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-6/<your-username>.ts` *(e.g. `challenges/ts/level-6/octocat.ts`)*

2. **Specifications:**
   - Define a function `processNumbers(numbers: number[]): number[]`.
   - Filter criteria: Keep numbers where `n > 0 && n % 2 === 0`.
   - Transformation: Square each retained number using `n ** 2`.
   - Return the new typed `number[]` array.

---

## 💡 Example

```typescript
// Level 6: Array Methods (filter & map)
// Contributor: @octocat

function processNumbers(numbers: number[]): number[] {
  return numbers
    .filter((n: number) => n > 0 && n % 2 === 0)
    .map((n: number) => n ** 2);
}

const sample: number[] = [-4, 2, 0, 3, 4, 5, 6];
console.log("Original:", sample);
console.log("Processed:", processNumbers(sample));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-6/<your-username>.ts
```

### Expected Output:
```text
Original: [ -4, 2, 0, 3, 4, 5, 6 ]
Processed: [ 4, 16, 36 ]
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 5](../level-5/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 7 (Strings & Palindromes) →](../level-7/) |
| :---: | :---: | :---: |

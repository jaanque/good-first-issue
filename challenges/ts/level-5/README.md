# 🟡 Level 5: Conditionals & Logic (FizzBuzz)

> **Difficulty:** Easy+ | **Estimated Time:** 15 mins | **Track:** TypeScript

Welcome to **Level 5**! In this challenge, you will implement the classic **FizzBuzz** algorithm in TypeScript, practicing typed arrays (`string[]`), loop boundary conditions, and the modulo operator (`%`).

---

## 📖 What You'll Learn & Why It Matters

### 1. Typed Arrays in TypeScript
Arrays can be annotated using two equivalent syntaxes:
```typescript
const names: string[] = ["Alice", "Bob"];
const numbers: Array<number> = [1, 2, 3];
```

By specifying `string[]`, TypeScript prevents you from accidentally pushing numbers or `null` values into the array.

### 2. Modulo Operator & Conditional Ordering
- `i % 15 === 0`: Divisible by both 3 and 5 (must be checked first!).
- `i % 3 === 0`: Divisible by 3.
- `i % 5 === 0`: Divisible by 5.

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing a function `fizzBuzz(n: number): string[]` that returns the FizzBuzz sequence from `1` to `n`.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-5/<your-username>.ts` *(e.g. `challenges/ts/level-5/octocat.ts`)*

2. **Specifications:**
   - Define a function `fizzBuzz(n: number): string[]`.
   - Iterate from `1` to `n` inclusive.
   - For multiples of both 3 and 5, push `"FizzBuzz"`.
   - For multiples of 3 only, push `"Fizz"`.
   - For multiples of 5 only, push `"Buzz"`.
   - Otherwise, push the number as a string (`String(i)`).
   - Return the array of strings.

---

## 💡 Example

```typescript
// Level 5: Conditionals & Logic (FizzBuzz)
// Contributor: @octocat

function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}

console.log("FizzBuzz sequence (1 to 15):");
console.log(fizzBuzz(15));
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-5/<your-username>.ts
```

### Expected Output:
```text
FizzBuzz sequence (1 to 15):
[ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz' ]
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 4](../level-4/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 6 (Array Methods) →](../level-6/) |
| :---: | :---: | :---: |

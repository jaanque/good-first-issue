# 🟡 Level 6: Array Methods (`filter` & `map`)

> **Difficulty:** Intermediate- | **Estimated Time:** 15-20 mins | **Track:** JavaScript

Welcome to **Level 6**! In this challenge, you will transition into **functional programming** with JavaScript's most powerful native array methods: `.filter()` and `.map()`.

---

## 📖 What You'll Learn & Why It Matters

In modern JavaScript, we avoid manual `for` loops with accumulator arrays whenever possible. Instead, we use declarative array methods:

### 1. `.filter()` — Selecting Elements
Takes a predicate function that tests each item. Returns a new array containing only elements that pass the test (return `true`):
```javascript
const evens = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0);
// Result: [2, 4, 6]
```

### 2. `.map()` — Transforming Elements
Transforms every element by applying a function and returning a new array of the same length:
```javascript
const doubled = [2, 4, 6].map(n => n * 2);
// Result: [4, 8, 12]
```

### 3. Method Chaining (Pipelines)
Because both methods return new arrays without mutating the original, you can chain them cleanly:
```javascript
const result = array.filter(...).map(...);
```

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `processNumbers(numbers)` that takes an array of integers, keeps only positive even numbers, and returns an array of their squares.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-6/<your-username>.js` *(e.g. `levels/js/level-6/octocat.js`)*

2. **Specifications:**
   - Define a function `processNumbers(numbers)`.
   - Filter criteria: Keep numbers where `n > 0` AND `n % 2 === 0`.
     *(Note: `0` is not positive! Negative evens like `-4` must be excluded!)*
   - Transformation: Square each kept number using `n ** 2` (or `Math.pow(n, 2)`).
   - Return the new array.
   - Do not mutate the original `numbers` array.
   - Log sample tests with `[-4, 2, 0, 3, 4, 5, 6]`.

---

## 💡 Example

```javascript
// Contributor: @octocat

function processNumbers(numbers) {
  return numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(n => n ** 2);
}

const sample = [-4, 2, 0, 3, 4, 5, 6];
console.log("Original:", sample);
console.log("Processed:", processNumbers(sample));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Immutability:** Methods like `.filter()` and `.map()` do not modify the original array; they always return brand new arrays.
- 💡 **Exponentiation:** `n ** 2` is standard modern JavaScript syntax for squaring a number.
- ⚠️ **Zero is Not Positive:** Ensure your filter checks `n > 0`, so `0` is correctly ignored.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-6/<your-username>.js
```

### Expected Terminal Output:
```text
Original: [ -4, 2, 0, 3, 4, 5, 6 ]
Processed: [ 4, 16, 36 ]
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 5](../level-5/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 7 (Strings & Palindromes) →](../level-7/) |
| :---: | :---: | :---: |

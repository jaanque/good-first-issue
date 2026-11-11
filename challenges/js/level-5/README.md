# 🟡 Level 5: Conditionals & Logic (FizzBuzz)

> **Difficulty:** Easy+ | **Estimated Time:** 15 mins | **Track:** JavaScript

Welcome to **Level 5**! In this challenge, you will tackle the most famous programming puzzle in computer science history: **FizzBuzz**. It tests your understanding of loops, the modulo operator (`%`), and conditional branch precedence.

---

## 📖 What You'll Learn & Why It Matters

FizzBuzz is widely used in coding interviews because it quickly tests whether a programmer understands control flow and how conditions interact with each other.

### Key Concepts:
1. **The Modulo Operator (`%`):**
   The `%` operator computes the remainder of a division:
   - `6 % 3 === 0` *(6 is cleanly divisible by 3)*
   - `7 % 3 === 1` *(7 divided by 3 leaves a remainder of 1)*
   - `10 % 5 === 0` *(10 is cleanly divisible by 5)*

2. **The Order of Conditions Trap:**
   Numbers like `15`, `30`, and `45` are divisible by **both** 3 and 5.
   If you check `i % 3 === 0` first, `15` will match that first condition and output `"Fizz"` instead of `"FizzBuzz"`.
   > [!IMPORTANT]
   > Always check for the most specific condition (`i % 15 === 0` or `i % 3 === 0 && i % 5 === 0`) **first** before checking individual factors!

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `fizzBuzz(n)` that returns an array of strings representing the sequence from `1` up to `n`.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/js/level-5/<your-username>.js` *(e.g. `challenges/js/level-5/octocat.js`)*

2. **Specifications:**
   - Define a function `fizzBuzz(n)`.
   - Iterate from `1` up to `n` (inclusive).
   - For numbers divisible by both 3 and 5, push `"FizzBuzz"`.
   - For numbers divisible by 3 (only), push `"Fizz"`.
   - For numbers divisible by 5 (only), push `"Buzz"`.
   - For all other numbers, push the number as a string (`String(i)`).
   - Return the resulting array of strings.
   - Demonstrate by calling `fizzBuzz(15)` and logging the output.

---

## 💡 Example

```javascript
// Contributor: @octocat

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}

console.log("FizzBuzz sequence (1 to 15):");
console.log(fizzBuzz(15));
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Data Consistency:** Every element in the returned array should be a `string` (e.g. `"1"`, `"2"`, `"Fizz"`), not a mix of numbers and strings.
- 💡 **1-Indexed Loop:** Remember that the sequence starts at `1`, not `0`! (`for (let i = 1; i <= n; i++)`).

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node challenges/js/level-5/<your-username>.js
```

### Expected Terminal Output:
```text
FizzBuzz sequence (1 to 15):
[
  '1',        '2',
  'Fizz',     '4',
  'Buzz',     'Fizz',
  '7',        '8',
  'Fizz',     'Buzz',
  '11',       'Fizz',
  '13',       '14',
  'FizzBuzz'
]
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 4](../level-4/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 6 (Array Methods) →](../level-6/) |
| :---: | :---: | :---: |

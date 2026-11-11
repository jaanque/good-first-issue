# 🟡 Level 7: String Manipulation & Palindrome Checker

> **Difficulty:** Intermediate | **Estimated Time:** 15-20 mins | **Track:** TypeScript

Welcome to **Level 7**! In this challenge, you will implement an algorithm to detect palindromes in TypeScript, combining regular expressions, case normalization, and typed boolean returns.

---

## 📖 What You'll Learn & Why It Matters

A **palindrome** is a string that reads the same forwards and backwards (e.g. *"radar"*, *"Was it a car or a cat I saw?"*).

In real-world data processing, inputs contain irregular punctuation, whitespace, and mixed casing. Sanitizing text before verification requires:
1. Converting characters to lowercase with `.toLowerCase()`.
2. Stripping non-alphanumeric characters with a regex replace:
   ```typescript
   const cleaned: string = text.toLowerCase().replace(/[^a-z0-9]/g, "");
   ```
3. Reversing the cleaned string and checking equality:
   ```typescript
   const reversed: string = cleaned.split("").reverse().join("");
   return cleaned === reversed;
   ```

---

## 🎯 Objective

Create a file named `<your-username>.ts` in this directory containing a function `isPalindrome(text: string): boolean` that verifies whether the sanitized string is a palindrome.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/ts/level-7/<your-username>.ts` *(e.g. `challenges/ts/level-7/octocat.ts`)*

2. **Specifications:**
   - Define a function `isPalindrome(text: string): boolean`.
   - Strip all non-alphanumeric characters using regex.
   - Ignore character casing.
   - Return a `boolean` (`true` or `false`).
   - Log tests across phrases, words, numbers, and edge cases.

---

## 💡 Example

```typescript
// Level 7: String Manipulation & Palindromes
// Contributor: @octocat

function isPalindrome(text: string): boolean {
  const cleaned: string = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

const tests: string[] = [
  "radar",
  "A man, a plan, a canal: Panama",
  "Was it a car or a cat I saw?",
  "typescript",
  "open source",
];

tests.forEach((sample: string) => {
  console.log(`'${sample}' -> is palindrome: ${isPalindrome(sample)}`);
});
```

---

## 🧪 Testing Your Solution

Run your script in your terminal:

```bash
node challenges/ts/level-7/<your-username>.ts
```

### Expected Output:
```text
'radar' -> is palindrome: true
'A man, a plan, a canal: Panama' -> is palindrome: true
'Was it a car or a cat I saw?' -> is palindrome: true
'typescript' -> is palindrome: false
'open source' -> is palindrome: false
```

---

## 🔍 Reference Solution

Check [`jan.ts`](jan.ts) in this directory for a complete working reference solution.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 6](../level-6/) | 🏠 [TypeScript Track Overview](../README.md) | ➡️ [Next: Level 8 (Record & Word Frequency) →](../level-8/) |
| :---: | :---: | :---: |


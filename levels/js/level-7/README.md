# 🟡 Level 7: String Manipulation & Palindrome Checker

> **Difficulty:** Intermediate | **Estimated Time:** 15-20 mins | **Track:** JavaScript

Welcome to **Level 7**! In this challenge, you will explore text normalization, regular expressions, and string reversal by building an algorithm that checks whether a phrase is a **palindrome**.

---

## 📖 What You'll Learn & Why It Matters

A **palindrome** is a word, phrase, or sequence that reads the same backward as forward (e.g., *"radar"*, *"racecar"*).

Real-world strings often contain punctuation, spaces, and mixed casing (for example: `"A man, a plan, a canal: Panama"`). To test for palindromes accurately, we must **normalize** the input text first:

### 1. Case Normalization & Regex Filtering
```javascript
// Convert to lowercase and strip all non-alphanumeric characters:
const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
```
- `[^a-z0-9]`: Matches anything that is **not** a lowercase English letter (`a-z`) or a digit (`0-9`).
- `g`: Global flag, replacing all matches across the entire string.

### 2. String Reversal Trick in JavaScript
Strings in JavaScript are immutable and don't have a built-in `.reverse()` method, but arrays do!
```javascript
const reversed = cleaned.split("").reverse().join("");
```
1. `.split("")` breaks the string into an array of characters.
2. `.reverse()` flips the array in place.
3. `.join("")` stitches the characters back into a string.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory containing a function `isPalindrome(text)` that returns `true` if the cleaned text is a palindrome and `false` otherwise.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-7/<your-username>.js` *(e.g. `levels/js/level-7/octocat.js`)*

2. **Specifications:**
   - Define a function `isPalindrome(text)`.
   - Convert all characters to lowercase.
   - Remove all spaces, punctuation, and non-alphanumeric characters.
   - Compare the cleaned text against its reverse.
   - Return a boolean (`true` or `false`).
   - Test your function with both single words and complex phrases with punctuation.

---

## 💡 Example

```javascript
// Contributor: @octocat

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

const tests = [
  "radar",
  "A man, a plan, a canal: Panama",
  "Was it a car or a cat I saw?",
  "javascript",
  "open source",
];

tests.forEach(test => {
  console.log(`'${test}' -> is palindrome: ${isPalindrome(test)}`);
});
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Empty Strings:** An empty string (`""`) or string with only spaces/symbols cleans up to `""` which equals `""`, correctly returning `true`.
- 💡 **Numbers Count:** In alphanumeric phrases like `"12321"`, digits should be preserved during cleaning.

---

## 🧪 Testing Your Solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-7/<your-username>.js
```

### Expected Terminal Output:
```text
'radar' -> is palindrome: true
'A man, a plan, a canal: Panama' -> is palindrome: true
'Was it a car or a cat I saw?' -> is palindrome: true
'javascript' -> is palindrome: false
'open source' -> is palindrome: false
```

---

## 🔍 Reference Solution

Check [`jan.js`](jan.js) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 6](../level-6/) | 🏠 [JS Track Overview](../README.md) | ➡️ [Next: Level 8 (Objects & Frequencies) →](../level-8/) |
| :---: | :---: | :---: |

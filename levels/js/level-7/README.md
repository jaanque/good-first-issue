# 🟡 Level 7: String Manipulation & Palindrome Checker

Welcome to Level 7! In this challenge you will use regular expressions, string methods, and array reversing to check for palindromes.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-7/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Function `isPalindrome(text)` returning a boolean.
- Case-insensitive (`"Radar"` -> `true`).
- Ignore spaces and punctuation (`"A man, a plan, a canal: Panama"` -> `true`).
- Return `false` for non-palindromes (`"javascript"` -> `false`).

---

## 💡 Example

```javascript
function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("radar")); // true
console.log(isPalindrome("javascript")); // false
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-7/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

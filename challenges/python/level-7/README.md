# 🟡 Level 7: String Manipulation & Palindrome Checker

> **Difficulty:** Intermediate | **Estimated Time:** 15-20 mins | **Track:** Python

Welcome to **Level 7**! In this challenge, you will explore string manipulation, regular expressions (`re`), and Python's famous **slice notation (`[::-1]`)** by implementing an algorithm to detect palindromes.

---

## 📖 What You'll Learn & Why It Matters

A **palindrome** is a word, phrase, or sequence that reads the same forwards and backwards (e.g. *"radar"*, *"level"*).

In real-world data, sentences contain punctuation, spaces, and mixed capitalization (e.g. *"A man, a plan, a canal: Panama"*). To test accurately, we normalize the text first:

### 1. Removing Non-Alphanumeric Characters with `re.sub`:
```python
import re

cleaned = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
```
- `re.sub(pattern, replacement, string)` replaces matches.
- `[^a-zA-Z0-9]` matches any character that is **not** an ASCII letter or digit.
- `.lower()` normalizes uppercase letters to lowercase.

### 2. The Python Slicing Trick (`[::-1]`):
Python string slicing syntax is `string[start:stop:step]`. Setting `step = -1` reverses the entire string in a single, blazing-fast operation:
```python
is_same = cleaned == cleaned[::-1]
```

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `is_palindrome(text)` that returns `True` if the normalized string is a palindrome and `False` otherwise.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/python/level-7/<your-username>.py` *(e.g. `challenges/python/level-7/octocat.py`)*

2. **Specifications:**
   - Define a function `is_palindrome(text: str) -> bool`.
   - Strip all characters except letters and digits.
   - Convert all characters to lowercase.
   - Compare the cleaned string to its reverse using slicing (`[::-1]`).
   - Return a boolean (`True` or `False`).
   - In `if __name__ == "__main__":`, run tests on single words, famous palindrome phrases, and non-palindromes.

---

## 💡 Example

```python
"""Level 7: String Manipulation & Palindrome Checker.

Contributor: @octocat
"""

import re


def is_palindrome(text: str) -> bool:
    """Check if the given string is a palindrome.

    Ignores non-alphanumeric characters and casing.
    """
    cleaned = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    return cleaned == cleaned[::-1]


if __name__ == "__main__":
    test_cases = [
        ("radar", True),
        ("A man, a plan, a canal: Panama", True),
        ("Was it a car or a cat I saw?", True),
        ("python", False),
        ("open source", False),
        ("", True),
    ]

    for sample, expected in test_cases:
        result = is_palindrome(sample)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"{status} | '{sample}' -> {result}")
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Empty Strings:** An empty string cleans up to `""`, which equals `""` reversed, correctly evaluating to `True`.
- 💡 **Standard Library Only:** The `re` module is part of Python's Standard Library; no external installation is needed.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python challenges/python/level-7/<your-username>.py
# or:
python3 challenges/python/level-7/<your-username>.py
```

### Expected Terminal Output:
```text
✅ PASS | 'radar' -> True
✅ PASS | 'A man, a plan, a canal: Panama' -> True
✅ PASS | 'Was it a car or a cat I saw?' -> True
✅ PASS | 'python' -> False
✅ PASS | 'open source' -> False
✅ PASS | '' -> True
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 6](../level-6/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 8 (Dictionaries & Counter) →](../level-8/) |
| :---: | :---: | :---: |

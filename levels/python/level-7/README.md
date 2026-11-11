# 🟡 Level 7: String Manipulation & Palindrome Checker

Welcome to Level 7! In this challenge you will dive deeper into string manipulation, slicing, character filtering, and normalization by implementing a robust palindrome checker.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `is_palindrome(text)` that checks whether a phrase or word reads the same forward and backward.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-7/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def is_palindrome(text: str) -> bool:
       pass
   ```

3. **Behavior:**
   - Must be **case-insensitive** (`"Radar"` -> `True`).
   - Must **ignore all spaces and punctuation** (`"A man, a plan, a canal: Panama"` -> `True`).
   - Non-palindromes must return `False` (`"Python"` -> `False`).
   - Empty string `""` or single character `"z"` must return `True`.

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block testing several words and phrases.

---

## 💡 Example

```python
import re


def is_palindrome(text: str) -> bool:
    cleaned = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    return cleaned == cleaned[::-1]


if __name__ == "__main__":
    print(is_palindrome("radar"))  # True
    print(is_palindrome("Was it a car or a cat I saw?"))  # True
    print(is_palindrome("open source"))  # False
```

---

## 🧪 Testing your solution

Run your script in the terminal (use `python` or `python3` depending on your environment):

```bash
python levels/python/level-7/<your-username>.py
# or:
python3 levels/python/level-7/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


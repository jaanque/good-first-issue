# 🟢 Level 2: Variables & String Formatting (f-strings)

> **Difficulty:** Very Easy | **Estimated Time:** 5-10 mins | **Track:** Python

Welcome to **Level 2**! In this challenge, you will declare Python variables and use Python's modern **formatted string literals (f-strings)** to dynamically generate a clean profile card.

---

## 📖 What You'll Learn & Why It Matters

Variables allow you to store and manipulate data. Unlike many other languages, Python uses **dynamic typing** — you don't need to specify variable keywords like `let` or type names like `int`:

```python
username = "octocat"
level = 2
```

### Why f-strings?
Before Python 3.6, string formatting was verbose and error-prone (using `%s` or `.format()`). Today, **f-strings** are the gold standard for readable, performant string interpolation:

```python
# Modern Python f-string:
message = f"Hello {name}, you have completed level {level}!"
```
Simply prefix the string literal with an `f` and place variables or expressions directly inside curly braces `{}`.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory where you define your profile variables and print a cleanly formatted contributor summary card.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-2/<your-username>.py` *(e.g. `levels/python/level-2/octocat.py`)*

2. **Specifications:**
   - Define the following variables using [PEP 8 `snake_case`](https://peps.python.org/pep-0008/#naming-conventions):
     - `username` *(str)*: Your GitHub username.
     - `name` *(str)*: Your real name or nickname.
     - `favorite_language` *(str)*: Your favorite programming language.
     - `level` *(int)*: The integer `2`.
   - Combine all variables using an **f-string** (`f"..."`).
   - Print the final string using `print()`.

---

## 💡 Example

```python
"""Level 2: Variables & String Formatting (f-strings).

Contributor: @octocat
"""

username = "octocat"
name = "Mona Lisa Octocat"
favorite_language = "Python"
level = 2

profile = (
    f"Contributor: {name} (@{username}) | Level: {level} | Favorite Language: {favorite_language}"
)

print(profile)
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Naming Conventions:** In Python, multi-word variables use lowercase letters separated by underscores (`snake_case`, e.g. `favorite_language`), rather than `camelCase`.
- 💡 **Line Continuation:** Wrapping long strings in parentheses `(...)` allows clean multi-line formatting without ugly backslashes.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python levels/python/level-2/<your-username>.py
# or:
python3 levels/python/level-2/<your-username>.py
```

### Expected Terminal Output:
```text
Contributor: Mona Lisa Octocat (@octocat) | Level: 2 | Favorite Language: Python
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 1](../level-1/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 3 (Functions) →](../level-3/) |
| :---: | :---: | :---: |

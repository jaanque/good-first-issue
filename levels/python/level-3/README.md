# 🟢 Level 3: Functions & Return Values

> **Difficulty:** Easy | **Estimated Time:** 10 mins | **Track:** Python

Welcome to **Level 3**! In this challenge, you will write your first reusable Python function with default arguments, return statements, type hints, and the idiomatic `if __name__ == "__main__":` guard block.

---

## 📖 What You'll Learn & Why It Matters

Functions let you encapsulate logic so it can be called repeatedly with varying inputs:

```python
def add(a: int, b: int) -> int:
    return a + b
```

### Key Python Concepts:
1. **Default Argument Values:**
   Providing a fallback value makes an argument optional:
   ```python
   def greet(name: str = "World") -> str:
       return f"Hello, {name}!"
```

2. **Type Hints (PEP 484):**
   Adding `: str` and `-> str` documents parameter and return types for your code editor and other developers.

3. **The `if __name__ == "__main__":` Idiom:**
   When Python runs a file directly, it sets `__name__` to `"__main__"`. Putting test code inside this guard ensures it runs when executed directly from the terminal, but does NOT run unintentionally if another script imports it!

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `greet(name)` that returns a greeting string.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-3/<your-username>.py` *(e.g. `levels/python/level-3/octocat.py`)*

2. **Specifications:**
   - Define a function `greet(name: str = "World") -> str`.
   - When called without arguments, `name` must default to `"World"`.
   - Return a formatted string including:
     - The target name.
     - Your GitHub handle (e.g. `@<your-username>`).
     - A mention of Level 3.
   - Include an `if __name__ == "__main__":` block demonstrating calls with no arguments and with custom names.

---

## 💡 Example

```python
"""Level 3: Functions & Return Values.

Contributor: @octocat
"""


def greet(name: str = "World") -> str:
    """Return a personalized greeting message."""
    return f"Hello, {name}! This is @octocat welcoming you to Level 3."


if __name__ == "__main__":
    print(greet())
    print(greet("Alice"))
    print(greet("fellow developer"))
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **4 Spaces Indentation:** Python uses indentation to define code blocks. Always use 4 spaces per indentation level.
- 💡 **Docstrings:** Adding a triple-quoted string `"""Docstring"""` right below `def` creates standard Python documentation accessible via `help()`.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python levels/python/level-3/<your-username>.py
# or:
python3 levels/python/level-3/<your-username>.py
```

### Expected Terminal Output:
```text
Hello, World! This is @octocat welcoming you to Level 3.
Hello, Alice! This is @octocat welcoming you to Level 3.
Hello, fellow developer! This is @octocat welcoming you to Level 3.
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 2](../level-2/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 4 (Calculator & Math) →](../level-4/) |
| :---: | :---: | :---: |

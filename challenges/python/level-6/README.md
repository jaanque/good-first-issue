# 🟡 Level 6: Lists & Loops (Filter & Transform)

> **Difficulty:** Intermediate- | **Estimated Time:** 15-20 mins | **Track:** Python

Welcome to **Level 6**! In this challenge, you will master one of Python's most beloved and expressive features: **List Comprehensions**, used to filter collections and transform data in a single, clean expression.

---

## 📖 What You'll Learn & Why It Matters

In many programming languages, filtering and transforming a list requires initializing an empty array and writing a multi-line `for` loop with nested `if` statements:

```python
# The imperative way:
result = []
for n in numbers:
    if n > 0 and n % 2 == 0:
        result.append(n**2)
```

### The Pythonic Way: List Comprehensions
Python provides a concise, declarative syntax that expresses the same operation cleanly:
```python
result = [n**2 for n in numbers if n > 0 and n % 2 == 0]
```
- **Expression (`n**2`):** What to do with each item (squaring it).
- **Loop (`for n in numbers`):** The iteration over the list.
- **Filter (`if n > 0 and n % 2 == 0`):** The condition elements must satisfy to be included.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `process_numbers(numbers)` that takes a list of integers, filters for positive even numbers, and returns a list of their squares.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/python/level-6/<your-username>.py` *(e.g. `challenges/python/level-6/octocat.py`)*

2. **Specifications:**
   - Define a function `process_numbers(numbers: list[int]) -> list[int]`.
   - Filter criteria: Keep numbers where `n > 0` and `n % 2 == 0`.
     *(Note: `0` is neither positive nor negative; negative numbers like `-4` must be excluded!)*
   - Transformation: Square each kept number using `n**2`.
   - Return the new list.
   - In `if __name__ == "__main__":`, run sample tests including mixed numbers, all negative, and empty lists.

---

## 💡 Example

```python
"""Level 6: Lists & Loops (Filter & Transform).

Contributor: @octocat
"""


def process_numbers(numbers: list[int]) -> list[int]:
    """Filter positive even numbers and square them."""
    return [n**2 for n in numbers if n > 0 and n % 2 == 0]


if __name__ == "__main__":
    samples = [
        ([-4, 2, 0, 3, 4, 5, 6], [4, 16, 36]),
        ([-1, -2, -3], []),
        ([1, 3, 5, 7], []),
        ([2, 4, 8], [4, 16, 64]),
        ([], []),
    ]

    for nums, expected in samples:
        result = process_numbers(nums)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"{status} | Input: {nums} -> Output: {result}")
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Exponents in Python:** Use `n**2` for powers (avoid `^`, which is bitwise XOR in Python!).
- 💡 **Pure Function:** Your function should create and return a new list without modifying the input list.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python challenges/python/level-6/<your-username>.py
# or:
python3 challenges/python/level-6/<your-username>.py
```

### Expected Terminal Output:
```text
✅ PASS | Input: [-4, 2, 0, 3, 4, 5, 6] -> Output: [4, 16, 36]
✅ PASS | Input: [-1, -2, -3] -> Output: []
✅ PASS | Input: [1, 3, 5, 7] -> Output: []
✅ PASS | Input: [2, 4, 8] -> Output: [4, 16, 64]
✅ PASS | Input: [] -> Output: []
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 5](../level-5/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 7 (Strings & Palindromes) →](../level-7/) |
| :---: | :---: | :---: |

# 🟡 Level 5: Conditionals & Logic (FizzBuzz)

> **Difficulty:** Easy+ | **Estimated Time:** 15 mins | **Track:** Python

Welcome to **Level 5**! In this challenge, you will tackle one of the most famous coding interview puzzles in programming: **FizzBuzz**. It tests your understanding of loops, the modulo operator (`%`), list building, and conditional branching.

---

## 📖 What You'll Learn & Why It Matters

FizzBuzz teaches precision in conditional logic and loop boundary conditions:

### Key Concepts:
1. **The Modulo Operator (`%`):**
   The `%` operator returns the division remainder:
   - `i % 3 == 0` is `True` when `i` is a multiple of 3.
   - `i % 5 == 0` is `True` when `i` is a multiple of 5.
   - `i % 15 == 0` is `True` when `i` is a multiple of both 3 and 5.

2. **Python's `range(start, stop)` is Half-Open:**
   In Python, `range(1, 15)` stops at 14! To iterate from 1 up to `n` inclusive, you must pass `range(1, n + 1)`.

3. **Condition Order:**
   Always evaluate `i % 15 == 0` first. If you check `i % 3 == 0` first, `15` will match the 3 check and output `"Fizz"` instead of `"FizzBuzz"`.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `fizz_buzz(n)` that returns a list of strings representing the FizzBuzz sequence from `1` up to `n`.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/python/level-5/<your-username>.py` *(e.g. `challenges/python/level-5/octocat.py`)*

2. **Specifications:**
   - Define a function `fizz_buzz(n: int) -> list[str]`.
   - Iterate from `1` to `n` inclusive.
   - If the number is divisible by both 3 and 5 (15), append `"FizzBuzz"`.
   - If divisible by 3 (only), append `"Fizz"`.
   - If divisible by 5 (only), append `"Buzz"`.
   - Otherwise, append the number converted to a string (`str(i)`).
   - Return the resulting list of strings.
   - In `if __name__ == "__main__":`, run `fizz_buzz(15)` and print the result.

---

## 💡 Example

```python
"""Level 5: Conditionals & Logic (FizzBuzz).

Contributor: @octocat
"""


def fizz_buzz(n: int) -> list[str]:
    """Return a list containing the FizzBuzz sequence from 1 to n."""
    sequence = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            sequence.append("FizzBuzz")
        elif i % 3 == 0:
            sequence.append("Fizz")
        elif i % 5 == 0:
            sequence.append("Buzz")
        else:
            sequence.append(str(i))
    return sequence


if __name__ == "__main__":
    output = fizz_buzz(15)
    print("FizzBuzz sequence (1 to 15):")
    print(output)
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Data Types:** Ensure numbers are converted to strings using `str(i)` so the returned list has uniform `str` elements: `['1', '2', 'Fizz', ...]`.
- 💡 **List Comprehensions:** While a standard loop with `.append()` is clear, advanced Pythonistas can also write FizzBuzz using one-line conditional expressions.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python challenges/python/level-5/<your-username>.py
# or:
python3 challenges/python/level-5/<your-username>.py
```

### Expected Terminal Output:
```text
FizzBuzz sequence (1 to 15):
['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 4](../level-4/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 6 (Lists & Comprehensions) →](../level-6/) |
| :---: | :---: | :---: |

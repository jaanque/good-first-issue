# 🟢 Level 4: Arithmetic Operations & Basic Calculator

> **Difficulty:** Easy | **Estimated Time:** 10-15 mins | **Track:** Python

Welcome to **Level 4**! In this challenge, you will practice numerical operations, conditional branching (`if-elif-else`), and defensive error checking by building a safe calculator function.

---

## 📖 What You'll Learn & Why It Matters

Clean code must anticipate and handle invalid user inputs and mathematical edge cases:

### Key Concepts:
1. **Arithmetic in Python:**
   - Addition: `a + b`
   - Subtraction: `a - b`
   - Multiplication: `a * b`
   - Division: `a / b` *(Note: `/` always returns a `float` in Python 3, e.g. `10 / 2` is `5.0`)*

2. **The ZeroDivisionError Exception:**
   In Python, attempting to evaluate `10 / 0` crashes your program immediately with a `ZeroDivisionError`. Defensive programming checks for `b == 0` beforehand and returns a user-friendly error message.

3. **Type Hint Union (`float | str`):**
   Since our function returns a number on success and an error string on failure, Python 3.10+ expresses this cleanly using `float | str`.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `calculate(a, b, operation)` that safely performs arithmetic calculations.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/python/level-4/<your-username>.py` *(e.g. `challenges/python/level-4/octocat.py`)*

2. **Specifications:**
   - Define a function `calculate(a: float, b: float, operation: str) -> float | str`.
   - Support four operations: `"+"`, `"-"`, `"*"`, `"/"`.
   - **Edge Case 1:** If `operation == "/"` and `b == 0`, return:  
     `"Error: Division by zero"`
   - **Edge Case 2:** For any unsupported operator, return:  
     `"Error: Invalid operation"`
   - For valid operations, return the numerical result.
   - Include test cases in an `if __name__ == "__main__":` block demonstrating all 4 operations and both error cases.

---

## 💡 Example

```python
"""Level 4: Arithmetic Operations & Basic Calculator.

Contributor: @octocat
"""


def calculate(a: float, b: float, operation: str) -> float | str:
    """Perform a basic arithmetic operation between two numbers."""
    if operation == "+":
        return a + b
    elif operation == "-":
        return a - b
    elif operation == "*":
        return a * b
    elif operation == "/":
        if b == 0:
            return "Error: Division by zero"
        return a / b
    return "Error: Invalid operation"


if __name__ == "__main__":
    tests = [
        (10, 5, "+", 15),
        (20, 8, "-", 12),
        (6, 7, "*", 42),
        (15, 3, "/", 5.0),
        (10, 0, "/", "Error: Division by zero"),
        (4, 2, "%", "Error: Invalid operation"),
    ]

    for a, b, op, expected in tests:
        res = calculate(a, b, op)
        status = "✅ PASS" if res == expected else "❌ FAIL"
        print(f"{status} | {a} {op} {b} = {res}")
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Comparison in Python:** Equality is tested with `==` (do not confuse with assignment `=`).
- 💡 **Float Division:** `15 / 3` in Python produces `5.0` (a float), not `5` (an int). Both are valid numerical results.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python challenges/python/level-4/<your-username>.py
# or:
python3 challenges/python/level-4/<your-username>.py
```

### Expected Terminal Output:
```text
✅ PASS | 10 + 5 = 15
✅ PASS | 20 - 8 = 12
✅ PASS | 6 * 7 = 42
✅ PASS | 15 / 3 = 5.0
✅ PASS | 10 / 0 = Error: Division by zero
✅ PASS | 4 % 2 = Error: Invalid operation
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 3](../level-3/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 5 (FizzBuzz & Logic) →](../level-5/) |
| :---: | :---: | :---: |

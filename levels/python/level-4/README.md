# 🟢 Level 4: Arithmetic Operations & Basic Calculator

Welcome to Level 4! In this challenge you will practice numerical operations in Python by building a simple calculator function.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `calculate(a, b, operation)` that performs basic arithmetic operations.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-4/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def calculate(a: float, b: float, operation: str) -> float | str:
       pass
   ```

3. **Supported Operations:**
   - `"+"`: Addition (`a + b`)
   - `"-"`: Subtraction (`a - b`)
   - `"*"`: Multiplication (`a * b`)
   - `"/"`: Division (`a / b`)

4. **Edge Cases:**
   - If `operation` is `"/"` and `b == 0`, return `"Error: Division by zero"`.
   - If an unsupported operation is passed, return `"Error: Invalid operation"`.

5. **Execution Block:**  
   Include an `if __name__ == "__main__":` block demonstrating calls for each operation (including the zero division case).

---

## 💡 Example

```python
def calculate(a: float, b: float, operation: str) -> float | str:
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
    print(calculate(10, 5, "+"))  # 15
    print(calculate(10, 0, "/"))  # Error: Division by zero
```

---

## 🧪 Testing your solution

Run your script in the terminal:

```bash
python levels/python/level-4/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

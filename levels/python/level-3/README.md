# 🟢 Level 3: Functions & Return Values

Welcome to Level 3! In this challenge you will write your first reusable Python function with parameters, a default argument, and a return statement.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `greet(name)` that returns a greeting string.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-3/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def greet(name: str = "World") -> str:
       pass
   ```

3. **Behavior:**
   - If called without arguments (`greet()`), it must default to `"World"` and return a greeting.
   - If called with a custom name (`greet("Alice")`), it must use the provided name.
   - The returned string must include your GitHub username (e.g. `@<your-username>`).

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block that prints sample calls to verify your function.

---

## 💡 Example

```python
def greet(name: str = "World") -> str:
    return f"Hello, {name}! This is @octocat welcoming you to Level 3."


if __name__ == "__main__":
    print(greet())
    print(greet("Alice"))
```

---

## 🧪 Testing your solution

Run your script in the terminal (use `python` or `python3` depending on your environment):

```bash
python levels/python/level-3/<your-username>.py
# or:
python3 levels/python/level-3/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

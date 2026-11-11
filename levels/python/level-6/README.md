# 🟡 Level 6: Lists & Loops (Filter & Transform)

Welcome to Level 6! In this challenge you will practice iterating through lists, filtering elements using conditions, and transforming values with loops or list comprehensions.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `process_numbers(numbers)` that filters and transforms a list of integers.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-6/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def process_numbers(numbers: list[int]) -> list[int]:
       pass
   ```

3. **Behavior:**
   - Filter the input to keep **only positive even numbers** (`n > 0` and `n % 2 == 0`).
   - Square each matching number (`n ** 2`).
   - Return the resulting list preserving the original order.
   - If no numbers match (or the input list is empty), return an empty list `[]`.

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block testing several lists.

---

## 💡 Example

```python
def process_numbers(numbers: list[int]) -> list[int]:
    return [n**2 for n in numbers if n > 0 and n % 2 == 0]


if __name__ == "__main__":
    data = [-4, 2, 0, 3, 4, 5, 6]
    print(process_numbers(data))  # [4, 16, 36]
```

---

## 🧪 Testing your solution

Run your script in the terminal (use `python` or `python3` depending on your environment):

```bash
python levels/python/level-6/<your-username>.py
# or:
python3 levels/python/level-6/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


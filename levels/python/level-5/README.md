# 🟡 Level 5: Conditionals & Logic (FizzBuzz)

Welcome to Level 5! In this challenge you will tackle one of the most famous programming puzzles: **FizzBuzz**. It tests your understanding of conditionals, loops, and the modulo operator (`%`).

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `fizz_buzz(n)` that returns a list of strings representing the FizzBuzz sequence from 1 up to `n`.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-5/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def fizz_buzz(n: int) -> list[str]:
       pass
   ```

3. **Rules:**
   For every integer `i` from `1` to `n` (inclusive):
   - If `i` is divisible by both 3 and 5, append `"FizzBuzz"`.
   - If `i` is divisible by 3 (and not 5), append `"Fizz"`.
   - If `i` is divisible by 5 (and not 3), append `"Buzz"`.
   - Otherwise, append the number as a string (e.g. `"1"`, `"2"`, `"4"`).

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block printing `fizz_buzz(15)`.

---

## 💡 Example

```python
def fizz_buzz(n: int) -> list[str]:
    result = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(str(i))
    return result


if __name__ == "__main__":
    print(fizz_buzz(15))
```

---

## 🧪 Testing your solution

Run your script in the terminal (use `python` or `python3` depending on your environment):

```bash
python levels/python/level-5/<your-username>.py
# or:
python3 levels/python/level-5/<your-username>.py
```

Expected output for `n=15`:
```text
['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz']
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

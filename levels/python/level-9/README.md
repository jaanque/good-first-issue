# 🔴 Level 9: Data Aggregation & Score Analysis

Welcome to Level 9! In this challenge you will work with structured datasets (a list of dictionaries) to calculate aggregate statistics, find top/bottom performers, and filter records based on business rules.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `analyze_scores(records)` that processes participant scores and returns an analytical summary.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-9/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def analyze_scores(records: list[dict]) -> dict:
       pass
   ```

3. **Input Format:**  
   Each record in `records` is a dictionary with keys `"name"` *(str)* and `"score"` *(float | int)*:
   ```python
   [
       {"name": "Alice", "score": 85},
       {"name": "Bob", "score": 52},
       {"name": "Charlie", "score": 92},
   ]
   ```

4. **Return Format:**  
   The function must return a dictionary with:
   - `"total"` *(int)*: Total number of participants.
   - `"average"` *(float)*: Mean score across all participants, rounded to 2 decimal places.
   - `"highest"` *(dict | None)*: The record `{"name": ..., "score": ...}` with the highest score.
   - `"lowest"` *(dict | None)*: The record `{"name": ..., "score": ...}` with the lowest score.
   - `"passed"` *(list[str])*: Alphabetically sorted list of names for participants with `score >= 60`.

> [!NOTE]
> If `records` is empty, return:
> `{"total": 0, "average": 0.0, "highest": None, "lowest": None, "passed": []}`

5. **Execution Block:**  
   Include an `if __name__ == "__main__":` block testing a sample list of students.

---

## 💡 Example

```python
records = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 52},
    {"name": "Charlie", "score": 92},
]
print(analyze_scores(records))
# Output:
# {
#     'total': 3,
#     'average': 76.33,
#     'highest': {'name': 'Charlie', 'score': 92},
#     'lowest': {'name': 'Bob', 'score': 52},
#     'passed': ['Alice', 'Charlie']
# }
```

---

## 🧪 Testing your solution

Run your script in the terminal:

```bash
python levels/python/level-9/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


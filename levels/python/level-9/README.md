# 🔴 Level 9: Data Aggregation & Score Analysis

> **Difficulty:** Intermediate+ | **Estimated Time:** 20-25 mins | **Track:** Python

Welcome to **Level 9**! In this challenge, you will process structured datasets (a list of dictionaries) to calculate summary statistics, extract top and bottom performers using `lambda` functions, and filter records.

---

## 📖 What You'll Learn & Why It Matters

Data processing and reporting is a primary use case for Python in software engineering and data science. In this level, you will learn to aggregate data cleanly using Python's built-in functions:

### Key Concepts:
1. **Generator Expressions for Calculations:**
   ```python
   total_score = sum(r["score"] for r in records)
   average = round(total_score / len(records), 2)
   ```

2. **Finding Extrema with `lambda` Keys:**
   To find the dictionary with the highest score, pass a `key` function to Python's built-in `max()` and `min()`:
   ```python
   highest_record = max(records, key=lambda r: r["score"])
   lowest_record = min(records, key=lambda r: r["score"])
   ```

3. **Filtering and Sorting Subsets:**
   ```python
   passed_students = sorted(r["name"] for r in records if r["score"] >= 60)
   ```

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `analyze_scores(records)` that processes a list of participant score records and returns an analytical summary dictionary.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-9/<your-username>.py` *(e.g. `levels/python/level-9/octocat.py`)*

2. **Specifications:**
   - Define a function `analyze_scores(records: list[dict]) -> dict`.
   - Each record dictionary has the format: `{"name": str, "score": int | float}`.
   - If `records` is empty or `None`, return:
     ```python
     {
         "total": 0,
         "average": 0.0,
         "highest": None,
         "lowest": None,
         "passed": [],
     }
     ```
   - Otherwise, calculate:
     - `"total"` *(int)*: Number of participants.
     - `"average"` *(float)*: Mean score, rounded to 2 decimal places.
     - `"highest"` *(dict)*: The full dictionary of the participant with the highest score.
     - `"lowest"` *(dict)*: The full dictionary of the participant with the lowest score.
     - `"passed"` *(list[str])*: Alphabetically sorted list of participant names who achieved `score >= 60`.
   - In `if __name__ == "__main__":`, run the function with sample records and an empty list.

---

## 💡 Example

```python
"""Level 9: Data Aggregation & Score Analysis.

Contributor: @octocat
"""


def analyze_scores(records: list[dict]) -> dict:
    """Analyze participant score records and calculate summary metrics."""
    if not records:
        return {
            "total": 0,
            "average": 0.0,
            "highest": None,
            "lowest": None,
            "passed": [],
        }

    total = len(records)
    avg = round(sum(r["score"] for r in records) / total, 2)
    highest = max(records, key=lambda r: r["score"])
    lowest = min(records, key=lambda r: r["score"])
    passed = sorted(r["name"] for r in records if r["score"] >= 60)

    return {
        "total": total,
        "average": avg,
        "highest": highest,
        "lowest": lowest,
        "passed": passed,
    }


if __name__ == "__main__":
    sample_records = [
        {"name": "Alice", "score": 85},
        {"name": "Bob", "score": 52},
        {"name": "Charlie", "score": 92},
        {"name": "Diana", "score": 78},
        {"name": "Evan", "score": 45},
    ]

    print("Sample records:\n", sample_records)
    print("\nScore Analysis:\n", analyze_scores(sample_records))
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Lambda Functions:** `lambda r: r["score"]` is an anonymous one-line function that takes a record `r` and returns its `"score"` value for comparison.
- 💡 **Sorted Alphabetically:** `sorted(...)` returns a brand new sorted list without modifying anything in place.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python levels/python/level-9/<your-username>.py
# or:
python3 levels/python/level-9/<your-username>.py
```

### Expected Terminal Output:
```text
Sample records:
 [{'name': 'Alice', 'score': 85}, {'name': 'Bob', 'score': 52}, {'name': 'Charlie', 'score': 92}, {'name': 'Diana', 'score': 78}, {'name': 'Evan', 'score': 45}]

Score Analysis:
 {'total': 5, 'average': 70.4, 'highest': {'name': 'Charlie', 'score': 92}, 'lowest': {'name': 'Evan', 'score': 45}, 'passed': ['Alice', 'Charlie', 'Diana']}
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 8](../level-8/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 10 (OOP Contributor Class) →](../level-10/) |
| :---: | :---: | :---: |

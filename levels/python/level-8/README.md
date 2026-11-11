# 🟡 Level 8: Dictionaries & Word Frequency Counter

Welcome to Level 8! In this challenge you will use Python dictionaries (`dict`) and string parsing to build a word frequency counter and text analyzer.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `analyze_text(text)` that analyzes words in a string and returns frequency statistics.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-8/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature:**
   ```python
   def analyze_text(text: str) -> dict:
       pass
   ```

3. **Return Format:**
   The function must return a dictionary with the following keys:
   - `"total_words"` *(int)*: Total number of words in the text.
   - `"unique_words"` *(int)*: Count of distinct words (case-insensitive).
   - `"word_frequencies"` *(dict[str, int])*: Dictionary mapping each lowercased word to its occurrence count.
   - `"most_common"` *(str | None)*: The word that appears most frequently (or `None` if the text has no words).

> [!NOTE]
> Words must be lowercased and stripped of punctuation (e.g. `"Python!"` becomes `"python"`).

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block testing a sentence or paragraph.

---

## 💡 Example

```python
sample = "Python is great and Open Source is awesome. Python for everyone!"
result = analyze_text(sample)
# Result:
# {
#     "total_words": 10,
#     "unique_words": 8,
#     "word_frequencies": {"python": 2, "is": 2, "great": 1, ...},
#     "most_common": "python"
# }
```

---

## 🧪 Testing your solution

Run your script in the terminal (use `python` or `python3` depending on your environment):

```bash
python levels/python/level-8/<your-username>.py
# or:
python3 levels/python/level-8/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


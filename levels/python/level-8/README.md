# 🟡 Level 8: Dictionaries & Word Frequency Counter

> **Difficulty:** Intermediate | **Estimated Time:** 20 mins | **Track:** Python

Welcome to **Level 8**! In this challenge, you will use Python dictionaries and the powerful `collections.Counter` tool from Python's standard library to build an automated text analyzer and word frequency counter.

---

## 📖 What You'll Learn & Why It Matters

Dictionaries (`dict`) are hash tables that store key-value mappings with $O(1)$ lookup time. Counting frequencies is a cornerstone technique in data science, search engines, and Natural Language Processing.

### Key Python Concepts:
1. **Extracting Word Tokens:**
   ```python
   import re

   words = re.findall(r"\b\w+\b", text.lower())
   ```
   `re.findall` returns a list of all matching word substrings while ignoring punctuation.

2. **The `collections.Counter` Class:**
   Python's built-in `collections` module provides `Counter`, a specialized dictionary designed specifically for counting items:
   ```python
   from collections import Counter

   counts = Counter(words)
   most_common_word, frequency = counts.most_common(1)[0]
   ```
   `.most_common(1)` returns the single top element as a `[(word, count)]` tuple.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a function `analyze_text(text)` that inspects a text string and returns an analytical dictionary.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-8/<your-username>.py` *(e.g. `levels/python/level-8/octocat.py`)*

2. **Specifications:**
   - Define a function `analyze_text(text: str) -> dict`.
   - Tokenize the text into lowercase words.
   - If the input text has no words, safely return:
     ```python
     {
         "total_words": 0,
         "unique_words": 0,
         "word_frequencies": {},
         "most_common": None,
     }
     ```
   - Otherwise, calculate:
     - `"total_words"` *(int)*: Total number of words.
     - `"unique_words"` *(int)*: Number of distinct words.
     - `"word_frequencies"` *(dict)*: Dictionary mapping word strings to their integer counts.
     - `"most_common"` *(str)*: The word with the highest frequency.
   - Return a dictionary with these 4 keys.
   - In `if __name__ == "__main__":`, run and print the analysis on a sample text.

---

## 💡 Example

```python
"""Level 8: Dictionaries & Word Frequency Counter.

Contributor: @octocat
"""

import re
from collections import Counter


def analyze_text(text: str) -> dict:
    """Analyze text and return frequency and word count metrics."""
    words = re.findall(r"\b\w+\b", text.lower())
    if not words:
        return {
            "total_words": 0,
            "unique_words": 0,
            "word_frequencies": {},
            "most_common": None,
        }

    counts = Counter(words)
    most_common_word, _ = counts.most_common(1)[0]

    return {
        "total_words": len(words),
        "unique_words": len(counts),
        "word_frequencies": dict(counts),
        "most_common": most_common_word,
    }


if __name__ == "__main__":
    sample = "Python is great and Open Source is awesome. Python for everyone!"
    print("Sample text:\n", sample)
    print("\nAnalysis:\n", analyze_text(sample))
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Converting Counter to Dict:** While `Counter` is a subclass of `dict`, wrapping it with `dict(counts)` ensures clean serialization and pure dictionary behavior.
- 💡 **Empty Guard:** Always check `if not words:` before calling `.most_common(1)[0]` to prevent an `IndexError` on empty inputs.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python levels/python/level-8/<your-username>.py
# or:
python3 levels/python/level-8/<your-username>.py
```

### Expected Terminal Output:
```text
Sample text:
 Python is great and Open Source is awesome. Python for everyone!

Analysis:
 {'total_words': 11, 'unique_words': 9, 'word_frequencies': {'python': 2, 'is': 2, 'great': 1, 'and': 1, 'open': 1, 'source': 1, 'awesome': 1, 'for': 1, 'everyone': 1}, 'most_common': 'python'}
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 7](../level-7/) | 🏠 [Python Track Overview](../README.md) | ➡️ [Next: Level 9 (Data Aggregation) →](../level-9/) |
| :---: | :---: | :---: |

# 🔴 Level 10: Object-Oriented Programming (Contributor Class)

> **Difficulty:** Advanced- | **Estimated Time:** 25-30 mins | **Track:** Python

Welcome to **Level 10**! The culminating capstone challenge of the Python track. In this challenge, you will bring everything together using **Object-Oriented Programming (OOP)**: classes, encapsulation, data validation, and serialization.

---

## 📖 What You'll Learn & Why It Matters

Object-Oriented Programming models real-world concepts by bundling data (attributes) and behaviors (methods) together into **classes**.

### Key Python OOP Concepts:
1. **The `class` & `__init__` Constructor:**
   ```python
   class ContributorProfile:

       def __init__(self, username: str, name: str):
           self.username = username
           self.name = name
```
   - `self` refers to the specific instance of the class being created or modified.

2. **The Dangerous Mutable Default Argument Trap:**
   In Python, never use a mutable default like `languages: list = []` in function signatures! In Python, default lists are created once when the function is defined and shared across all instances.
   > [!IMPORTANT]
   > The standard Pythonic pattern is (using `from __future__ import annotations` for universal compatibility across Python versions):
   > ```python
   > languages: list[str] | None = None
   > # Then inside __init__:
   > self.languages = list(languages) if languages else []
   > ```

3. **Data Serialization (`to_dict`):**
   Real-world classes often provide a serialization method to convert internal instance state into a plain dictionary ready for JSON storage or API responses.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a class `ContributorProfile` that manages an open-source contributor's progress across the 10 levels.

---

## 📋 Requirements

1. **File Location:**  
   `challenges/python/level-10/<your-username>.py` *(e.g. `challenges/python/level-10/octocat.py`)*

2. **Class Interface:**
   ```python
   class ContributorProfile:

       def __init__(
           self,
           username: str,
           name: str,
           languages: list[str] | None = None,
           completed_levels: list[int] | None = None,
       ):
           pass

       def add_language(self, language: str) -> None:
           pass

       def complete_level(self, level: int) -> bool:
           pass

       def get_progress(self) -> float:
           pass

       def introduce(self) -> str:
           pass

       def to_dict(self) -> dict:
           pass
   ```

3. **Method Specifications:**
   - **`__init__`**: Sets `self.username`, `self.name`. Initializes `self.languages` as a list (avoiding mutable defaults). Initializes `self.completed_levels` as a sorted list of unique integers.
   - **`add_language(language: str) -> None`**: Appends `language` to `self.languages` if not already present.
   - **`complete_level(level: int) -> bool`**: If `level` is an integer between `1` and `10` and not already completed, appends it, sorts `self.completed_levels`, and returns `True`. Otherwise returns `False`.
   - **`get_progress() -> float`**: Calculates percentage of 10 levels completed: `round((len(self.completed_levels) / 10) * 100, 1)`.
   - **`introduce() -> str`**: Returns a presentation string matching:
     `"Hi! I'm <name> (@<username>). Progress: <progress>% (levels: <completed>). Languages: <languages>."`
     *(If empty: use `"none"` for completed levels and `"none yet"` for languages).*
   - **`to_dict() -> dict`**: Returns a dictionary with keys: `"username"`, `"name"`, `"languages"`, `"completed_levels"`, `"progress"`.

---

## 💡 Example

```python
"""Level 10: Object-Oriented Programming (Contributor Class).

Contributor: @octocat
"""

from __future__ import annotations


class ContributorProfile:
    """Manages an open-source contributor profile and tracks level completion."""

    def __init__(
        self,
        username: str,
        name: str,
        languages: list[str] | None = None,
        completed_levels: list[int] | None = None,
    ):
        self.username = username
        self.name = name
        self.languages = list(languages) if languages else []
        self.completed_levels = (
            sorted(set(completed_levels)) if completed_levels else []
        )

    def add_language(self, language: str) -> None:
        """Add a new language if not already in the list."""
        if language not in self.languages:
            self.languages.append(language)

    def complete_level(self, level: int) -> bool:
        """Mark a level (1 to 10) as completed."""
        if 1 <= level <= 10 and level not in self.completed_levels:
            self.completed_levels.append(level)
            self.completed_levels.sort()
            return True
        return False

    def get_progress(self) -> float:
        """Calculate the percentage of the 10 levels completed."""
        return round((len(self.completed_levels) / 10) * 100, 1)

    def introduce(self) -> str:
        """Return a formatted introduction string."""
        langs = ", ".join(self.languages) if self.languages else "none yet"
        completed = (
            ", ".join(map(str, self.completed_levels))
            if self.completed_levels
            else "none"
        )
        return (
            f"Hi! I'm {self.name} (@{self.username}). "
            f"Progress: {self.get_progress()}% (levels: {completed}). "
            f"Languages: {langs}."
        )

    def to_dict(self) -> dict:
        """Serialize profile to dictionary format."""
        return {
            "username": self.username,
            "name": self.name,
            "languages": self.languages,
            "completed_levels": self.completed_levels,
            "progress": self.get_progress(),
        }


if __name__ == "__main__":
    profile = ContributorProfile("octocat", "Mona Lisa", ["Python"])
    print(profile.introduce())

    for lvl in [1, 2, 3, 4, 5]:
        profile.complete_level(lvl)

    profile.add_language("JavaScript")
    print("\nAfter progress:")
    print(profile.introduce())
    print("\nSerialized profile:\n", profile.to_dict())
```

---

## 🧠 Pro-Tips & Common Gotchas

- 💡 **Deduplication:** Using `sorted(set(completed_levels))` in `__init__` removes duplicate entries while keeping the list sorted in ascending order.
- 💡 **Type Hints:** Modern Python 3.10+ allows `list[int] | None = None` without needing `from typing import Optional, Union`.

---

## 🧪 Testing Your Solution

Run your script in the terminal:

```bash
python challenges/python/level-10/<your-username>.py
# or:
python3 challenges/python/level-10/<your-username>.py
```

### Expected Terminal Output:
```text
Hi! I'm Mona Lisa (@octocat). Progress: 0.0% (levels: none). Languages: Python.

After progress:
Hi! I'm Mona Lisa (@octocat). Progress: 50.0% (levels: 1, 2, 3, 4, 5). Languages: Python, JavaScript.

Serialized profile:
 {'username': 'octocat', 'name': 'Mona Lisa', 'languages': ['Python', 'JavaScript'], 'completed_levels': [1, 2, 3, 4, 5], 'progress': 50.0}
```

---

## 🔍 Reference Solution

Check [`jan.py`](jan.py) in this directory for a complete working reference example.

---

## 🧭 Navigation

| ⬅️ [Previous: Level 9](../level-9/) | 🏠 [Python Track Overview](../README.md) | 🟨 [Try JavaScript Track](../../js/) | 🚀 [All Tracks](../../README.md) |
| :---: | :---: | :---: | :---: |

# 🔴 Level 10: Object-Oriented Programming (Contributor Class)

Welcome to Level 10! The final challenge of the Python track. In this challenge you will apply core Object-Oriented Programming (OOP) concepts in Python: classes, instance attributes, methods, data validation, and serialization.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory containing a class `ContributorProfile` that manages an open-source contributor's progress across the 10 levels.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-10/<your-username>.py` *(e.g. `octocat.py`)*

2. **Class Definition:**
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

3. **Behavior Specifications:**
   - `__init__`: Sets `username`, `name`. `languages` defaults to `[]` if not provided. `completed_levels` defaults to `[]` if not provided.
   - `add_language(language: str) -> None`: Adds a language to `self.languages` if not already present (avoid duplicates).
   - `complete_level(level: int) -> bool`:
     - If `level` is between `1` and `10` and not already in `self.completed_levels`, appends it, sorts the list, and returns `True`.
     - Otherwise returns `False`.
   - `get_progress() -> float`:
     - Calculates the percentage of the 10 levels completed: `(len(self.completed_levels) / 10) * 100`.
     - Rounded to 1 decimal place.
   - `introduce() -> str`:
     - Returns a formatted presentation string:
       `"Hi! I'm {name} (@{username}). Progress: {progress}% (levels: {completed}). Languages: {languages}."`
   - `to_dict() -> dict`:
     - Returns a dictionary with keys: `"username"`, `"name"`, `"languages"`, `"completed_levels"`, `"progress"`.

4. **Execution Block:**  
   Include an `if __name__ == "__main__":` block creating a profile, completing several levels, adding languages, and printing both `introduce()` and `to_dict()`.

---

## 💡 Example

```python
contributor = ContributorProfile("octocat", "Mona Lisa Octocat", ["Python"])
contributor.complete_level(1)
contributor.complete_level(2)
contributor.complete_level(3)
contributor.add_language("Markdown")

print(contributor.introduce())
print(contributor.to_dict())
```

---

## 🧪 Testing your solution

Run your script in the terminal:

```bash
python levels/python/level-10/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


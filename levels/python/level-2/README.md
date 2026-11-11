# 🟢 Level 2: Variables & String Formatting (f-strings)

Welcome to Level 2! In this challenge you will learn how to declare variables and use Python's formatted strings (f-strings) to combine text and variables cleanly.

---

## 🎯 Objective

Create a file named `<your-username>.py` in this directory where you define variables for your profile information and print a formatted summary card.

---

## 📋 Requirements

1. **File Location:**  
   `levels/python/level-2/<your-username>.py` *(e.g. `octocat.py`)*

2. **Variables to define:**
   - `username: str` - Your GitHub username (e.g. `"octocat"`).
   - `name: str` - Your full or display name (e.g. `"Mona Lisa Octocat"`).
   - `favorite_language: str` - Your favorite programming language (e.g. `"Python"`).
   - `level: int` - An integer representing your current level (`2`).

3. **Behavior:**
   - Use an **f-string** (`f"..."`) to format a sentence that combines all four variables.
   - Print the formatted message to the console.

---

## 💡 Example

```python
username = "octocat"
name = "Mona Lisa Octocat"
favorite_language = "Python"
level = 2

profile = (
    f"Contributor: {name} (@{username}) | Level: {level} | Favorite Language: {favorite_language}"
)

print(profile)
```

---

## 🧪 Testing your solution

Run your script in the terminal:

```bash
python levels/python/level-2/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

# 🟢 Level 2: Conditionals & Logic: Palindrome Checker

¡Bienvenido al Nivel 2! En este reto pondrás en práctica el manejo de condicionales, cadenas de texto y limpieza de caracteres implementando un comprobador de palíndromos.

Welcome to Level 2! In this challenge you will practice conditionals, string slicing/manipulation, and data cleaning by building a palindrome checker.

---

## 🎯 Objective / Objetivo

Create a file named `<your-username>.py` in this directory containing a function `is_palindrome(text)` that returns `True` if a given text is a palindrome, or `False` otherwise.

Crea un archivo llamado `<tu-nombre-de-usuario>.py` en este directorio con una función `is_palindrome(text)` que devuelva `True` si el texto dado es un palíndromo, o `False` en caso contrario.

> [!NOTE]
> A palindrome is a word, phrase, or sequence that reads the same backward as forward (e.g. "radar", "level", "A man a plan a canal Panama").

---

## 📋 Requirements / Requisitos

1. **File Location / Ubicación:**  
   `levels/python/level-2/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature / Firma de la función:**
   ```python
   def is_palindrome(text: str) -> bool:
       pass
   ```

3. **Behavior / Comportamiento:**
   - Must be **case-insensitive** (e.g. `"Radar"` should be `True`).
   - Must **ignore spaces and punctuation** (e.g. `"A man, a plan, a canal: Panama"` should be `True`).
   - Should return `False` for non-palindromes (e.g. `"python"` -> `False`).
   - An empty string `""` or single character `"a"` should be considered a valid palindrome (`True`).

4. **Execution Block / Bloque de ejecución:**  
   Include an `if __name__ == "__main__":` block testing several examples.

---

## 💡 Example / Ejemplo

```python
import re


def is_palindrome(text: str) -> bool:
    cleaned = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    return cleaned == cleaned[::-1]


if __name__ == "__main__":
    print(is_palindrome("radar"))  # True
    print(is_palindrome("python"))  # False
```

---

## 🧪 Testing your solution / Probar tu solución

Run your script in your terminal to verify that it executes without errors:

```bash
python levels/python/level-2/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


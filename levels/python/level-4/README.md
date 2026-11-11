# 🟡 Level 4: Text Analysis & Word Frequency

¡Bienvenido al Nivel 4! En este reto aplicarás estructuras avanzadas como diccionarios, conteos y expresiones regulares para construir un analizador de frecuencia de palabras.

Welcome to Level 4! In this challenge you will use dictionaries, word counting, and regular expressions to build a text analyzer and word frequency counter.

---

## 🎯 Objective / Objetivo

Create a file named `<your-username>.py` in this directory containing a function `analyze_text(text)` that analyzes a text string and returns a dictionary with word counts and statistics.

Crea un archivo llamado `<tu-nombre-de-usuario>.py` en este directorio con una función `analyze_text(text)` que analice una cadena de texto y devuelva un diccionario con recuentos y estadísticas de palabras.

---

## 📋 Requirements / Requisitos

1. **File Location / Ubicación:**  
   `levels/python/level-4/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature / Firma de la función:**
   ```python
   def analyze_text(text: str) -> dict:
       pass
   ```

3. **Return Format / Formato de retorno:**
   The function must return a dictionary with:
   - `"total_words"` *(int)*: Total word count in the text.
   - `"unique_words"` *(int)*: Number of unique words (case-insensitive).
   - `"word_frequencies"` *(dict[str, int])*: Dictionary with each word as key and its frequency as value.
   - `"most_common"` *(str | None)*: The single word that appears most often (or `None` if text has no words).

> [!NOTE]
> Words must be lowercased and stripped of punctuation (e.g. "Python," -> "python").

4. **Execution Block / Bloque de ejecución:**  
   Include an `if __name__ == "__main__":` block testing a paragraph of text.

---

## 💡 Example / Ejemplo

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

## 🧪 Testing your solution / Probar tu solución

Run your script in your terminal to verify that it executes without errors:

```bash
python levels/python/level-4/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

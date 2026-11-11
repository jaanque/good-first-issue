# 🟡 Level 3: Data Structures & Statistics

¡Bienvenido al Nivel 3! En este reto trabajarás con colecciones y estructuras de datos de Python (listas y diccionarios) para calcular estadísticas descriptivas sobre una lista de números.

Welcome to Level 3! In this challenge you will work with Python collections and data structures (lists and dictionaries) to calculate descriptive statistics for a list of numbers.

---

## 🎯 Objective / Objetivo

Create a file named `<your-username>.py` in this directory containing a function `calculate_stats(numbers)` that takes a list of numbers and returns a dictionary with summary statistics.

Crea un archivo llamado `<tu-nombre-de-usuario>.py` en este directorio con una función `calculate_stats(numbers)` que reciba una lista de números y devuelva un diccionario con estadísticas resumen.

---

## 📋 Requirements / Requisitos

1. **File Location / Ubicación:**  
   `levels/python/level-3/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature / Firma de la función:**
   ```python
   def calculate_stats(numbers: list[float | int]) -> dict:
       pass
   ```

3. **Return Format / Formato de retorno:**
   The function must return a dictionary with the following keys:
   - `"count"` *(int)*: Total count of items in the list.
   - `"sum"` *(float | int)*: Total sum of the numbers.
   - `"avg"` *(float)*: Arithmetic mean, rounded to 2 decimal places.
   - `"min"` *(float | int | None)*: Minimum value.
   - `"max"` *(float | int | None)*: Maximum value.

> [!NOTE]
> For an empty list `[]`, return:
> `{"count": 0, "sum": 0, "avg": 0.0, "min": None, "max": None}`

4. **Execution Block / Bloque de ejecución:**  
   Include an `if __name__ == "__main__":` block demonstrating the calculation with different inputs (including positive, negative, and empty lists).

---

## 💡 Example / Ejemplo

```python
numbers = [10, 20, 30, 40, 50]
stats = calculate_stats(numbers)
# Result:
# {'count': 5, 'sum': 150, 'avg': 30.0, 'min': 10, 'max': 50}
```

---

## 🧪 Testing your solution / Probar tu solución

Run your script in your terminal to verify that it executes without errors:

```bash
python levels/python/level-3/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.

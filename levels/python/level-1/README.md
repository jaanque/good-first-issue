# 🟢 Level 1: Hello World & Personalized Greeting

¡Bienvenido al Nivel 1! En este reto aprenderás a estructurar un archivo Python, definir una función con parámetros por defecto y devolver un saludo personalizado.

Welcome to Level 1! In this challenge you will learn how to structure a Python file, define a function with default arguments, and return a personalized greeting.

---

## 🎯 Objective / Objetivo

Create a file named `<your-username>.py` in this directory containing a function that returns a welcome greeting.

Crea un archivo llamado `<tu-nombre-de-usuario>.py` en este directorio con una función que devuelva un mensaje de bienvenida.

---

## 📋 Requirements / Requisitos

1. **File Location / Ubicación:**  
   `levels/python/level-1/<your-username>.py` *(e.g. `octocat.py`)*

2. **Function Signature / Firma de la función:**
   ```python
   def greet(name: str = "World") -> str:
       pass
   ```

3. **Behavior / Comportamiento:**
   - If called without arguments (e.g. `greet()`), it should return a greeting message using `"World"`.
   - If called with a name argument (e.g. `greet("Alice")`), it should include that name in the message.
   - Mention your GitHub username or a friendly welcome in the message.

4. **Execution Block / Bloque de ejecución:**  
   Include an `if __name__ == "__main__":` block that prints sample calls to your function.

---

## 💡 Example / Ejemplo

```python
def greet(name: str = "World") -> str:
    return f"Hello, {name}! Welcome to Good First Issue (Python - Level 1)."


if __name__ == "__main__":
    print(greet())
    print(greet("Alice"))
```

---

## 🧪 Testing your solution / Probar tu solución

Run your script in your terminal to verify that it executes without errors:

```bash
python levels/python/level-1/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


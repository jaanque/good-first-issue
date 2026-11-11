# 🔴 Level 5: Object-Oriented Programming (Developer Profile)

¡Bienvenido al Nivel 5! En este reto aplicarás los conceptos fundamentales de Programación Orientada a Objetos (POO) en Python: clases, métodos de instancia, atributos, encapsulamiento y representación de objetos.

Welcome to Level 5! In this challenge you will apply core Object-Oriented Programming (OOP) concepts in Python: classes, instance methods, attributes, and serialization.

---

## 🎯 Objective / Objetivo

Create a file named `<your-username>.py` in this directory containing a class `DeveloperProfile` that represents a software contributor and manages their profile data.

Crea un archivo llamado `<tu-nombre-de-usuario>.py` en este directorio con una clase `DeveloperProfile` que represente a un colaborador y gestione los datos de su perfil.

---

## 📋 Requirements / Requisitos

1. **File Location / Ubicación:**  
   `levels/python/level-5/<your-username>.py` *(e.g. `octocat.py`)*

2. **Class Definition / Definición de la clase:**
   ```python
   class DeveloperProfile:

       def __init__(
           self,
           username: str,
           name: str,
           languages: list[str] | None = None,
           level: int = 1,
       ):
           pass

       def add_language(self, language: str) -> None:
           pass

       def level_up(self) -> int:
           pass

       def introduce(self) -> str:
           pass

       def to_dict(self) -> dict:
           pass
```

3. **Behavior / Comportamiento:**
   - `__init__`: Initializes the instance. `languages` should default to an empty list `[]` if not provided.
   - `add_language(language)`: Appends `language` to the contributor's languages list (avoiding duplicate entries).
   - `level_up()`: Increments `self.level` by 1 and returns the new level.
   - `introduce()`: Returns a friendly presentation string including the contributor's name, username, level, and known languages.
   - `to_dict()`: Returns a dictionary containing all profile fields (`username`, `name`, `languages`, `level`).

4. **Execution Block / Bloque de ejecución:**  
   Include an `if __name__ == "__main__":` block creating an instance of your class, leveling up, adding languages, and printing the results.

---

## 💡 Example / Ejemplo

```python
dev = DeveloperProfile("octocat", "Mona Lisa Octocat", ["Python", "Markdown"])
print(dev.introduce())
dev.level_up()
dev.add_language("Git")
print(dev.to_dict())
```

---

## 🧪 Testing your solution / Probar tu solución

Run your script in your terminal to verify that it executes without errors:

```bash
python levels/python/level-5/<your-username>.py
```

> [!NOTE]
> Check [`jan.py`](jan.py) in this directory for a complete working reference example.


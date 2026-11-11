"""Level 1: Hello World & Personalized Greeting.

Contributor: @jaanque (Jan)
"""


def greet(name: str = "World") -> str:
    """Return a personalized greeting message."""
    return f"Hello, {name}! Welcome to Good First Issue (Python - Level 1) by @jaanque."


if __name__ == "__main__":
    print(greet())
    print(greet("Alice"))
    print(greet("fellow contributor"))


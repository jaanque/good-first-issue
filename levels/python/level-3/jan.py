"""Level 3: Functions & Return Values.

Contributor: @jaanque (Jan)
"""


def greet(name: str = "World") -> str:
    """Return a personalized greeting message."""
    return f"Hello, {name}! This is @jaanque welcoming you to Level 3."


if __name__ == "__main__":
    print(greet())
    print(greet("Alice"))
    print(greet("fellow developer"))

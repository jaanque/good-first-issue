"""Level 3: Functions & Return Values.

Contributor: @jaanque (Jan)
"""

from __future__ import annotations


def greet(name: str = "World") -> str:
    """Return a personalized greeting message."""
    return f"Hello, {name}! This is @jaanque welcoming you to Level 3."


if __name__ == "__main__":
    # Test default argument
    default_msg = greet()
    print(default_msg)
    assert default_msg == "Hello, World! This is @jaanque welcoming you to Level 3."

    # Test custom arguments
    alice_msg = greet("Alice")
    print(alice_msg)
    assert alice_msg == "Hello, Alice! This is @jaanque welcoming you to Level 3."

    dev_msg = greet("fellow developer")
    print(dev_msg)
    assert dev_msg == "Hello, fellow developer! This is @jaanque welcoming you to Level 3."

    print("✅ All tests passed successfully!")

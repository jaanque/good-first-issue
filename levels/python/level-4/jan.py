"""Level 4: Arithmetic Operations & Basic Calculator.

Contributor: @jaanque (Jan)
"""


def calculate(a: float, b: float, operation: str) -> float | str:
    """Perform a basic arithmetic operation between two numbers."""
    if operation == "+":
        return a + b
    elif operation == "-":
        return a - b
    elif operation == "*":
        return a * b
    elif operation == "/":
        if b == 0:
            return "Error: Division by zero"
        return a / b
    return "Error: Invalid operation"


if __name__ == "__main__":
    tests = [
        (10, 5, "+", 15),
        (20, 8, "-", 12),
        (6, 7, "*", 42),
        (15, 3, "/", 5.0),
        (10, 0, "/", "Error: Division by zero"),
        (4, 2, "%", "Error: Invalid operation"),
    ]

    for a, b, op, expected in tests:
        res = calculate(a, b, op)
        status = "✅ PASS" if res == expected else "❌ FAIL"
        print(f"{status} | {a} {op} {b} = {res}")

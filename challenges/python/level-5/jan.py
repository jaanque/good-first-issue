"""Level 5: Conditionals & Logic (FizzBuzz).

Contributor: @jaanque (Jan)
"""

from __future__ import annotations


def fizz_buzz(n: int) -> list[str]:
    """Return a list containing the FizzBuzz sequence from 1 to n."""
    sequence = []
    for i in range(1, n + 1):
        if i % 15 == 0:
            sequence.append("FizzBuzz")
        elif i % 3 == 0:
            sequence.append("Fizz")
        elif i % 5 == 0:
            sequence.append("Buzz")
        else:
            sequence.append(str(i))
    return sequence


if __name__ == "__main__":
    output = fizz_buzz(15)
    print("FizzBuzz sequence (1 to 15):")
    print(output)

    expected = [
        "1", "2", "Fizz", "4", "Buzz",
        "Fizz", "7", "8", "Fizz", "Buzz",
        "11", "Fizz", "13", "14", "FizzBuzz",
    ]
    assert output == expected, f"Expected {expected}, got {output}"
    assert fizz_buzz(0) == []
    assert fizz_buzz(3) == ["1", "2", "Fizz"]
    assert fizz_buzz(5) == ["1", "2", "Fizz", "4", "Buzz"]
    print("✅ All tests passed successfully!")

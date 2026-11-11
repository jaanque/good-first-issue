"""Level 5: Conditionals & Logic (FizzBuzz).

Contributor: @jaanque (Jan)
"""


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

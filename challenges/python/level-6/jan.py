"""Level 6: Lists & Loops (Filter & Transform).

Contributor: @jaanque (Jan)
"""

from __future__ import annotations


def process_numbers(numbers: list[int]) -> list[int]:
    """Filter positive even numbers and square them."""
    return [n**2 for n in numbers if n > 0 and n % 2 == 0]


if __name__ == "__main__":
    samples = [
        ([-4, 2, 0, 3, 4, 5, 6], [4, 16, 36]),
        ([-1, -2, -3], []),
        ([1, 3, 5, 7], []),
        ([2, 4, 8], [4, 16, 64]),
        ([], []),
    ]

    for nums, expected in samples:
        result = process_numbers(nums)
        assert result == expected, f"Expected {expected}, got {result}"
        print(f"✅ PASS | Input: {nums} -> Output: {result}")

    print("✅ All tests passed successfully!")

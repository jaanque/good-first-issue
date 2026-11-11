"""Level 7: String Manipulation & Palindrome Checker.

Contributor: @jaanque (Jan)
"""

from __future__ import annotations

import re


def is_palindrome(text: str) -> bool:
    """Check if the given string is a palindrome.

    Ignores non-alphanumeric characters and casing.
    """
    cleaned = re.sub(r"[^a-zA-Z0-9]", "", text).lower()
    return cleaned == cleaned[::-1]


if __name__ == "__main__":
    test_cases = [
        ("radar", True),
        ("A man, a plan, a canal: Panama", True),
        ("Was it a car or a cat I saw?", True),
        ("python", False),
        ("open source", False),
        ("", True),
        ("12321", True),
        ("12345", False),
    ]

    for sample, expected in test_cases:
        result = is_palindrome(sample)
        assert result == expected, f"For '{sample}', expected {expected}, got {result}"
        print(f"✅ PASS | '{sample}' -> {result}")

    print("✅ All tests passed successfully!")

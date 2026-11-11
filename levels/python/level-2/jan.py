"""Level 2: Conditionals & Logic: Palindrome Checker.

Contributor: @jaanque (Jan)
"""

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
    ]

    for sample, expected in test_cases:
        result = is_palindrome(sample)
        status = "✅ PASS" if result == expected else "❌ FAIL"
        print(f"{status} | '{sample}' -> {result}")


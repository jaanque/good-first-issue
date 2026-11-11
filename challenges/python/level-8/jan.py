"""Level 8: Dictionaries & Word Frequency Counter.

Contributor: @jaanque (Jan)
"""

from __future__ import annotations

import re
from collections import Counter


def analyze_text(text: str) -> dict:
    """Analyze text and return frequency and word count metrics."""
    words = re.findall(r"\b\w+\b", text.lower())
    if not words:
        return {
            "total_words": 0,
            "unique_words": 0,
            "word_frequencies": {},
            "most_common": None,
        }

    counts = Counter(words)
    most_common_word, _ = counts.most_common(1)[0]

    return {
        "total_words": len(words),
        "unique_words": len(counts),
        "word_frequencies": dict(counts),
        "most_common": most_common_word,
    }


if __name__ == "__main__":
    sample = "Python is great and Open Source is awesome. Python for everyone!"
    print("Sample text:\n", sample)
    analysis = analyze_text(sample)
    print("\nAnalysis:\n", analysis)

    assert analysis["total_words"] == 11
    assert analysis["unique_words"] == 9
    assert analysis["most_common"] in ("python", "is")
    assert analysis["word_frequencies"]["python"] == 2
    assert analysis["word_frequencies"]["is"] == 2

    # Test empty text edge case
    empty_analysis = analyze_text("")
    assert empty_analysis == {
        "total_words": 0,
        "unique_words": 0,
        "word_frequencies": {},
        "most_common": None,
    }

    # Test text with only punctuation
    punct_analysis = analyze_text("!@#$%^&*()")
    assert punct_analysis == {
        "total_words": 0,
        "unique_words": 0,
        "word_frequencies": {},
        "most_common": None,
    }

    print("✅ All tests passed successfully!")

"""Level 4: Text Analysis & Word Frequency.

Contributor: @jaanque (Jan)
"""

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
    print("\nAnalysis:\n", analyze_text(sample))


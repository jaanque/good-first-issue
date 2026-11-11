"""Level 9: Data Aggregation & Score Analysis.

Contributor: @jaanque (Jan)
"""

from __future__ import annotations


def analyze_scores(records: list[dict]) -> dict:
    """Analyze participant score records and calculate summary metrics."""
    if not records:
        return {
            "total": 0,
            "average": 0.0,
            "highest": None,
            "lowest": None,
            "passed": [],
        }

    total = len(records)
    avg = round(sum(r["score"] for r in records) / total, 2)
    highest = max(records, key=lambda r: r["score"])
    lowest = min(records, key=lambda r: r["score"])
    passed = sorted(r["name"] for r in records if r["score"] >= 60)

    return {
        "total": total,
        "average": avg,
        "highest": highest,
        "lowest": lowest,
        "passed": passed,
    }


if __name__ == "__main__":
    sample_records = [
        {"name": "Alice", "score": 85},
        {"name": "Bob", "score": 52},
        {"name": "Charlie", "score": 92},
        {"name": "Diana", "score": 78},
        {"name": "Evan", "score": 45},
    ]

    print("Sample records:\n", sample_records)
    analysis = analyze_scores(sample_records)
    print("\nScore Analysis:\n", analysis)

    assert analysis["total"] == 5
    assert analysis["average"] == 70.4
    assert analysis["highest"] == {"name": "Charlie", "score": 92}
    assert analysis["lowest"] == {"name": "Evan", "score": 45}
    assert analysis["passed"] == ["Alice", "Charlie", "Diana"]

    # Test empty list edge case
    empty_res = analyze_scores([])
    assert empty_res == {
        "total": 0,
        "average": 0.0,
        "highest": None,
        "lowest": None,
        "passed": [],
    }

    print("✅ All tests passed successfully!")

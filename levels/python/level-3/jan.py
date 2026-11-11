"""Level 3: Data Structures & Statistics.

Contributor: @jaanque (Jan)
"""


def calculate_stats(numbers: list[float | int]) -> dict:
    """Calculate summary statistics for a list of numbers."""
    if not numbers:
        return {
            "count": 0,
            "sum": 0,
            "avg": 0.0,
            "min": None,
            "max": None,
        }

    count = len(numbers)
    total = sum(numbers)
    avg = round(total / count, 2)
    minimum = min(numbers)
    maximum = max(numbers)

    return {
        "count": count,
        "sum": total,
        "avg": avg,
        "min": minimum,
        "max": maximum,
    }


if __name__ == "__main__":
    sample = [12, 45, 7, 23, 56, 89, 34]
    print("Sample:", sample)
    print("Stats: ", calculate_stats(sample))

    empty_sample = []
    print("\nEmpty sample:", empty_sample)
    print("Stats:       ", calculate_stats(empty_sample))


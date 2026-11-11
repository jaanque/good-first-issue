"""Level 10: Object-Oriented Programming (Contributor Class).

Contributor: @jaanque (Jan)
"""


class ContributorProfile:
    """Manages an open-source contributor profile and tracks level completion."""

    def __init__(
        self,
        username: str,
        name: str,
        languages: list[str] | None = None,
        completed_levels: list[int] | None = None,
    ):
        self.username = username
        self.name = name
        self.languages = list(languages) if languages else []
        self.completed_levels = (
            sorted(set(completed_levels)) if completed_levels else []
        )

    def add_language(self, language: str) -> None:
        """Add a new language if not already in the list."""
        if language not in self.languages:
            self.languages.append(language)

    def complete_level(self, level: int) -> bool:
        """Mark a level (1 to 10) as completed."""
        if 1 <= level <= 10 and level not in self.completed_levels:
            self.completed_levels.append(level)
            self.completed_levels.sort()
            return True
        return False

    def get_progress(self) -> float:
        """Calculate the percentage of the 10 levels completed."""
        return round((len(self.completed_levels) / 10) * 100, 1)

    def introduce(self) -> str:
        """Return a formatted introduction string."""
        langs = ", ".join(self.languages) if self.languages else "none yet"
        completed = (
            ", ".join(map(str, self.completed_levels))
            if self.completed_levels
            else "none"
        )
        return (
            f"Hi! I'm {self.name} (@{self.username}). "
            f"Progress: {self.get_progress()}% (levels: {completed}). "
            f"Languages: {langs}."
        )

    def to_dict(self) -> dict:
        """Serialize profile to dictionary format."""
        return {
            "username": self.username,
            "name": self.name,
            "languages": self.languages,
            "completed_levels": self.completed_levels,
            "progress": self.get_progress(),
        }


if __name__ == "__main__":
    profile = ContributorProfile("jaanque", "Jan", ["Python", "JavaScript"])
    print(profile.introduce())

    for lvl in [1, 2, 3, 4, 5]:
        profile.complete_level(lvl)

    profile.add_language("Rust")
    print("\nAfter progress:")
    print(profile.introduce())
    print("\nSerialized profile:\n", profile.to_dict())


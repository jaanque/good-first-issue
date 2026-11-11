"""Level 5: Object-Oriented Programming (Developer Profile Class).

Contributor: @jaanque (Jan)
"""


class DeveloperProfile:
    """Represents an open-source contributor and their progression."""

    def __init__(
        self,
        username: str,
        name: str,
        languages: list[str] | None = None,
        level: int = 1,
    ):
        self.username = username
        self.name = name
        self.languages = list(languages) if languages else []
        self.level = level

    def add_language(self, language: str) -> None:
        """Add a new language if not already present."""
        if language not in self.languages:
            self.languages.append(language)

    def level_up(self) -> int:
        """Increase developer level by 1 and return the new level."""
        self.level += 1
        return self.level

    def introduce(self) -> str:
        """Return a formatted introduction string."""
        langs = ", ".join(self.languages) if self.languages else "none yet"
        return (
            f"Hi! I'm {self.name} (@{self.username}). "
            f"Level {self.level} contributor. Languages: {langs}."
        )

    def to_dict(self) -> dict:
        """Serialize profile to dictionary format."""
        return {
            "username": self.username,
            "name": self.name,
            "languages": self.languages,
            "level": self.level,
        }


if __name__ == "__main__":
    dev = DeveloperProfile("jaanque", "Jan", ["Python", "JavaScript"])
    print(dev.introduce())

    new_lvl = dev.level_up()
    print(f"Level up! Current level: {new_lvl}")

    dev.add_language("Rust")
    print(dev.introduce())
    print("Serialized profile:", dev.to_dict())


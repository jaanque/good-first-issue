"""Level 2: Variables & String Formatting (f-strings).

Contributor: @jaanque (Jan)
"""

username = "jaanque"
name = "Jan"
favorite_language = "Python"
level = 2

profile = (
    f"Contributor: {name} (@{username}) | Level: {level} | Favorite Language: {favorite_language}"
)

print(profile)

if __name__ == "__main__":
    assert username == "jaanque"
    assert name == "Jan"
    assert favorite_language == "Python"
    assert level == 2
    assert "Contributor: Jan (@jaanque)" in profile
    print("✅ All assertions passed successfully!")

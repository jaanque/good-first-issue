# Contributing to Good First Issue

Thank you for your interest in contributing to **Good First Issue**! 💖

This repository is designed specifically to help beginners make their very first Open Source contribution in a welcoming, supportive, and safe environment.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Ways to Contribute](#-ways-to-contribute)
- [Step-by-Step Contribution Workflow](#-step-by-step-contribution-workflow)
- [Important Rules & Branch Policy](#️-important-rules--branch-policy)
- [Contributor Card Specifications](#-contributor-card-specifications)
- [Coding Challenges](#-coding-challenges)
- [Need Help?](#-need-help)

---

## 🤝 Code of Conduct

We are committed to providing a friendly and inclusive experience for everyone. By contributing to this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🌟 Ways to Contribute

There are several ways you can contribute to this project:

1. **Add Your Contributor Card:** Create a JSON card with your GitHub username and profile details to appear on the [Contributors Showcase](https://jaanque.github.io/good-first-issue/).
2. **Solve Coding Challenges:** Practice real code concepts across progressive levels in Python and JavaScript inside [`challenges/`](challenges/).
3. **Improve Documentation or Fix Issues:** Help improve tutorials, fix typos, or suggest enhancements.

---

## 🚀 Step-by-Step Contribution Workflow

For an in-depth visual tutorial with screenshots, check out our **[Step-by-Step Tutorial (README.md)](README.md)**.

### 1. Fork the Repository
Click the **Fork** button at the top-right of the repository page to create a personal copy in your GitHub account.

### 2. Clone Your Fork
Open your terminal and clone your fork to your local machine:
```bash
git clone https://github.com/<your-username>/good-first-issue.git
cd good-first-issue
```

### 3. Create a New Branch
Always create a new branch from `main` before making changes:
```bash
git switch -c add-<your-username>-card
# or on older Git versions:
# git checkout -b add-<your-username>-card
```

### 4. Make Your Changes
- If adding a contributor card: create `assets/cards/<your-username>.json`.
- If solving a challenge: create `challenges/<track>/level-X/<your-username>.<ext>`.

### 5. Verify Your Work
- Ensure your JSON file is valid with no missing quotes or trailing commas.
- If writing code for challenges, run your script locally to ensure it executes without errors.

### 6. Commit and Push
```bash
git add .
git commit -m "feat: add <your-username> contributor card"
git push -u origin add-<your-username>-card
```

### 7. Open a Pull Request
Go to your fork on GitHub and click **"Compare & pull request"**.

> [!IMPORTANT]
> - **Base branch:** Always set the base repository branch to `main`.
> - **Head branch:** Select your fork's working branch.

---

## 🛡️ Important Rules & Branch Policy

> [!IMPORTANT]
> **Branch Policy:**
> - All Pull Requests must target the **`main`** branch.
> - The **`dev`** branch is reserved for internal repository maintenance and **must not be modified directly** or targeted in Pull Requests.

Please keep these key rules in mind:
- **One file per contributor:** Only add your own file (`<your-username>.json` or `<your-username>.<ext>`).
- **Never edit others' work:** Do not modify, rename, or delete existing solutions or contributor cards.
- **Pure & self-contained:** Solutions should not introduce external dependencies or modified project configs.

---

## 🪪 Contributor Card Specifications

Your card file must be saved as `assets/cards/<your-username>.json`:

```json
{
  "name": "Your Name",
  "img": "https://github.com/<your-username>.png",
  "github": "https://github.com/<your-username>"
}
```

### Checklist for Cards:
- [x] File name matches your exact GitHub username in lowercase: `<your-username>.json`.
- [x] Valid JSON syntax (double quotes for keys and strings, no trailing commas).
- [x] Placed in the `assets/cards/` directory.

---

## 🎯 Coding Challenges

Ready for the next step? Explore our progressive coding tracks:

👉 **[Explore Coding Challenges (`challenges/`)](challenges/)**

### Active Tracks:
| Track | Difficulty | Key Concepts | Path |
| :--- | :---: | :--- | :---: |
| 🐍 **Python** | Levels 1 - 10 | `print()`, f-strings, functions, list comprehensions, regex, OOP | [`challenges/python/`](challenges/python/) |
| 🟨 **JavaScript** | Levels 1 - 10 | `console.log()`, ES6+, array methods, hash maps, classes | [`challenges/js/`](challenges/js/) |
| 🔷 **TypeScript** | Levels 1 - 10 | Types, interfaces, unions, generics, typed arrays, OOP | [`challenges/ts/`](challenges/ts/) |

### How to Complete a Challenge:
1. Navigate to the desired level (e.g. `challenges/python/level-1/`, `challenges/js/level-1/`, or `challenges/ts/level-1/`).
2. Read the level's `README.md` for requirements, theory, and examples.
3. Create your solution file named `<your-username>.<ext>` (e.g. `octocat.py`, `octocat.js`, or `octocat.ts`).
4. Test locally using Python or Node.js.
5. Open a Pull Request targeting `main`!

---

## 💡 Need Help?

If you encounter any issues, have questions, or get stuck:
- Check out the **[FAQ page](https://jaanque.github.io/good-first-issue/assets/pages/faq.html)**.
- Read through the **[Step-by-step Tutorial (README.md)](README.md)**.
- Open a discussion or issue on GitHub and the community will gladly help!

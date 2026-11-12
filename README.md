<div align="center">

<img width="1016" height="119" alt="image" src="https://github.com/user-attachments/assets/ca710c23-f696-47b4-b064-ac06aa2a8182" />


### We don't care if you break something. We aren't born knowing everything; just try.

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Repo stars](https://img.shields.io/github/stars/jaanque/good-first-issue)](https://github.com/jaanque/good-first-issue/stargazers)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fjaanque.github.io%2Fgood-first-issue%2F)](https://jaanque.github.io/good-first-issue/)
[![GitHub last commit](https://img.shields.io/github/last-commit/jaanque/good-first-issue)](https://github.com/jaanque/good-first-issue/commits/main)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)
![GitHub Closed Pull Requests](https://img.shields.io/github/issues-pr-closed/jaanque/good-first-issue?style=flat&color=black)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fjaanque%2Fgood-first-issue&label=visitors&countColor=%230c7ebe&style=flat&labelStyle=none)](https://github.com/jaanque/good-first-issue)

<br/>

##

<details>
  <summary><b>📑 Table of Contents (Click to expand)</b></summary>
  <br/>

- [🛠️ Prerequisites & Tools](#prerequisites--tools)
- [1. 🍴 Fork the Repository](#1--fork-the-repository)
- [2. 📥 Clone the Repository](#2--clone-the-repository)
- [3. 🌿 Create a New Branch](#3--create-a-new-branch)
- [4. 💻 Open in Code Editor](#4--open-the-project-in-your-code-editor)
- [5. 📇 Add Your Contributor Card](#5--add-your-contributor-card)
- [6. 💾 Commit and Push Your Changes](#6--commit-and-push-your-changes)
- [7. 🚀 Create the Pull Request](#7--create-the-pull-request)
- [🎯 Level Up Your Coding Skills!](#level-up-your-coding-skills)
- [👥 Contributors](#contributors)

</details>

</div>

---

## 🛠️ Prerequisites & Tools

Before getting started, make sure you have these basic tools ready:

| Tool               |                                                               Icon                                                               | Purpose                                             | Link                                               |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------- | :------------------------------------------------- |
| **GitHub Account** | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="26" height="26" alt="GitHub" />  | Hosts code and tracks contributions                 | [Sign up](https://github.com/signup)               |
| **Git**            |      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="26" height="26" alt="Git" />      | Version control software to manage code             | [Download](https://git-scm.com/downloads)          |
| **VS Code**        | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="26" height="26" alt="VS Code" /> | Recommended code editor _(or your favorite editor)_ | [Download](https://code.visualstudio.com/download) |

---

## 1. 🍴 Fork the Repository

A **fork** is your personal copy of this repository under your GitHub account.

1. Click the **Fork** button at the top-right corner of this page:

   <p align="center">
     <img src="assets/src/image.png" alt="Fork button" width="400" />
   </p>

2. Keep the default settings and click **Create fork**.
3. You will be redirected to your fork at:
   ```text
   https://github.com/<your-username>/good-first-issue
   ```

---

## 2. 📥 Clone the Repository

Download your forked repository to your computer so you can edit the files locally.

1. On **your forked repository page**, click the green **`<> Code`** button.
2. Under the **HTTPS** tab, copy your repository URL:

   <p align="center">
     <img src="assets/src/image2.png" alt="Clone URL" width="360" />
   </p>

3. Open your terminal and run:

   ```bash
   git clone https://github.com/<your-username>/good-first-issue.git
   ```

4. Navigate into the project folder:
   ```bash
   cd good-first-issue
   ```

---

## 3. 🌿 Create a New Branch

Always create a new branch before making edits to keep your work organized and isolated from `main`.

1. In your terminal (inside the `good-first-issue` folder), run:

   ```bash
   git switch -c <your-branch-name>
   ```

   _(e.g. `git switch -c add-card`)_

2. Git will confirm that you switched to your new branch:

   <p align="center">
     <img src="assets/src/image3.png" alt="Create new branch" width="520" />
   </p>

> [!NOTE]
> On older versions of Git, you can also use `git checkout -b <your-branch-name>`.

---

## 4. 💻 Open the Project in Your Code Editor

Open the `good-first-issue` folder in **Visual Studio Code** (or your favorite editor):

```bash
code .
```

_Or open VS Code, go to **File** > **Open Folder...**, and select `good-first-issue`._

<p align="center">
  <img src="assets/src/image4.png" alt="Project open in VS Code" width="300" />
</p>

---

## 5. 📇 Add Your Contributor Card

Create your contributor card inside the `assets/cards/` directory named with your GitHub username:

📄 **`assets/cards/<your-username>.json`**

### File Structure

```json
{
  "name": "<your-username>",
  "img": "<your-avatar-url>",
  "github": "https://github.com/<your-username>"
}
```

> [!TIP]
> **Avatar URL:** You can use `https://github.com/<your-username>.png` directly as your `"img"` URL!

### Example (`assets/cards/octocat.json`)

```json
{
  "name": "octocat",
  "img": "https://github.com/octocat.png",
  "github": "https://github.com/octocat"
}
```

---

## 6. 💾 Commit and Push Your Changes

Save your changes locally and upload your branch to GitHub:

```bash
git add assets/cards/<your-username>.json
git commit -m "feat: add <your-username> card"
git push origin <your-branch-name>
```

> [!NOTE]
> If prompted on the first push, run: `git push -u origin <your-branch-name>`.

---

## 7. 🚀 Create the Pull Request

1. Go to your fork page on GitHub (or visit the main repository: [jaanque/good-first-issue](https://github.com/jaanque/good-first-issue)).
2. Click **"Contribute"** > **"Open pull request"** (or click the green **"Compare & pull request"** button):

   <p align="center">
     <img src="assets/src/image5.png" alt="Open pull request banner" width="450" />
   </p>

3. Verify:
   - **Base repository:** `jaanque/good-first-issue` (branch `main`)
   - **Head repository:** your fork (branch `your-branch-name`)
4. Add a title (e.g. `feat: add <your-username> card`) and click **Create pull request**!

> [!TIP]
> Once reviewed and merged, your card will automatically go live on the [Contributors Showcase](https://jaanque.github.io/good-first-issue/)!

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/jaanque">
          <img src="https://wsrv.nl/?url=github.com/jaanque.png&circle=1" width="100px" height="100px" alt="Jan"/><br />
          <sub><b>Jan</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/BrochDev">
          <img src="https://wsrv.nl/?url=github.com/BrochDev.png&circle=1" width="100px" height="100px" alt="BrochDev"/><br />
          <sub><b>BrochDev</b></sub>
        </a>
      </td>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/sabirhusseinbalal">
          <img src="https://wsrv.nl/?url=avatars.githubusercontent.com/u/246732079&circle=1" width="100px" height="100px" alt="Sabir Hussain Balal"/><br />
          <sub><b>Sabir Hussain Balal</b></sub>
        </a>
      </td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

---

<div align="center">

## 🎉 Congratulations!

You've completed your first Open Source contribution!

<sub>Made with 💖 for beginners everywhere</sub>

</div>

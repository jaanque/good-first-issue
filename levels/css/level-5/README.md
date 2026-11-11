# 🟡 Level 5: CSS Variables (Custom Properties)

Welcome to Level 5! Implement scalable and maintainable stylesheets using CSS custom properties (`--variables`) declared in the `:root` scope.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-5/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Declare a `:root` block defining at least 5 custom properties:
  - `--color-primary`
  - `--color-background`
  - `--color-surface`
  - `--color-text`
  - `--radius-md`
- Use `var(--...)` throughout your selectors.

---

## 💡 Example

```css
:root {
  --color-primary: #3b82f6;
  --color-bg: #f8fafc;
  --radius: 8px;
}

body {
  background-color: var(--color-bg);
}
```

---

## 🧪 Testing your solution

Link your CSS file to an HTML document to preview your styles in a browser:

```html
<link rel="stylesheet" href="<your-username>.css">
```

> [!NOTE]
> Check [`jan.css`](jan.css) in this directory for a complete working reference example.

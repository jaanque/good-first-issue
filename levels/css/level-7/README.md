# 🟡 Level 7: CSS Grid Layout

Welcome to Level 7! Harness the power of two-dimensional layouts with CSS Grid. Create an auto-responsive card grid without needing media queries.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-7/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Container with `display: grid`.
- Use `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` for an intrinsic responsive grid.
- Specify a clean `gap` between rows and columns.
- Ensure cards have consistent height and alignment.

---

## 💡 Example

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
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

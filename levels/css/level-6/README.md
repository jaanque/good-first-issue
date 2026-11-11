# 🟡 Level 6: Flexbox Navigation & Alignment

Welcome to Level 6! Master one-dimensional layouts with Flexbox. Build a responsive navigation bar and a centered container.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-6/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Style a `.navbar` using `display: flex`, `justify-content: space-between`, and `align-items: center`.
- Style a horizontal nav list (`.nav-links`) with `display: flex`, `list-style: none`, and `gap`.
- Center content horizontally and vertically inside a `.hero-section` using Flexbox.

---

## 💡 Example

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
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

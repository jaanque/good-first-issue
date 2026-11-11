# 🔴 Level 10: Glassmorphism & Dark Mode System

Welcome to Level 10! The final challenge of the CSS track. Combine modern UI trends like glassmorphism (backdrop-filter) and automatic dark mode support using `prefers-color-scheme`.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-10/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Glassmorphic card styling using `backdrop-filter: blur(...)`, semi-transparent background, and translucent border.
- Support both Light and Dark themes automatically using `@media (prefers-color-scheme: dark)` with custom properties.
- Subtle layered box shadows for elevation.

---

## 💡 Example

```css
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
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

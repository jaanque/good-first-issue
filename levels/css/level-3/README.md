# 🟢 Level 3: The Box Model (Padding, Margin, Border)

Welcome to Level 3! Master the CSS Box Model by setting box-sizing, padding, borders, margins, and smooth rounded corners.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-3/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Set `* { box-sizing: border-box; }` to ensure predictable box calculations.
- Style a `.card` container with:
  - Specific `width` or `max-width`.
  - `padding` to add internal breathing room.
  - `margin: 2rem auto;` to center the card horizontally.
  - A subtle `border` and rounded corners (`border-radius`).

---

## 💡 Example

```css
* {
  box-sizing: border-box;
}

.card {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
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

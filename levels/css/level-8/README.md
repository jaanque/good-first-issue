# 🟡 Level 8: Responsive Design & Media Queries

Welcome to Level 8! Build mobile-friendly designs using media queries (`@media`) that adapt layout and typography across screen sizes.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-8/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Base styles designed mobile-first or desktop-first.
- A media query for tablets/mobile (e.g. `@media (max-width: 768px)`).
- Inside the query:
  - Stack navigation items vertically (`flex-direction: column`).
  - Adjust heading font-sizes for smaller screens.
  - Decrease padding on containers.

---

## 💡 Example

```css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  h1 {
    font-size: 1.75rem;
  }
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

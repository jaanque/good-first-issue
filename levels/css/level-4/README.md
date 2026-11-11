# 🟢 Level 4: Interactive Buttons & Pseudo-classes

Welcome to Level 4! Create engaging user interactions by styling button components with `:hover`, `:active`, `:focus-visible`, and smooth transitions.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-4/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Style a `.btn` component with display, padding, border-radius, background, and `cursor: pointer`.
- Add a smooth `transition` for background-color, transform, and box-shadow.
- Style the `.btn:hover` state (e.g. subtle lift with `transform: translateY(-2px)`).
- Style the `.btn:active` state and focus outline with `:focus-visible`.

---

## 💡 Example

```css
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  transform: translateY(-2px);
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

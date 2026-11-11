# 🔴 Level 9: Transitions & Keyframe Animations

Welcome to Level 9! Bring your web pages to life using CSS animations with `@keyframes`, transform effects, and timing functions.

---

## 🎯 Objective

Create a file named `<your-username>.css` in this directory following the styling requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/css/level-9/<your-username>.css` *(e.g. `octocat.css`)*

2. **Specifications:**
- Define a custom animation using `@keyframes` (e.g. `pulse`, `fadeIn`, or `float`).
- Apply the animation to an element with `animation-name`, `animation-duration`, `animation-timing-function`, and `animation-iteration-count: infinite` (or forwards).
- Include transform properties (`scale`, `translateY`, or `rotate`).

---

## 💡 Example

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating-badge {
  animation: float 3s ease-in-out infinite;
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

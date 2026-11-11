# 🟡 Level 8: Forms & Interactive Inputs

Welcome to Level 8! Practice creating web forms with accessible labels, input validation, dropdowns, and text areas.

---

## 🎯 Objective

Create a file named `<your-username>.html` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/html/level-8/<your-username>.html` *(e.g. `octocat.html`)*

2. **Specifications:**
- A `<form action="#" method="POST">`.
- Text input (`type="text"`) and email input (`type="email"`) with required validation.
- Number input (`type="number"`) with `min` and `max`.
- Dropdown selection (`<select>` with multiple `<option>` elements).
- A multiline `<textarea>`.
- Every input must be paired with an accessible `<label for="...">`.
- A submit button (`<button type="submit">Submit</button>`).

---

## 💡 Example

```html
<form action="#" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Send</button>
</form>
```

---

## 🧪 Testing your solution

Open your file in any web browser to verify its visual display:

- **Windows:** Double-click `levels/html/level-8/<your-username>.html` or right-click > Open with > Chrome/Edge/Firefox.
- **Mac:** `open levels/html/level-8/<your-username>.html`
- **Linux:** `xdg-open levels/html/level-8/<your-username>.html`

> [!NOTE]
> Check [`jan.html`](jan.html) in this directory for a complete working reference example.

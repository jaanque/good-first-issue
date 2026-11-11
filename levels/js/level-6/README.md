# 🟡 Level 6: Array Methods (filter & map)

Welcome to Level 6! Master functional array methods like `.filter()` and `.map()` by processing a list of numbers.

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-6/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Function `processNumbers(numbers)`.
- Filter to keep **only positive even numbers** (`n > 0 && n % 2 === 0`).
- Square each matching number (`n ** 2`).
- Return the resulting array.

---

## 💡 Example

```javascript
function processNumbers(numbers) {
  return numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(n => n ** 2);
}

console.log(processNumbers([-4, 2, 0, 3, 4, 5, 6])); // [4, 16, 36]
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-6/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

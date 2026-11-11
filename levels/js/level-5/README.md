# 🟡 Level 5: Conditionals & Logic (FizzBuzz)

Welcome to Level 5! Implement the classic FizzBuzz puzzle using loops and conditionals (`%`).

---

## 🎯 Objective

Create a file named `<your-username>.js` in this directory following the requirements below.

---

## 📋 Requirements

1. **File Location:**  
   `levels/js/level-5/<your-username>.js` *(e.g. `octocat.js`)*

2. **Specifications:**
- Function `fizzBuzz(n)` returning an array of strings from 1 to `n`.
- Multiples of both 3 and 5: `"FizzBuzz"`.
- Multiples of 3: `"Fizz"`.
- Multiples of 5: `"Buzz"`.
- Other numbers: string representation of the number (e.g. `"1"`, `"2"`).

---

## 💡 Example

```javascript
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
}

console.log(fizzBuzz(15));
```

---

## 🧪 Testing your solution

Run your script in the terminal using Node.js:

```bash
node levels/js/level-5/<your-username>.js
```

> [!NOTE]
> Check [`jan.js`](jan.js) in this directory for a complete working reference example.

// Level 4: Basic Arithmetic Calculator
// Contributor: @jaanque (Jan)

function calculate(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Error: Division by zero" : a / b;
    default:
      return "Error: Invalid operation";
  }
}

console.log("10 + 5 =", calculate(10, 5, "+"));
console.log("20 - 8 =", calculate(20, 8, "-"));
console.log("6 * 7  =", calculate(6, 7, "*"));
console.log("15 / 3 =", calculate(15, 3, "/"));
console.log("10 / 0 =", calculate(10, 0, "/"));
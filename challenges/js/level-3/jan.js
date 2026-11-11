// Level 3: Functions & Default Parameters
// Contributor: @jaanque (Jan)

function greet(name = "World") {
  return `Hello, ${name}! This is @jaanque welcoming you to JS Level 3.`;
}

console.log(greet());
console.log(greet("Alice"));
console.log(greet("fellow developer"));
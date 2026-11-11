// Level 6: Array Methods (filter & map)
// Contributor: @jaanque (Jan)

function processNumbers(numbers) {
  return numbers
    .filter(n => n > 0 && n % 2 === 0)
    .map(n => n ** 2);
}

const sample = [-4, 2, 0, 3, 4, 5, 6];
console.log("Original:", sample);
console.log("Processed:", processNumbers(sample));
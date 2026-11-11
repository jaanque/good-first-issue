// Level 7: String Manipulation & Palindrome Checker
// Contributor: @jaanque (Jan)

function isPalindrome(text) {
  const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

const tests = [
  "radar",
  "A man, a plan, a canal: Panama",
  "Was it a car or a cat I saw?",
  "javascript",
  "open source",
];

tests.forEach(test => {
  console.log(`'${test}' -> is palindrome: ${isPalindrome(test)}`);
});
// Write a JavaScript function to validate whether a given value is
// a number or not.

function isNumber(value) {
return typeof value === 'number' && !isNaN(value);
}
// Example usage:
console.log(isNumber(5)); // true
console.log(isNumber("hello")); // false
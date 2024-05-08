// Write a JavaScript function to validate whether a given value is
// RegExp or not.

function isRegExp(value) {
return Object.prototype.toString.call(value) === '[object RegExp]';
}
// Example usage:
console.log(isRegExp(/test/)); // true
console.log(isRegExp("hello")); // false
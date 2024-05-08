// Write a JavaScript function that takes a string with both
// lowercase and upper case letters as a parameter. It converts upper
// case letters to lower case, and lower case letters to upper case.
function swapCase(str) {
var swapped = "";
for (var i = 0; i < str.length; i++) {
var char = str[i];
if (char === char.toUpperCase()) {
swapped += char.toLowerCase();
} else {
swapped += char.toUpperCase();
}
}
return swapped;
}
// Example usage:
var inputString = "Hello World";
var swappedString = swapCase(inputString);
console.log("Original string:", inputString);
console.log("Swapped string:", swappedString);
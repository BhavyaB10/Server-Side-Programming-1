/*Write a JavaScript program to find the first index of a given element in an
array using the linear search algorithm.*/

function linearSearch(arr, element) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] === element) {
return i;
}
}
return -1;
}
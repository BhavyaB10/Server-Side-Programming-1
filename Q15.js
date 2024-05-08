// Write a JavaScript program to create a clock.
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"
function displayTime() {
var date = new Date();
var hours = formatTime(date.getHours());
var minutes = formatTime(date.getMinutes());
var seconds = formatTime(date.getSeconds());
console.log(hours + ":" + minutes + ":" + seconds);
}
function formatTime(time) {
return time < 10 ? "0" + time : time;
}
setInterval(displayTime, 1000);

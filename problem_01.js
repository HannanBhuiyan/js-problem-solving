// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let weekday  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date();
let day = weekday[d.getDay()];
console.log(`Today is : ${day}.`)

let hour = d.getHours()
let minute = d.getMinutes()
let second = d.getSeconds()

if(hour > 12){
     hour = hour + ' PM';
}
else {
     hour = hour + ' AM';
}
console.log(`Current Time : ${hour} : ${minute} : ${second}`)
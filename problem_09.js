// 9. Write a JavaScript program to calculate days left until next Christmas

// chrismas days

// Monday, December 25, 2023

let today = new Date()
let cmas = new Date(today.getFullYear(), 11, 25)
let one_day = 1000*60*60*24

let day_left = Math.ceil( (cmas.getTime() - today.getTime()) / one_day )

console.log(cmas.getTime() - today.getTime())
console.log(day_left)
 
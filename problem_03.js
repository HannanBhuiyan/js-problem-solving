// 3. Write a JavaScript program to get the current date. 
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let currnet_date = new Date()

let dd = currnet_date.getDate()
let mm = currnet_date.getMonth()
let yyy = currnet_date.getFullYear()

if(dd < 10) {
     dd = "0" + dd
}
if(mm < 10) {
     mm = "0" + mm
}

console.log(`${mm}-${dd}-${yyy}`)
console.log(`${mm}/${dd}/${yyy}`)
console.log(`${dd}-${mm}-${yyy}`)
console.log(`${dd}/${mm}-${yyy}`)


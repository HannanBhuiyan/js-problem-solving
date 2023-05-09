// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive


function rangeOFnumber (n1, n2) {
    if( (n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60 )  || (n1 >= 70 && n1 <= 100 && n2 >= 70 && n2 <= 100 )){
        return true
    }
    else {
        return false
    }
}
console.log(rangeOFnumber(50, 89));
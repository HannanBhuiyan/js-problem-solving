// 25. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7


function checkMultipleNumber(number){

    if(number > 0) {
        if(number % 3 === 0 || number % 7 === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return "Enter a positive number";
    }

}

let result = checkMultipleNumber(10)
console.log(result);
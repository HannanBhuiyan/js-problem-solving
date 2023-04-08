// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkNumber(numberOne, numberTwo) {

     if(numberOne === 50 || numberTwo === 50 || (numberOne+numberTwo) === 50){
          return true;
     }
     else {
          return false;
     }
      


}

let numberOne = 20;
let numberTwo = 20;

let result = checkNumber(numberOne, numberTwo);
console.log(result)
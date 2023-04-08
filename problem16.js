// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.


let sum = 0;
function sumOfTwoNumber(numberOne, numberTwo){

     if(numberOne === numberTwo){
         let sum = numberOne + numberTwo
         return sum*3;
     }
     else {
          return numberOne + numberTwo;
     }

}

let numberOne = 10;
let numberTwo = 20;

let result = sumOfTwoNumber(numberOne, numberTwo)
console.log(result)
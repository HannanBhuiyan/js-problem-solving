// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.


function differenceOfNumber(number){
     if(number > 13) {
          return (number - 13) * 2;
     }
     else {
          return 13 - number;
     }
}

let number = 32;
let number2 = 11;

// let result = differenceOfNumber(number)
let result = differenceOfNumber(number2)
console.log(result)
// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.


function testhundred(number){
     if((Math.abs(100 - number) <= 20 ) || ( Math.abs(400 - number) <= 20 )){
          return true;
     }
     else {
          return false;
     }
}

let number = 199;
console.log(testhundred(number))




// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

let randomNumber = Math.floor(Math.random() * 11)
while(true){
     let guessNumber = parseInt(prompt("Enter your guess number"))
     if(randomNumber === guessNumber){
          console.log("Good Work")
          break;
      }
      else {
          console.log("Not matched")
          continue
     }
}


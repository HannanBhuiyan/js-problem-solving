// 23. Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1. 


function createNewString(str) {

    let firstChar = str[0];
    let lastChar = str[str.length - 1]
    let middleChat = str.slice(1, str.length - 2)
    
    if(str.length >= 1) {
        return lastChar + middleChat + firstChar;
    }
    else {
        return ' The string length must be broader than or equal to 1. '
    }

}

let resutl = createNewString("ab")

console.log(resutl);



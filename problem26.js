// 26. Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.


function createNewString(str) {
    let strLength = str.length - 3
    if(str.length >= 3 ) {
        let lastThreeString = str.slice(strLength, str.length)
        return finalChar = lastThreeString + str + lastThreeString
    }
    else {
        return "String length must be 3 chatacter or more"
    }
}

let result = createNewString("abc")
console.log(result);



// 30. Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one. 


function createNewString(str) {

    let length = str.length
    let newString = str.substring(4, 10);

    if(newString === "Script"){
        let sliceStirng = str.slice(4, length)
        return sliceStirng;
    }
    else {
        return str;
    }

}

console.log(createNewString("JavaScript"));
console.log(createNewString("coffeeScript"));

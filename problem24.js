// 24. Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back. 


function createNewString(str) {
    // let firstChar = str[0]
    let firstChar = str.substring(0, 1)
    let finalStr = firstChar + str + firstChar
    return finalStr
}

let result = createNewString("Hello")
console.log(result);
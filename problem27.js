// 27. Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.


function startJavaChar(str) {
    let chat = str.substring(0, 4)
    if(chat === "Java") {
        return true
    }
    return false;
}

let result = startJavaChar("Python")

console.log(result);
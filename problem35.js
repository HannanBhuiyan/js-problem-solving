// 35. Write a program to check whether a specified character exists between the 2nd and 4th positions in a given string. 


function existsCharacter(str, char) {

    let char_count = 0;
 
    for(let i = 0; i < str.length; i++) {
       if( (str.charAt(i) === char) && (i >= 2 && i <= 3) ) {
           char_count = 1
           break
       }
    }

    if(char_count == 1) return true
    return false
    
}

console.log(existsCharacter("bangladesh", 'g'));

// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string
function removeCharacter(str, char_pos) {
    
    // part1 = str.substring(0, char_pos);
    // part2 = str.substring( , str.length);
    // console.log(part1+part2);

    // console.log(str.replace(str[char_pos], ''));

    console.log(str.split(str[char_pos]).join(''));


}
removeCharacter("bangladesh", 3);
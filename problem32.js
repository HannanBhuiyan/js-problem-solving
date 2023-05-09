// 32. Write a JavaScript program to find the closest value to 100 from two numerical values

function closestValue(n1, n2) {

    if(n1 != n2){
        let num1 = Math.abs(100 - n1);
        let num2 = Math.abs(100 - n2);
        if(num1 < num2) {
            return n1
        }
        else {
            return n2
        }
    }
    else {
        return false
    }

}

console.log(closestValue(90, 89));
console.log(closestValue(-90, -89));
console.log(closestValue(90, 90));
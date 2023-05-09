// 34. Write a JavaScript program to find the largest number from the two given positive integers. The two numbers are in the range 40..60 inclusive. 


function positionLargestNumber(n1, n2) {
    if(n1 >= 40 && n1 <= 60 && n2 >= 40 && n2 <= 60 ){
        let max_value = 0;
        if(n1 > n2) {
            max_value = n1
        }
        else {
            max_value = n2
        }
        return max_value
    }
}

console.log(positionLargestNumber(25, 60));
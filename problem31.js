// 31. Write a JavaScript program to find the largest of three given integers. 


function largestIntegerNumber(n1, n2, n3){

    // one way
    // if(n1 > n2 && n1 > n3) {
    //     return n1
    // }
    // else if(n2  > n1 && n2 > n3){
    //     return n2
    // }
    // else if (n3 > n1 && n3 > n2){
    //     return n3
    // }


    //  way two fo get a max value
    let max_value = 0

    if(n1 > n2) {
        max_value = n1
    }
    else {
        max_value = n2
    }

    if(n3 > max_value) {
        max_value = n3
    }

    return max_value
}

console.log(largestIntegerNumber(30, 200, 50));
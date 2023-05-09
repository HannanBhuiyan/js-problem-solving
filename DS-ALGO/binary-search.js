
// implement binary search
function binary_search(arr, left, right, item) {
    while(left <= right) {
        let middle = Math.floor((left + right) / 2) 
        if(arr[middle] === item) {
            return middle
        }
        else if(arr[middle] < item) {
            left = middle + 1
        }
        else {
            right = middle - 1
        }
    }
    return -1
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
let item = 5
let left = 0
let right = arr.length - 1
let result = binary_search(arr, left, right, item)

if(result == -1) {
    console.log(`index not found`);
}
else {
    console.log(`Item found at index ${result}`);
}
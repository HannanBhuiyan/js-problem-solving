
function LinearSearch(arr, target) {
     for(let i = 0; i < arr.length; i++){
          if( arr[i] === target){
               return i
          }
     }
     return -1;
}


let arr = [ 2, 3, 4, 10, 40 ];
let target = 4;

let index = LinearSearch(arr, target)
if(index === -1) {
     console.log("Item not found")
}
else {
     console.log(`Item found at index ${index}`)
}
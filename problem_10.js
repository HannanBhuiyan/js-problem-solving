
// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user)


let first_number = document.querySelector("#first_number");
let second_number = document.querySelector("#second_number");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let result = document.querySelector("#result");

// function for multiply
multiply.addEventListener("click", function(e){

    e.preventDefault();

    // define variable
    let f_num = parseInt(first_number.value)
    let s_num = parseInt(second_number.value)
    
    // calculation
    let multiply_result = f_num * s_num;

    // output
    result.innerHTML = "Result : " + multiply_result; 


})

// function for divide

divide.addEventListener("click", function(e){

    e.preventDefault();

    // define variable
    let f_num = parseInt(first_number.value)
    let s_num = parseInt(second_number.value)
    
    // calculation
    let divide_result = f_num / s_num;

    // output
    result.innerHTML = "Result : " + divide_result; 


})

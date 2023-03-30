// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C



// Celsius to Fahrenheit Conversion Formula
// (30°C x 1.8) + 32 = 86°F’

//  Fahrenheit to Celsius Conversion Formula
// 5/9 x (F-32) = 86°C

let temperature = document.querySelector("#temperature");
let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");
let result = document.querySelector("#result");


// convert fahrenheit 
fahrenheit.addEventListener('click', function(e){
    e.preventDefault();
    let temperature_value = parseInt(temperature.value);
    let fahrenheit_result = (temperature_value * 1.8) + 32

    result.innerHTML = "Fahrenheit : " + fahrenheit_result+"°" + "F";

})


// convert celsius
celsius.addEventListener("click", function(e){
    e.preventDefault();
    let temperature_value = parseInt(temperature.value);
    let celsius_result =  5/9 * (temperature_value - 32);

    result.innerHTML = "Celsius : " + celsius_result+"°" + "C";
})



//Write a function to input temperature in Centigrade and convert to Fahrenheit.

function celsius (input) {
    var result;
    result = 1.8 * input + 32;
    return result; 
    
}
var fahrenheit = celsius(5);
console.log(fahrenheit + " je stepeni Farenhajta");

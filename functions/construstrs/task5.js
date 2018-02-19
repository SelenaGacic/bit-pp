/*Write a function to split a string and convert it into an array of words.

	"John Snow" -> [ 'John', 'Snow' ] */

function splitString(str){
    var rez = str.split(" ");
    return rez;
}
console.log(splitString("John Snow"))
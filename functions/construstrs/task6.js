/*Write a function to convert a string to its abbreviated form. 

	"John Snow" -> 	"John S."

*/

function abb(str) {
    var a = str.split(" ");
    var m = a[1];
    var f = m.charAt(0, 2);
    var c = a.join("");
    return c;
}

console.log(abb("Nikola Milosevic"));
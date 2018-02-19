/*Write a function to capitalize the first letter of a string and returns modified string.

"js string exercises" -> "Js string exercises"

*/

function capitalize(str) {
    var newStr = "";
    var temp = str[0];
    for (var i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    var res = temp.toUpperCase() + newStr;
    return res;
}
console.log(capitalize("hnjo"));
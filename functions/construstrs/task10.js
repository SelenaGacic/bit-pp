/*Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
       var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
       var LOWER = 'abcdefghijklmnopqrstuvwxyz';

"The Quick Brown Fox" -> "tHE qUICK bROWN fOX"
*/

function swap(str) {
    var newStr = "";
    var temp = str[0];
    for (var i = 1; i < str.length; i++) {
        newStr += str[i];
    }
    var res = temp.toLowerCase() + newStr.toUpperCase();
    return res;
}
console.log(swap("hnjo"));
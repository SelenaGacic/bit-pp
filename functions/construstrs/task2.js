/*Write a JavaScript function that reverses a number*/

function reverseNum(num) {
    var str = num.toString();
    str = str.split("").reverse().join("");
    return parseInt(str);
}

console.log(reverseNum(123));
/*Write a function to convert a number from one base (radix) to another. 
Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
*/

function reverse(num, sistem, toSistem) {

    var str = parseInt(num, sistem);
    //return str;
    return str.toString(toSistem);
}

console.log(reverse("ff", 16, 2));
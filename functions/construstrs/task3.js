/*Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Note: Assume punctuation, numbers and symbols are not included in the passed string.
*/

function paca(str) {
    str = str.toUpperCase();
    var b = [];
    var a = str.split("");
    //console.log(a);

    for (var i = 0; i < a.length; i++) {
        if (typeof a[i] === "string") {
            var m = a[i];
            b.push(m);
        }
    }
    b.sort();
    var res = b.sort();
    return res.join("");
}

console.log(paca("adawsd mAOP"));
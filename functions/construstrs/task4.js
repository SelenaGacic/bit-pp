/*Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.*/



function paca(str) {
    var a = str.split("");

    var res = a.sort();
    return res.join("");
}

console.log(paca("zimam  acana"));
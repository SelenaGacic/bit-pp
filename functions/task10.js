var string = "Ha ha ha ha";
var sum = 0;

function appear (str) {
    for (var i=0; i <str.length; i++) {
        if (str[i] === "a") {
            sum++;
        }
    }
    return sum;
}

console.log(appear(string));
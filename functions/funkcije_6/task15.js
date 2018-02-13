function computeFullSquare(a) {
    var squareOutput = "";
    var asterix = "*";
    var blank="";
    var newLine = "\n";
    for (var i = 0; i < a.length + 2; i++) {
        for (var j = 0; j < a.length + 2; j++) {
            var word = a[i];
            if (i === 0 || i === a.length) {
                squareOutput += asterix;

            } else if (j === 0 || j === a.length) {
                squareOutput += asterix;
            } else {
                squareOutput += word;
            }

        }
        if (i !== a.length + 1) {
            squareOutput += newLine;
        }
    }
    return squareOutput;
}
var rezult = computeFullSquare(["Hello", "World", "in", "a", "frame"]);
console.log(rezult);
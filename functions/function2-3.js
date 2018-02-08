function concat(str, num) {
    var sum = "";
    for (var i = 1; i <= num; i++) {
        sum +=str;
    }
    return sum;
}

console.log(concat('haha',3));
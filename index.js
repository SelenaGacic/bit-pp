var num=23;
if (typeof num === "number") {
    if (num > 9 && num < 100) {
        
        a = num % 10;
        b = (num - a)/10;
        console.log(a + "" +b);

    } else {
        console.log("Error");
    }
} else {
    console.log("Error");
}

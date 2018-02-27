//Write a function to find all the numbers greater than the average.


function greaterThanTheAverage(arr) {

    var arr = [];
    var sum = 0;
    var average = 0;

    for (var i = 0; i < arr.length; i++) {

        sum += arr[i];
    }

    average = sum / arr.length;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            return arr[i];
            console.log(arr[i]);
        }
    }

}
var blaaa = [2, 8, 9, 1, 4, 6];
greaterThanTheAverage(blaaa);
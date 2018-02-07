var array = [5, 5, 8, 8];
var sum = 0;

function appear (arr, num) {
    for (var i=0; i <arr.length; i++) {
        if (num === arr[i]) {
            sum++;
        }
    }
    return sum;
}

console.log(appear(array, 5));






// var inputNumber = 8;
// var array = [5, 5, 8, 8];
// var sum = 0;

// function appear (arr) {
//     for (var i=0; i <arr.length; i++) {
//         if (inputNumber === arr[i]) {
//             sum++;
//         }
//     }
//     return sum;
// }

// console.log(appear(array));
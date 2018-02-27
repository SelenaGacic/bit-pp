// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

"use strict"

function duplicates(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        output.push(arr[i]);
        output.push(arr[i]);
    }
    return output;



}
console.log(duplicates([2, 4, 7, 11, -2, 1]));
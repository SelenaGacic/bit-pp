/*Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13] */


function duplicates(arr) {
    var output = [];
    arr.sort(function compare(a, b) {
        for (var i = 0; i < arr.length; i++) {
            a = a[i];
            b = b[i];
            
        }

    });
    return output;


}

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1])
//         output.push(arr[i]);
// }
// output.sort();
// return output;
// }


console.log(duplicates([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));
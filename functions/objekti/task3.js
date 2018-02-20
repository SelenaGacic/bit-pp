/* A) Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true */

function isOdd(arr) {
    var leng = arr.length;
    if (leng % 2 !== 0) {
        return true;
    } else {
        return false;
    }

}
console.log(isOdd([1, 2, 9, 2, 1, 5]));

/* B) Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4 */

function counts(arr) {
    if (arr.length % 2 !== 0) {
        var middle = arr[Math.floor(arr.length / 2)];
        var counter = 0;
        for (var index = 0; index < arr.length; index++) {
            if (arr[index] < middle) {
                counter++;
            }
        }
        return counter;
    } else {
        return "Error!"
    }
}
console.log(counts([-1, 8.1, 3, 6, 2.3, 44, 2.11]));
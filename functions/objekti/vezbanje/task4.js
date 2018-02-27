/*Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
Input: [1, 4, -2, 11, 8, 1, -2, 3]
Output:  { minValue: -2, minLastIndex: 6 }*/

function smallestEl(arr) {
    
    var newArr = arr.slice().sort();
    console.log(newArr);
    
    var minValue = newArr[0];
    var lastInd = arr.lastIndexOf(minValue);
    return minValue + ", " + lastInd;
}
console.log(smallestEl([1, 4, -2, 11, 8, 1, -2, 3]));
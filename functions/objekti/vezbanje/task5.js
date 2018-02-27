/*A) Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
    Output: [2, 3, -2, 4]*/

function find(arr, num) {
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            output.push(arr[i]);
        }
    }
    return output;
}
console.log(find([2, 3, 8, -2, 11, 4], 6));

/*B) Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Programming’, ‘product’] */

function findWord(arr, word) {
    var output = [];
    word.toUpperCase();
    for (var i = 0; i < arr.length; i++) {
        var m = arr[i];
        m.toUpperCase();
        if (arr[i].substring(0, word.length) === word) {
            output.push(arr[i]);
        }
    }
    return output;

}
console.log(findWord(["JavaScript", "programming", "fun", "Product"], "Pro"));
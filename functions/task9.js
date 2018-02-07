var array = [5, 5, 8, 8];
var sum = 0;

function odd_sum(arr) {
    for (var i=0; i <arr.length; i++) {
        if (arr[i]%2!==0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(odd_sum(array));
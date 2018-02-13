/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
function _array(ARRAY) {
    var newIndex = 0;
    var rez = [];
    for (var i = 0; i < ARRAY.length; i++) {
        var arrElement = ARRAY[i];
        if (typeof arrElement === "number") {
            rez[newIndex] = arrElement;
            newIndex++;
        }
    }
    return Math.max(...rez);
}

var rezult=_array([1,2,85,"dsae",]);
console.log(rezult);

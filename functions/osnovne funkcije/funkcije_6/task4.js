//Write a function that takes a number and returns array of its digits.

function number(num) {
    var str = "";
    str+=num;
    
    var rez = [];
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        rez[i] = element;
        
    }
    return rez;
}

number(1254896);

/*
function numRet(num) {
 var newArray = [];
    for (i=0; i<num.length; i++) {
newArray[i]+=num[i];

    }
    return newArray;
}
numRet(1258);*/



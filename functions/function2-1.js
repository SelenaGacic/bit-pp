function isString(rec) {
    var odgovor = '';
    if (typeof rec === 'string') {
        odgovor = 'String je'
        return odgovor;
    } else {
        odgovor = 'Nije string';
        return odgovor;
    }

}


console.log(isString(6));



// function isString(rec) {

//     var answer = typeof rec === 'string';
        
//     return answer;

// }


// console.log(isString(5));




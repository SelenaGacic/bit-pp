function prostBroj(num) {

    for (var i=0; i<num; i++){

    if (num % i !== 0 || num <= 2) {

        return true;
    }
}
return false;
}

console.log(prostBroj(10));

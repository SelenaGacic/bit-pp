function occ(str, char) {
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i+1;
            break;
        } 
    }
    return -1;
}
console.log(occ("mama", "a"));
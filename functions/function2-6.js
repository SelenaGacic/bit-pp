function occ(str, char) {
   
    for (var i = str.length; i >= 0; i--) {
        if (str[i] === char) {
            return i+1;
            break;
        } 
    }
        
        return -1;
}

console.log(occ("mythokmk", "m"));
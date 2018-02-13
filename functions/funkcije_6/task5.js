//Write a program that prints a multiplication table for numbers up to 12.

function table(n) { 
    var rez = 0;
    for (i = 1 ; i <= n; i++ ){
        for(var j = 1; j <= n; j++) { 
            rez = i * j;
            console.log(rez);
        }
    }
    return rez;
    
 
        
     
    
}
var result = table(12);
console.log(result);

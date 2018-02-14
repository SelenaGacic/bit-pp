//Functions that Return Functions

function menu () {
 console.log("Dnevni menu");
 return function () {
     console.log('Danas nema rucka!');
   return; 
 }
}
 menu()();

 var n = menu();
 n();


 var bla = (function (param) {
     return param
 })(10);

 var bla1 = function () {
     return "Hi";
 }

 console.log(bla);
 console.log(bla1);
 
 
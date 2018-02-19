/*jedan genericki konstruktor sa dve instance*/

function Person(name, lastname, yearOfBitht) {
    this.firstName = name;
    this.lastName = lastname;

    this.getAge = function () {
        var date = new Date();
        return date.getFullYear() - yearOfBitht;
    }
    this.info = function () {
        return this.firstName + " " + this.lastName + " " + this.getAge();
    }

}

var selena = new Person("Selena", "Gacic", 1993);

console.log(selena.lastName);
var tamara = new Person("Tamara", "Tibold", 1989);
console.log(tamara);
console.log(tamara.info());
console.log(selena.getAge());
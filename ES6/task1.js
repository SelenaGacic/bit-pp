// Person and Programmer: 

// Create a class Person with properties name and surname. 
// Write a constructor of the Person class. 
// Add a method printPersonData that prints out person’s name and surname. 



// Create a class Programmer with properties name, surname, and languages that extends Person class. Property languages represents programming languages that the programmer knows.  
// Write a constructor of the Programmer class. Don’t forget to use parent constructor to complete the job. 
// Add a method printProgramerData that prints out name and surname and all the programming languages that the programmer knows. 
// Add a method learnedNewLanguage that extends the list of the programming languages with the name of the new language.

// 	For example: 
// Programmer: Pera Peric JavaScript, Python, PHP
// 		Programmer: Zika Zikic Java, C#

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    print() {
        console.log(`${this.name} ${this.surname}`);

    }
}

const person1 = new Person('Selena', 'Gacic');
person1.print();

class Programer extends Person {
    constructor(name, surname, languages = []) {
        super(name, surname);
        this.languages = languages;
    }
    printPro() {
        super.print();
        console.log(`${this.languages}`);

    }

    learnedNewLanguage(language) {
        this.languages.push(language);
    }

}
const programer1 = new Programer('Tamara', "Tibold", ['JS']);
const programer2 = new Programer('Selena', "Gacic");

programer1.printPro();
console.log(programer2);
programer2.learnedNewLanguage("C#");
console.log(programer2);
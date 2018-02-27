/*Create constructor functions with properties representing the following:
Employee: name, surname, specialization, salary
Manager: name, surname, department, salary 
All employees should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees and managers should inherit methods:
getData which prints out the name and surname 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% */

function Person(name, surname, salary) {
    this.name = name;
    this.surname = surname;
}

function Employee(name, surname, specialization, salary) {
    Person.call(this, name, surname);
    this.specialization = specialization;
    this.salary = salary;
}

function Manager(name, surname, department, salary) {
    Person.call(this, name, surname);
    this.department = department;
    this.salary = salary;
}

Employee.prototype.getSpecialization = function () {
    return console.log(this.specialization);
}

Manager.prototype.getDepartment = function () {
    return console.log(this.department);
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
}

Person.prototype.getSalary = function () {
    return console.log(this.salary);
}
Person.prototype.increaseSalary = function () {
    return console.log(this.salary + this.salary * 0.1);
}


Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;


var e1 =  new Employee ("selena", "gacic", "agriculture", 10000);
// console.log(e1);

var m1 = new Manager ("selena", "gacic", "agriculture", 10000)
// console.log(m1);
m1.increaseSalary();
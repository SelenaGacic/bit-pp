"use strict";
(function () {

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }


    function Seat(number, category) {
        this.number = number || (80 * Math.random()).toFixed() + 10;
        this.category = category || "e";
    }
    Seat.prototype.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }


    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
    }
    Passenger.prototype.getData = function () {
        return this.seat.getData() + " , " + this.person.getData();
    }



    function Flight(relation, date) {
        this.listOfPassengers = [];
        this.relation = relation;
        this.date = new Date(date);
    }
    Flight.prototype.getData = function () {
        var resultString = this.date + "  " + this.relation + "\n";
        this.listOfPassengers.forEach(function (passenger) {
            resultString += "\t\t" + passenger.getData() + "\n";
        });
        return resultString;
    }

    Flight.prototype.addPassenger = function (Passenger) {
        return this.listOfPassengers.push(Passenger);
    }

    // var ivana = new Person("Ivana", "Markovic");
    // console.log(ivana.getData());

    // var seat1 = new Seat(null, 'b');
    // console.log(seat1.getData());

    // var passenger1 = new Passenger(ivana, seat1);
    // var passenger2 = new Passenger(ivana, seat1);
    // var passenger3 = new Passenger(ivana, seat1);
    // console.log(passenger1.getData());

    // var flight8 = new Flight("Belgrade-Athens", "Jun 25 2017");
    // flight8.addPassenger(person1);
    // flight8.addPassenger(person2);
    // flight8.addPassenger(person3);
    // console.log(flight8.list);

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }
    Airport.prototype.addFlight = function (flight) {
        return this.listOfFlights.push(flight);
    }

    Airport.prototype.getData = function () {

        var total = 0;
        var flightsData = "";

        for (var i = 0; i < this.listOfFlights.length; i++) {
            var flight = this.listOfFlights[i];

            total += flight.listOfPassengers.length;
            flightsData += "\t" + flight.getData() + "\n";
        }



        return "Airport : " + this.name + ", " + " total passenger : " + total + "\n" + flightsData;
    };


    //     this.listOfFlights[0].listOfPassengers.length;
    // };





    function createFlight(relation, date) {
        return new Flight(relation, date);
    }
    var flight1 = createFlight("Belgrade-New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona-Belgrade", "Nov 11 2017");


    function createPassenger(name, surname, number, category) {
        var person = new Person(name, surname);
        var seat = new Seat(number, category);
        return new Passenger(person, seat);

    }
    var passenger2 = createPassenger("John", "Snow", 1, "b");
    var passenger3 = createPassenger("Cersei", "Lannister", 1, "b");
    flight1.addPassenger(passenger2);
    flight1.addPassenger(passenger3);
    // console.log(flight1.listOfPassengers);

    var passenger4 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger5 = createPassenger("Tyrion", "Lannister");
    flight2.addPassenger(passenger4);
    flight2.addPassenger(passenger5);
    // console.log(flight2.listOfPassengers);


    var Airport1 = new Airport();
    Airport1.addFlight(flight1);
    Airport1.addFlight(flight2);
    console.log(Airport1.getData());



})();
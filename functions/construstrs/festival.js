"use strict";
(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = name.charAt(0);
            var lastLetter = name.charAt(name.length - 1)
            var output = firstLetter + lastLetter;
            return output.toUpperCase();
        }
    }
    var g1 = new Genre("drama")
    console.log(g1.getData());



    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return this.title + ' ' + this.length + " " + this.genre.getData();
        }
    }

var m1 = new Movie ("Lobster", new Genre("comedy") , 120);
console.log(m1.getData());



    function Program(date, numberOfMov) {
        this.date = date;
        this.listtOfMov = [];
        this.numberOfMov = number;
        this.addMovie = function (movie) {
             this.listtOfMov.push(movie);
        }
    }
    var p1 = new Program();
    

    function Festival(name, numberOfMov) {
        this.name = name;
        this.list = [];
        this.numberOfMov = number;
    }

    // var actionGenre = new Genre()

    // var movie = new Movie("Naslov", new Genre("Action"), 100);
















})()
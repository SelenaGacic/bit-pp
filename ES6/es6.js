(function () {
    'use strict'

    function Genre(name) {
        this.name = name;
    }

    Genre.prototype.getData = function () {
        const firstLetter = this.name.charAt(0);
        const lastLetter = this.name.charAt(this.name.length - 1);
        const result = firstLetter + lastLetter;

        return result.toUpperCase();
    }


    function Movie(title, genre, duration) {
        this.title = title;
        this.genre = new Genre(genre).getData();
        this.duration = duration;
    }

    Movie.prototype.getData = function () {
        return (`${this.title}, ${this.duration} min, ${this.genre}`);


    }



    function Program(date = new Date().getFullYear()) {
        this.date = date;
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie);
    }

    Program.prototype.getData = function () {
        let sumLength = 0;

        this.listOfMovies.forEach(function(element) {
            sumLength += element.duration;
          });

        // for (let i = 0; i < this.listOfMovies.length; i++) {
        //     sumLength += this.listOfMovies[i].duration;
        // }
        let result = (`${this.date}, duration of festival is ${sumLength} minutes
        `);

        this.listOfMovies.forEach(function(element) {
            result += (`    ${element.getData()}
            `);
          });

        // for (let i = 0; i < this.listOfMovies.length; i++) {
        //     result += (`    ${this.listOfMovies[i].getData()}
        //     `);
        // }

        return result;
    }



    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMovies = 0;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
    }

    Festival.prototype.getData = function () {

        // this.listOfPrograms.forEach(function(element) {
        //     this.numOfMovies += element.listOfMovies.length;
        //   });

        for (let i = 0; i < this.listOfPrograms.length; i++) {
            this.numOfMovies += this.listOfPrograms[i].listOfMovies.length;
        }

        let result = `Festival ${this.name} has ${this.numOfMovies} movie titles
        `;

        for (let i = 0; i < this.listOfPrograms.length; i++) {
            result += `    ${this.listOfPrograms[i].getData()}
            `;
        }
        return result;

    }




    function createMovie(title, duration, genre) {
        return new Movie(title, genre, duration)
    }

    function createProgram(date) {
        return new Program(date);
    }
    const fest = new Festival("Pacofil");
    const prog1 = createProgram("3 mart 2018");
    const prog2 = createProgram("22 mart 2018");
    let mov1 = createMovie("Paca lepotica", 25, "comedy");
    const mov2 = createMovie("Onko zavodnik", 26, "action");
    prog1.addMovie(mov1);
    prog1.addMovie(mov2);
    prog2.addMovie(mov1);
    prog2.addMovie(mov2);
    fest.addProgram(prog1);
    fest.addProgram(prog2);
    console.log(fest.getData());
})();
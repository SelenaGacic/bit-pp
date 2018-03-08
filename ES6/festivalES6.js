(function () {

    class Genre {
        constructor(name) {
            this.name = name;
        }

        getData() {
            const firstLetter = this.name.charAt(0);
            const lastLetter = this.name.charAt(this.name.length - 1);
            const result = `${firstLetter}${lastLetter}`;

            return result.toUpperCase();
        }
    }

    // IS A => extends
    // HAS A =>

    class Movie {
        constructor(title, genre, duration) {
            this.title = title;
            this.duration = duration;
            this.genre = genre;
        }

        getData() {
            return `${this.title}, ${this.duration} min, ${this.genre}`;
        }
    }

    class Program {
        constructor(date = new Date().getFullYear()) {
            this.date = date;
            this.listOfMovies = [];
        }
        addMovie(movie) {
            this.listOfMovies.push(movie);
        }
        getData() {
            let sumLength = 0;
            this.listOfMovies.forEach(function (element) {
                sumLength += element.duration;
            });
            let result = (`${this.date}, duration of festival is ${sumLength} minutes
        `);
            this.listOfMovies.forEach((element) => {
                result += (`    ${element.getData()}
            `);
            });
            return result;
        }
    }
    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.numOfMovies = 0;
        }
        addProgram(program) {
            this.listOfPrograms.push(program);
        }
        getData() {
            this.listOfPrograms.forEach((element) => {
                return this.numOfMovies += element.listOfMovies.length;
            })
        }
    }

    let createMovie = (title, duration, genre) => {
        return new Movie(title, genre, duration)
    }

    let createProgram = (date) => {
        return new Program(date);
    }

    // // const genre1 = new Genre('action');
    // let movie1 = new Movie("seven", "Triller", 123);
    // const program1 = new Program();
    // program1.addMovie(movie1);
    // // console.log(program1.getData());
    // const fest1 = new Festival('Pacetina');
    // fest1.addProgram(program1);
    // fest1.getData();
    // console.log(fest1.listOfPrograms);

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
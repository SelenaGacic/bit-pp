var dataModule = (function () {

    var movieList = [];


    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    function addMovie(movieData) {
        movieList.push(new Movie(movieData.title, movieData.length, movieData.genre));
    }

    function calculateLengthOfMovies(movie) {
        var sum = 0;
        for (var i = 0; i < movieList.length; i++) {
            sum += movie.length;
        }

        return sum;
    }

    var interfaceObject = {
        addMovie,
        calculateLengthOfMovies
    }

    return interfaceObject;

})();


var uiModule = (function () {

    var title = document.querySelector('#title-movie').value;
    var length = document.querySelector('#length-movie').value;
    var objDropdown = document.getElementById("genre-select");
    var selectedOption = objDropdown.options[objDropdown.selectedIndex];
    var genre = selectedOption.value;

    var result = {
        title: title,
        length: length,
        genre: genre
    }
    return result;



})();


var ctrlModule = (function (data, ui) {
    // data.function();
    // data.object;

    var btn = document.querySelector('.create-movie');
    btn.addEventListener('click', function () {
        data.calculateLengthOfMovies()
        ui.result;
    });

})(dataModule, uiModule);
var listOfMovies = [];


function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {
    var firstLetter = this.genre.charAt(0);
    var lastLetter = this.genre.charAt(this.genre.length - 1);
    var result = firstLetter + lastLetter;
    return this.title + ', ' + this.length + 'min' + ", " + result.toUpperCase();
}

document.querySelector('.create-movie').addEventListener("click", function (event) {
    createMovie();
});

function createMovie() {
    var title = document.querySelector('#title-movie').value;
    var length = document.querySelector('#length-movie').value;
    var objDropdown = document.getElementById("genre-select");
    var selectedOption = objDropdown.options[objDropdown.selectedIndex];
    var genre = selectedOption.value;

    var movie = new Movie(title, length, genre);

    listOfMovies.push(movie);
    var date = Date();
    //ar dateDate =  date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    document.getElementById("p1").innerHTML = title + ", " + length + 'min' + ", " + genre;
    console.log(listOfMovies);
    var movieDownList = document.querySelector("#movieDownList");
    var option = document.createElement("option")
    option.value = listOfMovies.length - 1;
    option.textContent = movie.getData();
    movieDownList.appendChild(option);
    document.getElementById("p2").innerHTML = date + ", " + listOfMovies.length + " movies" + ", duration: " + this.length;





}
var listOfMovies=[];


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
var superman = new Movie("Superman", "action", 145);


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
    document.getElementById("p1").innerHTML = "you created " + title + ", " + length  + 'min' + ", " + genre;
    console.log(listOfMovies);
    
}
  

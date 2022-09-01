var movieList = [];
var movieCount = 0;

function movieGenerator () {
  while (movieCount < 10){
    var movie = prompt ("Movie Suggestion?");
    movieList.push (movie);
     
    movieCount++;
    var randomMovie = Math.floor(Math.random()*movieList.length);
  }
  alert(movieList[randomMovie]);
}

movieGenerator();

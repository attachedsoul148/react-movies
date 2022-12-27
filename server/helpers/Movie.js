class Movie {
  constructor(movie) {
    this.id = movie.id
    this.title = movie.title
    this.releaseDate = movie.release_date
    this.posterPath = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
    this.adult = movie.adult
    this.overview = movie.overview
    this.originalTitle = movie.original_title
    this.originalLanguage = movie.original_language
    this.popularity = movie.popularity
    this.voteCount = movie.vote_count
    this.video = movie.video
    this.voteAverage = movie.vote_average
  }
}

module.exports = {
  Movie,
}

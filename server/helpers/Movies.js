const { Movie } = require('./Movie')

class Movies {
  constructor(result) {
    this.page = result.page
    this.totalResults = result.total_results
    this.results = result.results.map((movie) => new Movie(movie))
    this.totalPages = result.total_pages
  }
}

module.exports = {
  Movies,
}

const axios = require('axios')
const { Movies } = require('../helpers/Movies')

const getPopularMovies = async (parent, args) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=a8566a195bd1d85a250dfb1ebb0394ac&language=${args.locale}&page=${args.page}&sort_by=${args.sortBy}&include_adult=${args.isAdult}`,
  )
  return new Movies(res.data)
}

module.exports = {
  getPopularMovies,
}

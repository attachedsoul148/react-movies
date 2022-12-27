const axios = require('axios')
const { Movie } = require('../helpers/Movie')

const getMovieDetails = async (parent, args) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${args.id}?api_key=a8566a195bd1d85a250dfb1ebb0394ac&language=${args.locale}`,
  )
  return new Movie(res.data)
}

module.exports = {
  getMovieDetails,
}

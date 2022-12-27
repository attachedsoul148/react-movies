const { ApolloServer, gql } = require('apollo-server')
const fs = require('fs')
const path = require('path')
const { getPopularMovies } = require('./API/getPopularMovies')
const { getMovieDetails } = require('./API/getMovieDetails')

const resolvers = {
  Query: {
    movies: async (parent, args) => await getPopularMovies(parent, args),
    movieDetails: async (parent, args) => await getMovieDetails(parent, args),
  },
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
})

server.listen()

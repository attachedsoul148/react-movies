import { gql } from '@apollo/client'
export const MOVIES_QUERY = gql`
  query GetMovies($page: Int!, $locale: String, $sortBy: String, $isAdult: Boolean!) {
    movies(page: $page, locale: $locale, sortBy: $sortBy, isAdult: $isAdult) {
      page
      totalPages
      totalResults
      results {
        id
        title
        posterPath
        releaseDate
      }
    }
  }
`
export const MOVIE_DETAILS_QUERY = gql`
  query GetMovieDetails($id: ID!, $locale: String) {
    movieDetails(id: $id, locale: $locale) {
      title
      id
      overview
      releaseDate
      posterPath
      voteCount
      adult
    }
  }
`

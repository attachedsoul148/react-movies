export interface MovieType {
  adult?: boolean
  backdropPath?: string
  id: number
  originalLanguage?: string
  originalTitle?: string
  overview?: string
  popularity?: number
  posterPath: string
  releaseDate?: string
  title: string
  video?: boolean
  voteAverage?: number
  voteCount?: number
}

export interface MoviesQueryResult {
  page: number
  results: MovieType[]
  total_pages: number
  total_results: number
}

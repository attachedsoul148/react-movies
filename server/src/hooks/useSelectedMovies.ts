import { useState } from 'react'
import { MovieType } from '../types/types'

export const useSelectedMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([])

  const selectMovie = (movie: MovieType) => {
    if (!selectedMovies.find((el) => el.id === movie.id) && selectedMovies.length < 10) {
      setSelectedMovies([movie, ...selectedMovies])
    }
  }

  const deleteMovie = (movie: MovieType) => {
    setSelectedMovies((prev) => [...prev.filter((el) => el.id !== movie.id)])
  }
  return {
    selectMovie,
    deleteMovie,
    selectedMovies,
  }
}

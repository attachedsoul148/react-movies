import { act, renderHook } from '@testing-library/react-hooks'
import { useSelectedMovies } from './useSelectedMovies'

describe('useSelectedMovie hook tests', () => {
  const movie = { id: 1, title: 'Movie', posterPath: './posterPath' }
  test(`movie counst should increase`, () => {
    const { result } = renderHook(() => useSelectedMovies())

    expect(result.current.selectedMovies.length).toBe(0)
    act(() => {
      result.current.selectMovie(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
  })
  test(`same movie should not be added`, () => {
    const { result } = renderHook(() => useSelectedMovies())

    expect(result.current.selectedMovies.length).toBe(0)
    for (let i = 1; i < 3; i++) {
      act(() => {
        result.current.selectMovie(movie)
      })
    }
    expect(result.current.selectedMovies.length).toBe(1)
  })
  test(`max count of movies must be 10`, () => {
    const { result } = renderHook(() => useSelectedMovies())
    for (let i = 1; i < 20; i++) {
      act(() => {
        result.current.selectMovie({ id: i, title: 'Movie', posterPath: './posterPath' })
      })
    }
    expect(result.current.selectedMovies.length).toBe(10)
  })
  test(`movie must be deleted`, () => {
    const { result } = renderHook(() => useSelectedMovies())
    act(() => {
      result.current.selectMovie(movie)
    })
    expect(result.current.selectedMovies.length).toBe(1)
    act(() => {
      result.current.deleteMovie(movie)
    })
    expect(result.current.selectedMovies.length).toBe(0)
  })
})

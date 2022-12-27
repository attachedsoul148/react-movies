import React from 'react'
import Box from '@mui/material/Box'
import SelectedMovieCard from './SelectedMovieCard'
import Typography from '@mui/material/Typography'
import { MovieType } from '../types/types'
import { FormattedMessage } from 'react-intl'

const SelectedMovieList: React.FC<{
  deleteMovie: (movie: MovieType) => void
  selectedMovies: MovieType[]
}> = ({ selectedMovies, deleteMovie }) => {
  return (
    <>
      {selectedMovies.length > 0 ? (
        <Box
          sx={{
            gap: '1rem',
            overflowY: 'scroll',
            height: '92%',
          }}>
          {selectedMovies.map((movie) => (
            <SelectedMovieCard movie={movie} key={movie.id} deleteMovie={deleteMovie} />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '92%',
          }}>
          <Typography component="div" fontSize={64}>
            😥
          </Typography>
          <Typography component="div" variant="subtitle1" fontSize={30}>
            <FormattedMessage id="emptyList" />
          </Typography>
        </Box>
      )}
    </>
  )
}

export default SelectedMovieList

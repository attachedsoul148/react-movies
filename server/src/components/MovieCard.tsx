import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DotMenu from './DotMenu'
import { MovieType } from '../types/types'
import Box from '@mui/material/Box'

const MovieCard: React.FC<{ movie: MovieType; selectMovie: (movie: MovieType) => void }> = ({
  movie,
  selectMovie,
}) => {
  const [showPlus, setShowPlus] = useState(false)
  return (
    <Card
      sx={{ maxWidth: 220, position: 'relative' }}
      className="selectedCard__content"
      onMouseEnter={() => setShowPlus(true)}
      onMouseLeave={() => setShowPlus(false)}>
      <CardMedia component="img" alt="chainsow" sx={{ height: '250px' }} image={movie.posterPath} />
      <CardContent>
        {showPlus && (
          <Box
            onClick={() => {
              selectMovie(movie)
            }}
            sx={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              background: 'rgba(189, 195, 199 , 0.3)',
              height: '100%',
              width: '100%',
              top: 0,
              right: 0,
              color: 'white',
              cursor: 'pointer',
            }}>
            <Typography fontSize={64} sx={{ marginTop: 10 }}>
              +
            </Typography>
          </Box>
        )}
        <DotMenu options={[{ name: 'Add/Додати', callback: () => selectMovie(movie) }]} />
        <Typography variant="subtitle1" component="div">
          {movie.title.slice(0, 14)}
          {movie.title.length > 11 ? '...' : ''}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {movie.releaseDate}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard

import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import DotMenu from './DotMenu'
import { MovieType } from '../types/types'

const SelectedMovieCard: React.FC<{
  movie: MovieType
  deleteMovie: (movie: MovieType) => void
}> = ({ movie, deleteMovie }) => {
  return (
    <Card sx={{ display: 'flex', height: 185, margin: 1, position: 'relative', maxWidth: '100%' }}>
      <CardMedia component="img" sx={{ maxWidth: 125 }} image={movie.posterPath} alt="Chainsow" />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <DotMenu options={[{ name: 'Delete/Видалити', callback: () => deleteMovie(movie) }]} />
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Realese date : {movie.releaseDate}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{
              display: { xl: 'block', lg: 'none', md: 'none', sm: 'none', xs: 'none', xxs: 'none' },
            }}>
            Genres : Animation, Action & Adventure, Sci-Fi & Fantasy, Comedy
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default SelectedMovieCard

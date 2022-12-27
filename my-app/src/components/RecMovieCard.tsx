import { useQuery } from '@apollo/client'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React, { useContext } from 'react'
import { MOVIE_DETAILS_QUERY } from '../queries/queryStrings'
import { AppContext } from './AppIntlProvider'

const RecMovieCard: React.FC<{ id: string }> = ({ id }) => {
  const {
    state: { locale },
  } = useContext(AppContext)
  const { data, loading, error } = useQuery(MOVIE_DETAILS_QUERY, {
    variables: { id, locale },
    fetchPolicy: 'no-cache',
  })
  if (loading) {
    return <>'...Loading'</>
  }
  if (error) {
    return <>'...Error'</>
  }
  return (
    <>
      {data && (
        <Card sx={{ display: 'flex', height: 245, margin: 1, position: 'relative', width: '70%' }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 185 }}
            image={data.movieDetails.posterPath}
            alt="Poster"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {data.movieDetails.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Realese date : {data.movieDetails.releaseDate}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Vote count : {data.movieDetails.voteCount}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Adult : {data.movieDetails.adult ? '18+' : '12+'}
              </Typography>
              <Typography variant="body1" color="text.secondary" component="div">
                {data.movieDetails.overview}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  )
}

export default RecMovieCard

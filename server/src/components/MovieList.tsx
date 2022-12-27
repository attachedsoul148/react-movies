import { Grid, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import MovieCard from './MovieCard'
import { useQuery } from '@apollo/client'
import { MOVIES_QUERY } from '../queries/queryStrings'
import { MovieType } from '../types/types'
import MuiAlert from '@mui/material/Alert'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Loader from './Loader'
import { AppContext } from './AppIntlProvider'

const MovieList: React.FC<{
  selectMovie: (movie: MovieType) => void
  title: string
  sortBy: string
  isAdult: boolean
}> = ({ selectMovie, title, sortBy, isAdult }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const {
    state: { locale },
  } = useContext(AppContext)
  const onPageChanged = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPageNumber(newPage)
  }
  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page: pageNumber, locale, sortBy, isAdult },
    fetchPolicy: 'no-cache',
  })
  if (error) {
    return (
      <MuiAlert elevation={6} variant="filled" color="error">
        <Typography variant="caption">Something went wrong</Typography>
      </MuiAlert>
    )
  }
  if (loading) {
    return <Loader />
  }
  return (
    <Grid container spacing={2} alignItems="flex-end">
      {data && (
        <>
          {data.movies.results
            .filter((movie: MovieType) => movie.title.includes(title))
            .map((movie: MovieType) => {
              return (
                <Grid key={movie.id} item xl={2.4} lg={3} md={3} xs={4}>
                  <MovieCard movie={movie} selectMovie={selectMovie} />
                </Grid>
              )
            })}
          <Grid item xl={12} alignItems={'center'} justifyContent={'center'}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Stack spacing={2}>
                <Pagination
                  count={500}
                  page={pageNumber}
                  variant="outlined"
                  shape="rounded"
                  defaultPage={1}
                  onChange={onPageChanged}
                />
              </Stack>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default MovieList

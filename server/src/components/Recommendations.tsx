import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import RecMovieCard from './RecMovieCard'

const Recommendations = () => {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const ids = searchParams.get('ids')?.split(',')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Typography variant="h2" component="h1">
        {title?.toUpperCase()}
      </Typography>
      {ids?.map((id) => (
        <RecMovieCard id={id} key={id} />
      ))}
    </Box>
  )
}

export default Recommendations

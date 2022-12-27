import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import MovieList from './MovieList'
import SelectedMovieList from './SelectedMovieList'
import { useSelectedMovies } from '../hooks/useSelectedMovies'
import CreateListForm from './CreateListForm'
import CopyModal from './CopyModal'
import FilterForm from './FilterForm'
import { useFilterForm } from '../hooks/useFilterForm'

const Home = () => {
  const { title, sortBy, isAdult, setFilter } = useFilterForm()
  const { selectMovie, deleteMovie, selectedMovies } = useSelectedMovies()
  const [link, setLink] = useState('')
  const [listName, setListName] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const closeHandler = () => {
    setLink('')
    setModalOpen(false)
    setListName('')
  }
  const clickHandler = (link: string, listName: string) => {
    setLink(link)
    setListName(listName)
    setModalOpen(true)
  }
  return (
    <Box sx={{ flexGrow: 1, marginTop: 2, height: '173.5vh' }}>
      <Grid container spacing={2}>
        <Grid item xl={12} md={12} lg={12} xs={12}>
          <Paper sx={{ padding: 2 }}>
            <FilterForm setFilter={setFilter} />
          </Paper>
        </Grid>
        <Grid item xl={8} md={8} lg={8} xs={8}>
          <Paper sx={{ padding: 2 }}>
            <MovieList selectMovie={selectMovie} title={title} sortBy={sortBy} isAdult={isAdult} />
          </Paper>
        </Grid>
        <Grid item xl={4} md={4} lg={4} xs={4}>
          <Paper
            sx={{
              height: 'calc(100vh - 190px)',
              padding: 1,
              position: 'sticky',
              top: 32,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 1,
            }}>
            <SelectedMovieList selectedMovies={selectedMovies} deleteMovie={deleteMovie} />
            {selectedMovies.length > 0 && (
              <CreateListForm selectedMovies={selectedMovies} clickHandler={clickHandler} />
            )}
            {modalOpen && (
              <CopyModal
                link={link}
                isOpen={modalOpen}
                listName={listName}
                closeHandler={closeHandler}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home

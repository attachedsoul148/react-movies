import React from 'react'
import { CssBaseline, Container } from '@mui/material'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Recommendations from './components/Recommendations'
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors'

function App() {
  return (
    <Box sx={{ background: grey[100] }}>
      <CssBaseline />
      <Navigation />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<></>} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App

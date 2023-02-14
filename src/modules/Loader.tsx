import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loader = () => (
  <Box sx={{
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  >
    <CircularProgress />
  </Box>
)

export default Loader

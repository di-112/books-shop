import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

const EmptyData = () => (
  <Box sx={{
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    padding: 2,
    justifyContent: 'center',
  }}
  >
    <Typography
      variant="body1"
      fontWeight={700}
    >
      Нет данных
    </Typography>
  </Box>
)

export default EmptyData

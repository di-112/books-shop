import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const EmptyDataContainer = styled(Box)(() => ({
  display: 'flex',
  flexGrow: 1,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 2,
}))

const EmptyData = () => (
  <EmptyDataContainer>
    <Typography
      variant="body1"
      fontWeight={700}
    >
      Нет данных
    </Typography>
  </EmptyDataContainer>
)

export default EmptyData

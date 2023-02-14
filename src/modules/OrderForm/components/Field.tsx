import React, { FC } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'

interface IField {
  name: string
  label: string,
  children: React.ReactNode
}

const Field: FC<IField> = ({
  name,
  label,
  children,
}) => (
  <Box
    display="flex"
    alignItems="center"
    mb={2}
    gap={2}
  >
    <Typography
      flex="0 0 80px"
      component="label"
      textAlign="left"
      variant="body2"
      fontWeight={700}
      htmlFor={name}
    >
      {`${label}:`}
    </Typography>
    {children}
  </Box>
)

export default Field

import React, { FC } from 'react'
import { Box, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'
import { useFilters } from '../../../store/filters'

interface ICategory {
  category: string
}

const Category:FC<ICategory> = ({ category }) => {
  const filterCategories = useFilters(state => state.filters.categories)
  const toggleCategory = useFilters(state => state.toggleCategory)

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      gap={1}
      onClick={() => toggleCategory(category)}
      sx={{
        cursor: 'pointer',
      }}
    >
      <Checkbox
        checked={filterCategories.includes(category)}
        sx={{ padding: 0 }}
      />
      <Typography textAlign="left">{category}</Typography>
    </Box>
  )
}

export default Category

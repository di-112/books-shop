import React, { FC } from 'react'
import { Box, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'
import { categoriesList } from './resources/categoriesList'
import FilterBlock from '../../entities/FilterBlock'

interface ICategoryFilterBlock {
  chosenCategories: string[],
  setChosenCategories: React.Dispatch<string[]>
}

const CategoryFilter:FC<ICategoryFilterBlock> = ({
  chosenCategories,
  setChosenCategories,
}) => {
  const toggleCategory = (category: string) => {
    if (chosenCategories.includes(category)) {
      setChosenCategories(chosenCategories.filter(item => item !== category))

      return
    }
    setChosenCategories([...chosenCategories, category])
  }

  return (
    <FilterBlock title="Категория">
      <Box
        gap={1}
        display="flex"
        flexDirection="column"
      >
        {categoriesList.map(category => (
          <Box
            key={category}
            display="flex"
            alignItems="flex-start"
            gap={1}
            onClick={() => toggleCategory(category)}
            sx={{
              cursor: 'pointer',
            }}
          >
            <Checkbox
              checked={chosenCategories.includes(category)}
              sx={{ padding: 0 }}
            />
            <Typography textAlign="left">{category}</Typography>
          </Box>
        ))}
      </Box>
    </FilterBlock>
  )
}

export default CategoryFilter

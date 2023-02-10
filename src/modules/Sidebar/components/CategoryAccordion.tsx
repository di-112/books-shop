import React, { FC } from 'react'
import { Box, Checkbox } from '@mui/material'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionSummary, AccordionDetails } from '../../../ui/Accordion'
import { categories } from '../../../resources/categories'

interface ICategoryAccordion {
  chosenCategories: string[],
  toggleCategory: (category: string) => void
}

const CategoryAccordion: FC<ICategoryAccordion> = ({
  chosenCategories,
  toggleCategory,
}) => (
  <Accordion defaultExpanded>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Категория</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box
        gap={1}
        display="flex"
        flexDirection="column"
      >
        {categories.map(category => (
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
              checked={chosenCategories.includes(category)}
              sx={{ padding: 0 }}
            />
            <Typography textAlign="left">{category}</Typography>
          </Box>
        ))}
      </Box>
    </AccordionDetails>
  </Accordion>
)
export default CategoryAccordion

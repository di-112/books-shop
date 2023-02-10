import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import { Box, Drawer, Slider } from '@mui/material'
import Typography from '@mui/material/Typography'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { categories } from '../../resources/categories'
import Category from './components/Category'

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 150,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 300,
    left: 32,
    bottom: 120,
    padding: theme.spacing(2),
    top: 'calc(2 * var(--header-height) - 32px)',
    border: 'none',
    height: 'calc(100vh - 2 * var(--header-height))',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    boxSizing: 'border-box',
    backgroundColor: alpha(theme.palette.common.white, 0.5),
  },
}))

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 0,
  boxShadow: 'none',
}))

const StyledAccordion = styled(Accordion)(() => ({
  borderRadius: 0,
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
}))

const Sidebar = () => (
  <StyledDrawer
    variant="persistent"
    hideBackdrop
    anchor="left"
    open
  >
    <Typography
      fontWeight={700}
      variant="body1"
      textAlign="left"
    >
      Фильтр
    </Typography>
    <Box>
      <StyledAccordion defaultExpanded>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Категория</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Box
            gap={1}
            display="flex"
            flexDirection="column"
          >
            {categories.map(category => <Category category={category} />)}
          </Box>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion defaultExpanded>
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Цена</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <Box
            gap={1}
            display="flex"
            flexDirection="column"
          >
            <Slider
              min={0}
              max={100}
              aria-label="Фильтр цены"
            />
          </Box>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  </StyledDrawer>
)

export default Sidebar

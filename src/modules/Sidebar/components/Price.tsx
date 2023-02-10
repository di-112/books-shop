import React, { FC } from 'react'
import { Box, Slider } from '@mui/material'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { styled } from '@mui/material/styles'
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion'

interface IPriceAccordion {
  prices: number[]
  isDisabled: boolean,
  setPrices: (arg: number[]) => void
}

const StyledSlider = styled(Slider)(({ theme }) => ({
  width: '80%',
  margin: '0 auto',
  '.MuiSlider-valueLabel': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 4,
    padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
  },
}))

const Price:FC<IPriceAccordion> = ({ prices, setPrices, isDisabled }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrices(newValue as number[])
  }

  return (
    <Accordion
      defaultExpanded={!isDisabled}
      disabled={isDisabled}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography fontWeight={700}>Цена</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          gap={2}
          display="flex"
          alignItems="center"
        >
          <StyledSlider
            getAriaLabel={() => 'Диапазон цены'}
            value={prices}
            min={0}
            max={5000}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={() => `${prices} ₽`}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default Price

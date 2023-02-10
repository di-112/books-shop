import React, { FC } from 'react'
import { Box, Slider } from '@mui/material'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionSummary, AccordionDetails } from '../../../ui/Accordion'

interface IPriceAccordion {
  prices: number[]
  setPrices: (arg: number[]) => void
}

const PriceAccordion:FC<IPriceAccordion> = ({ prices, setPrices }) => {
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPrices(newValue as number[])
  }

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Цена</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          gap={2}
          display="flex"
          alignItems="center"
        >
          <Slider
            getAriaLabel={() => 'Temperature range'}
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

export default PriceAccordion

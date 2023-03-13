import React, { FC } from 'react'
import { Box, Rating as InputRating } from '@mui/material'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion'

interface IRatingAccordion {
  rating: number
  isDisabled: boolean
  setRating: (arg: number) => void
}

const Rating: FC<IRatingAccordion> = ({
  rating,
  setRating,
  isDisabled,
}) => (
  <Accordion
    defaultExpanded={!isDisabled}
    disabled={isDisabled}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography fontWeight={700}>Рейтинг</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
      >
        <Typography textAlign="left">Мин: </Typography>
        <InputRating
          name="filter-rating"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue as number)
          }}
        />
      </Box>
    </AccordionDetails>
  </Accordion>
)

export default Rating

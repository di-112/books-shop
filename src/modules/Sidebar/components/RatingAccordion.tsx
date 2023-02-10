import React, { FC } from 'react'
import { Box, Rating } from '@mui/material'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '../../../ui/Accordion'

interface IRatingAccordion {
  rating: number,
  setRating: (arg: number) => void
}

const RatingAccordion:FC<IRatingAccordion> = () => {
  const [rating, setRating] = React.useState<number | null>(2)

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Рейтинг</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Typography textAlign="left">Мин: </Typography>
          <Rating
            name="filter-rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue)
            }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default RatingAccordion

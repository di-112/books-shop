import React, { FC } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { Accordion, AccordionDetails, AccordionSummary } from './Accordion'

interface IFilterBlock {
  isDisabled?: boolean,
  title: string,
  children: React.ReactElement
}

const FilterBlock:FC<IFilterBlock> = ({
  isDisabled,
  title,
  children,
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
      <Typography fontWeight={700}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box
        gap={1}
        display="flex"
        flexDirection="column"
      >
        {children}
      </Box>
    </AccordionDetails>
  </Accordion>
)

FilterBlock.propTypes = {

}

export default FilterBlock

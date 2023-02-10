import { styled } from '@mui/material/styles'
import AccordionMUI from '@mui/material/Accordion'
import AccordionSummaryMUI from '@mui/material/AccordionSummary'
import AccordionDetailsMUI from '@mui/material/AccordionDetails'

export const AccordionSummary = styled(AccordionSummaryMUI)(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 0,
  boxShadow: 'none',
}))

export const Accordion = styled(AccordionMUI)(({ theme }) => ({
  borderRadius: 0,
  marginBottom: theme.spacing(2),
  minHeight: '48px !important',
  boxShadow: 'none',

  '& .MuiAccordionSummary-content.MuiAccordionSummary-content': {
    margin: 0,
  },

  '&:before': {
    display: 'none',
  },
}))

export const AccordionDetails = AccordionDetailsMUI

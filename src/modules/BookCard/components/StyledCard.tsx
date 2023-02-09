import React from 'react';
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";

const StyledCard = styled(Card)(({theme}) => ({
  width: 216,
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  '& .MuiCardMedia-media': {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(2)
  },

  '& .MuiCardActions-spacing': {
    flexGrow: 1,
    alignItems: 'flex-end',
    padding: theme.spacing(2)
  },

  '& .MuiCardContent-root': {
    paddingBottom: 0
  }
}))
export default StyledCard;

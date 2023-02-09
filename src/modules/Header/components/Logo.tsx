import React from 'react';
import {styled} from "@mui/material/styles";
import logoPng from '../../../assets/logo.png'
import {useNavigate} from "react-router-dom";

const LogoImg = styled('img')(({theme}) => ({
  width: 42,
  borderRadius: '50%',
  border: `2px solid ${theme.palette.common.black}`,
  padding: '0 !important',
  cursor: 'pointer',
  marginRight: theme.spacing(2)
}))

const Logo = () => {
  const navigate = useNavigate()
  const goHome = () => navigate('/')

  return (
      <LogoImg
        src={logoPng}
        alt={'Логотип'}
        onClick={goHome}
      />
  )
}

export default Logo;

import React, { FC } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { useNavigate } from 'react-router-dom'
import { useCartBooksStore } from '../../../store/cart'

const SuccessContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
}))

interface ISuccess {
  setIsSuccess: (bool: boolean) => void
}

const Success:FC<ISuccess> = ({ setIsSuccess }) => {
  const navigate = useNavigate()

  const clearCart = useCartBooksStore(state => state.clearCart)

  const backHandler = () => {
    setIsSuccess(false)
    clearCart()
    navigate('/')
  }

  return (
    <SuccessContainer>
      <CheckCircleIcon
        color="success"
        sx={{
          width: 48,
          height: 48,
        }}
      />
      <Typography fontWeight={700}>Заявка принята</Typography>
      <Button
        variant="contained"
        onClick={backHandler}
      >
        Вернуться к покупкам
      </Button>
    </SuccessContainer>
  )
}

export default Success

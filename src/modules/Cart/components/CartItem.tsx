import React, { FC } from 'react'
import { Box, useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useCartBooksStore } from '../../../store/cart'
import { IBook } from '../../../models/book.models'

interface ICartItem {
  book: IBook
}

const CartItem: FC<ICartItem> = ({ book }) => {
  const incrementBookCount = useCartBooksStore(state => state.incrementBookCount)
  const decrementBookCount = useCartBooksStore(state => state.decrementBookCount)

  const plusHandler = () => incrementBookCount(book.id)
  const minusHandler = () => decrementBookCount(book.id)

  const theme = useTheme()

  return (
    <Box
      gap={4}
      display="flex"
    >
      <Box
        width={80}
        sx={{
          alignSelf: 'flex-start',
          [theme.breakpoints.down('md')]: {
            width: '10%',
          },
        }}
      >
        <img
          width="100%"
          src={book.picture}
          alt={book.title}
        />
      </Box>
      <Typography
        variant="body2"
        fontWeight={700}
        alignSelf="center"
        width="40%"
      >
        {book.title}
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          variant="body2"
          fontWeight={700}
        >
          Количество
        </Typography>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          alignItems="center"
          gap={1.5}
        >
          <Button
            variant="contained"
            color="error"
            sx={{ minWidth: 24, width: 24, height: 32 }}
            onClick={minusHandler}
          >
            -
          </Button>
          <Typography
            variant="body2"
          >
            {book.count}
          </Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ minWidth: 24, width: 24, height: 32 }}
            onClick={plusHandler}
          >
            +
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="body2"
          fontWeight={700}
        >
          Цена
        </Typography>
        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
        >
          <Typography
            variant="body2"
            fontWeight={700}
          >
            {`${book.price * book.count} ₽`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default CartItem

import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Rating } from '@mui/material'
import { IBook } from '../../../models/book.models'

interface IBookInfo {
  book: IBook
}

const BookInfo: FC<IBookInfo> = ({
  book,
}) => {
  const {
    price, rating, title, authors, oldPrice,
  } = book

  return (
    <>
      <Typography
        mb={2}
        gutterBottom
        fontWeight={700}
        align="left"
        variant="h6"
      >
        {price !== oldPrice ? (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Typography
              fontWeight={700}
              variant="h6"
              sx={{ color: 'error.main' }}
            >
              {`${price} ₽`}
            </Typography>
            <Typography
              fontWeight={700}
              variant="h6"
              sx={{ textDecoration: 'line-through' }}
            >
              {` ${oldPrice} ₽ `}
            </Typography>
          </Box>
        ) : `${price} ₽`}
      </Typography>
      <Typography
        mb={2}
        gutterBottom
        align="left"
        variant="subtitle1"
      >
        {title}
      </Typography>
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          mb={1}
          variant="body2"
          color="text.secondary"
        >
          <strong>Автор:</strong>
          {` ${authors[0]?.firstName} ${authors[0]?.lastName}`}
        </Typography>
        <Typography
          mb={1}
          variant="body2"
          color="text.secondary"
        >
          <strong>Категория:</strong>
          {` ${book.category.title}`}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
        >
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <strong>Рейтинг:</strong>
          </Typography>
          <Rating
            name="read-only"
            value={Math.ceil(Number(rating.count))}
            readOnly
          />
        </Box>
      </Box>
    </>
  )
}

export default BookInfo

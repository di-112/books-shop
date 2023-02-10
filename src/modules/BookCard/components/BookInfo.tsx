import React, { FC } from 'react'
import Typography from '@mui/material/Typography'
import {
  Box, Rating, Tooltip, tooltipClasses, TooltipProps,
} from '@mui/material'
import { alpha, styled } from '@mui/material/styles'
import { IBook } from '../../../models/book.models'

interface IBookInfo {
  book: IBook
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: `1px solid ${alpha(theme.palette.common.black, 0.15)}`,
  },
}))

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
        sx={{
          textAlign: 'left',
          cursor: 'default',
        }}
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
      <HtmlTooltip title={title}>
        <Typography
          mb={2}
          gutterBottom
          sx={{
            textAlign: 'left',
            cursor: 'default',
          }}
          variant="subtitle1"
        >
          {title}
        </Typography>
      </HtmlTooltip>
      <Box sx={{ textAlign: 'left' }}>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
        >
          <strong>Автор:</strong>
          {' '}
          {authors[0]?.firstName}
          {' '}
          {authors[0]?.lastName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          mb={1}
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <strong>Категория:</strong>
          {' '}
          {book.category.title}
        </Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
        }}
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

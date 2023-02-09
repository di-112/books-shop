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
  book: {
    price, rating, title, author,
  },
}) => (
  <>
    <HtmlTooltip title={title}>
      <Typography
        mb={2}
        gutterBottom
        fontWeight={700}
        sx={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
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
        {author}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        mb={1}
      >
        <strong>Цена:</strong>
        {' '}
        {price}
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
          value={rating}
          readOnly
        />
      </Box>
    </Box>
  </>
)

export default BookInfo

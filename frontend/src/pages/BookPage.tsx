import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box, Rating, styled, Typography, useTheme,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import PageWrapper from '../modules/PageWrapper'
import { useBookQuery } from '../hooks/useBooksQuery'
import EmptyData from '../modules/EmptyData'

const BookContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
  padding: theme.spacing(4),
  justifyContent: 'space-between',
  background: alpha(theme.palette.common.white, 0.7),
}))

const BookColumn = styled(Box)(() => ({
  flex: '0 0 33%',
  display: 'flex',
  flexDirection: 'column',
}))

const BooksCharacteristics = [
  {
    title: 'ID товата',
    key: 'id',
  },
  {
    title: 'Издательство',
    key: 'publisher.title',
  },
  {
    title: 'Серия',
    key: 'id',
  },
  {
    title: 'Год издания',
    key: 'yearPublishing',
  },
  {
    title: 'Количество страниц',
    key: 'pages',
  },
]

const BookPage = () => {
  const { id = 0 } = useParams()

  const theme = useTheme()

  const { data: book, isLoading } = useBookQuery(+id)

  return (
    <PageWrapper
      isLoading={isLoading}
      withoutFilters
      widthContentWrapper={1650}
    >
      <section style={{ height: '100%' }}>
        {book ? (
          <BookContainer>
            <BookColumn
              alignItems="center"
            >
              <img
                src={book.picture.replace('200x280', '297x450')}
                alt={book.title}
              />
            </BookColumn>
            <BookColumn gap={2}>
              <Box
                display="flex"
                gap={2}
              >
                <Rating
                  value={Math.ceil(Number(book.rating.count))}
                />
                <Typography
                  textAlign="left"
                  variant="subtitle1"
                  color="#757575"
                >
                  {`( оценок: ${book.rating.votes})`}
                </Typography>
              </Box>
              <Box>
                <Typography
                  textAlign="left"
                  variant="h5"
                >
                  {book.title}
                </Typography>
              </Box>
              <Typography
                textAlign="left"
                variant="body1"
                color={theme.palette.primary.main}
              >
                {book.authors.map(author => `${author.firstName} ${author.lastName}`).join(', ')}
              </Typography>
              <Box
                gap={1}
                display="flex"
                flexDirection="column"
              >
                {
                  BooksCharacteristics.map(characteristic => (
                    <Box
                      display="flex"
                      gap={2}
                    >
                      <Typography
                        sx={{
                          minWidth: 250,
                        }}
                        textAlign="left"
                        variant="subtitle1"
                        color="#757575"
                      >
                        {characteristic.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                      >
                        {book[characteristic.key]}
                      </Typography>
                    </Box>
                  ))
                }
              </Box>
            </BookColumn>
            <BookColumn>
              {book.price}
            </BookColumn>
          </BookContainer>
        ) : <EmptyData />}
      </section>
    </PageWrapper>
  )
}

export default BookPage

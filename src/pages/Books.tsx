import React from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooks, useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import PageWrapper from '../modules/PageWrapper'

const Books = () => {
  useBooksQuery()

  const allBooks = useBooks()

  const { searchBooks, searchValue } = useSearchBooksStore(state => state)

  return (
    <PageWrapper title="Каталог">
      <Grid
        container
        rowGap={4}
        component="section"
      >
        {(searchValue ? searchBooks : allBooks).map(book => (
          <Grid
            md={3}
            xs={6}
            component="article"
          >
            <BookCard
              key={book.title}
              book={book}
            />
          </Grid>
        ))}
      </Grid>
    </PageWrapper>
  )
}

export default Books

import React from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'

const Books = () => {
  const { data: allBooks = [] } = useBooksQuery()

  const { searchBooks, searchValue } = useSearchBooksStore(state => state)

  return (
    <Grid
      container
      rowGap={4}
    >
      {(searchValue ? searchBooks : allBooks).map(book => (
        <Grid xs={3}>
          <BookCard
            key={book.title}
            book={book}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default Books

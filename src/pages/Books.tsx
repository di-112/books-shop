import React from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooksQuery } from '../hooks/useBooksQuery'

const Books = () => {
  const { data: books = [] } = useBooksQuery()

  return (
    <Grid
      container
      rowGap={4}
    >
      {books.map(book => (
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

import React from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooks, useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import Sidebar from '../modules/Sidebar'

const Books = () => {
  useBooksQuery()

  const allBooks = useBooks()

  const { searchBooks, searchValue } = useSearchBooksStore(state => state)

  return (
    <>
      <Sidebar />
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
    </>
  )
}

export default Books

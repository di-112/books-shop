import React from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooks, useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import PageWrapper from '../modules/PageWrapper'
import EmptyData from '../modules/EmptyData'

const BooksPage = () => {
  const allBooks = useBooks()

  const { isLoading } = useBooksQuery()

  const { searchBooks, searchValue } = useSearchBooksStore(state => state)

  const booksForShow = searchValue ? searchBooks : allBooks

  return (
    <PageWrapper isLoading={isLoading}>
      <Grid
        pt={4}
        spacing={4}
        container
        width="100%"
        height="100%"
        component="section"
      >
        {booksForShow.length
          ? booksForShow.map(book => (
            <Grid
              item
              lg={12}
              xl={6}
              key={book.id}
              width="100%"
              component="article"
            >
              <BookCard
                key={book.title}
                book={book}
              />
            </Grid>
          ))
          : <EmptyData />}
      </Grid>

    </PageWrapper>
  )
}

export default BooksPage

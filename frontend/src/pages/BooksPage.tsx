import React, { useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import PageWrapper from '../modules/PageWrapper'
import EmptyData from '../modules/EmptyData'

const PAGE_SIZE = 10

const BooksPage = () => {
  const [page, setPage] = useState(1)

  const { data: allBooks = [], isLoading } = useBooksQuery(page)

  const { searchBooks, searchValue } = useSearchBooksStore(state => state)

  const booksForShow = searchValue ? searchBooks : allBooks

  return (
    <PageWrapper isLoading={isLoading}>
      <Grid
        pt={4}
        spacing={4}
        container
        width="100%"
        flexGrow={booksForShow.length ? 0 : 1}
        component="section"
        mb={4}
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
      <Pagination
        page={page}
        count={PAGE_SIZE}
        color="primary"
        onChange={(e, value) => setPage(value)}
        shape="rounded"
      />
    </PageWrapper>
  )
}

export default BooksPage

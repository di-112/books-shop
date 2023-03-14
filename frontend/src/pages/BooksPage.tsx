import React, { useEffect, useState } from 'react'
import { Grid, Pagination } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBooksQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import PageWrapper from '../modules/PageWrapper'
import EmptyData from '../modules/EmptyData'
import { useFiltersStore } from '../store/filters'

const PAGE_SIZE = 10

const BooksPage = () => {
  const { searchValue } = useSearchBooksStore(state => state)
  const { filters } = useFiltersStore(state => state)
  const [page, setPage] = useState(1)

  const { data, isLoading } = useBooksQuery(page, searchValue, filters)

  const books = data?.books || []

  const countPage = data ? Math.ceil(data.total / PAGE_SIZE) : 1

  useEffect(() => {
    setPage(1)
  }, [searchValue])

  return (
    <PageWrapper isLoading={isLoading}>
      <Grid
        pt={4}
        mb={4}
        spacing={4}
        container
        width="100%"
        component="section"
        flexGrow={books.length ? 0 : 1}
      >
        {books.length
          ? books.map(book => (
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
        disabled={countPage === 1}
        count={countPage}
        color="primary"
        onChange={(e, value) => setPage(value)}
        shape="rounded"
      />
    </PageWrapper>
  )
}

export default BooksPage

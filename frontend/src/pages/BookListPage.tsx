import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import BookCard from '../modules/BookCard'
import { useBookListQuery } from '../hooks/useBooksQuery'
import { useSearchBooksStore } from '../store/search'
import PageWrapper from './ui/PageWrapper'
import EmptyData from '../shared/ui/EmptyData'
import { usePageStore } from '../store/page'
import Pagination from '../modules/Pagination'
import { useFiltersStore } from '../widgets/Filters/model/filters'

const BookListPage = () => {
  const { searchValue } = useSearchBooksStore(state => state)
  const { filters } = useFiltersStore(state => state)
  const { page, setPage, setCountPage } = usePageStore(state => state)
  const { data, isLoading } = useBookListQuery(page, searchValue, filters)

  const books = data?.books || []

  useEffect(() => {
    setPage(1)
  }, [searchValue])

  useEffect(() => {
    setCountPage(data ? Math.ceil(data.total / 10) : 1)
  }, [data])

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
      <Pagination />
    </PageWrapper>
  )
}

export default BookListPage

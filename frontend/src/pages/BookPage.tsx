import React from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from '../modules/PageWrapper'
import { useBookQuery } from '../hooks/useBooksQuery'
import BookCard from '../modules/BookCard'

const BookPage = () => {
  const { id = 0 } = useParams()

  const { data: book, isLoading } = useBookQuery(+id)

  return (
    <PageWrapper
      isLoading={isLoading}
      withoutFilters
    >
      <section>
        {book && <BookCard book={book} />}
      </section>
    </PageWrapper>
  )
}

export default BookPage

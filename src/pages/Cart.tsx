import React from 'react'
import { Stack } from '@mui/material'
import { useCartBooksStore } from '../store/cart'
import { useBooks } from '../hooks/useBooksQuery'

const Cart = () => {
  const allBooks = useBooks()

  const booksIds = useCartBooksStore(state => state.booksIds)

  const chosenBooks = allBooks.filter(book => booksIds.includes(book.id))

  return (
    <Stack spacing={2}>
      {chosenBooks?.map(book => <div key={book.id}>{book.title}</div>)}
    </Stack>
  )
}

export default Cart

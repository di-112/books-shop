import React from 'react'
import { Stack } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { IBook } from '../models/book.models'
import { useCartBooksStore } from '../store/cartBooks'

const Cart = () => {
  const client = useQueryClient()

  const booksIds = useCartBooksStore(state => state.booksIds)

  const chosenBooks = client.getQueryData<IBook[]>(['books'])?.filter(book => booksIds.includes(book.id))

  return (
    <Stack spacing={2}>
      {chosenBooks?.map(book => <div key={book.id}>{book.title}</div>)}
    </Stack>
  )
}

export default Cart

import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { getBooks } from '../api/api'
import { IBook } from '../models/book.models'
import { useFiltersStore } from '../store/filters'

export const useBooksQuery = () => {
  const { enqueueSnackbar } = useSnackbar()

  const data = useQuery<IBook[], Error>({
    queryKey: ['books'],
    queryFn: getBooks,
    staleTime: 60000 * 5,
    retry: false,
  })

  useEffect(() => {
    if (data.isError) {
      enqueueSnackbar('Не удалось получить список книг', { variant: 'error' })
    }
  }, [data.isError])

  return data
}

export const useBooks = () => {
  const client = useQueryClient()

  const filters = useFiltersStore(state => state.filters)

  const allBooks = client.getQueryData<IBook[]>(['books']) ?? []

  const categories = filters?.categories
  const rating = filters?.rating || 0
  const { min = 0, max = 10000 } = filters?.price || {}

  if (categories?.length) {
    return allBooks.filter(book => {
      const isCategory = categories.some(category => book.category
        .title.toLowerCase().includes(category.toLowerCase()))

      const isRating = Number(book.rating.count) >= rating

      const isPrice = book.price >= min && book.price <= max

      return isCategory && isRating && isPrice
    })
  }

  return allBooks
}

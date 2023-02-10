import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getBooks } from '../api/api'
import { IBook } from '../models/book.models'
import { useFilters } from '../store/filters'

export const useBooksQuery = () => useQuery<IBook[], Error>({
  queryKey: ['books'],
  queryFn: getBooks,
  staleTime: 60000 * 5,
})

export const useBooks = () => {
  const client = useQueryClient()

  const filters = useFilters(state => state.filters)

  const allBooks = client.getQueryData<IBook[]>(['books']) ?? []

  const categories = filters?.categories

  if (categories?.length) {
    return allBooks.filter(book => categories.some(category => book.category
      .title.toLowerCase().includes(category.toLowerCase())))
  }

  return allBooks
}

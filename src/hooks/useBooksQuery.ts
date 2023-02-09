import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../api/api'
import { IBook } from '../models/book.models'

export const useBooksQuery = () => useQuery<IBook[], Error>({
  queryKey: ['books'],
  queryFn: getBooks,
  staleTime: 60000 * 5,
})

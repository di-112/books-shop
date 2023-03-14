import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { getBooks } from '../api/api'
import { IBooksQuery } from '../models/book.models'
import { IFilters } from '../store/filters'

export const useBooksQuery = (page: number, search?: string, filters?: IFilters) => {
  const { enqueueSnackbar } = useSnackbar()

  const response = useQuery<IBooksQuery, Error>({
    queryKey: ['books', page, search, filters],
    queryFn: getBooks,
    keepPreviousData: true,
    staleTime: 60000 * 5,
    retry: false,
  })

  useEffect(() => {
    if (response.isError) {
      enqueueSnackbar('Не удалось получить список книг', { variant: 'error' })
    }
  }, [response.isError])

  return response
}

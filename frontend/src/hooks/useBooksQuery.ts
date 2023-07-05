import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'
import { getBook, getBooks } from '../shared/api/axiosBase'
import { IBook, IBooksQuery } from '../models/book.models'
import { IFilters } from '../widgets/Filters/model/filters'

export const useBookListQuery = (page: number, search?: string, filters?: IFilters) => {
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

export const useBookQuery = (id: number) => {
  const { enqueueSnackbar } = useSnackbar()

  const response = useQuery<IBook, Error>({
    queryKey: ['books', id],
    queryFn: getBook,
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

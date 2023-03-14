import axios from 'axios'
import { QueryFunctionContext } from '@tanstack/react-query'
import { IBooksQuery } from '../models/book.models'

const booksApi = axios.create({
  baseURL: 'http://localhost:6500/api/books',
})

export const getBooks = (queryData: QueryFunctionContext) => booksApi
  .post<IBooksQuery>('', {
  limit: 10,
  page: queryData.queryKey[1],
  search: queryData.queryKey[2],
  filters: queryData.queryKey[3],
}).then(response => response.data)

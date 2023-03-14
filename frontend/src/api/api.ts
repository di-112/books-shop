import axios from 'axios'
import { QueryFunctionContext } from '@tanstack/react-query'
import { IBook, IBooksQuery } from '../models/book.models'

const booksApi = axios.create({
  baseURL: 'https://books-shop-jet.vercel.app/api',
})

export const getBooks = (queryData: QueryFunctionContext) => booksApi
  .post<IBooksQuery>('', {
  limit: 10,
  page: queryData.queryKey[1],
  search: queryData.queryKey[2],
  filters: queryData.queryKey[3],
}).then(response => response.data)

export const getBook = (queryData: QueryFunctionContext) => booksApi
  .get<IBook>('/book', {
  params: {
    id: queryData.queryKey[1],
  },
}).then(response => response.data)

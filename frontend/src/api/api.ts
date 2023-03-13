import axios from 'axios'
import { QueryFunctionContext } from '@tanstack/react-query'
import { IBook } from '../models/book.models'

const booksApi = axios.create({
  baseURL: 'http://localhost:6500/api/books',
})

export const getBooks = (queryData: QueryFunctionContext) => booksApi
  .get<IBook[]>(`?limit=10&page=${queryData.queryKey[1]}`).then(response => response.data)

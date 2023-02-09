import axios from "axios";
import { IBook } from "../models/book.models";

const booksApi = axios.create({
  baseURL: 'https://web-shop-fd168-default-rtdb.firebaseio.com/books.json'
})

export const getBooks = () => booksApi.get<IBook[]>('').then(response => response.data)

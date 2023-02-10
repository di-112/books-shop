import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { IBook } from '../models/book.models'

interface CartBooksState {
  books: IBook[],
  addBook: (book: IBook) => void,
  removeBook: (id: number) => void,
  incrementBookCount: (id: number) => void,
  decrementBookCount: (id: number) => void,
}

export const useCartBooksStore = create(
  persist(immer<CartBooksState>(set => ({
    books: [],
    addBook: (book: IBook) => {
      set(state => {
        if (!state.books.map(item => item.id).includes(book.id)) {
          state.books.push({
            ...book,
            count: 1,
          })
        }
      })
    },
    incrementBookCount: (id: number) => {
      set(state => {
        const foundBook = state.books.find(book => book.id === id)

        if (foundBook) {
          foundBook.count += 1
        }
      })
    },
    decrementBookCount: (id: number) => {
      set(state => {
        const foundBook = state.books.find(book => book.id === id)

        if (foundBook) {
          if (foundBook.count === 1) {
            // eslint-disable-next-line no-param-reassign
            state.books = state.books.filter(book => book.id !== id)
            return
          }
          foundBook.count -= 1
        }
      })
    },
    removeBook: (id: number) => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.books = state.books.filter(book => book.id !== id)
      })
    },
  })), {
    name: 'cartBooks',
  }),
)

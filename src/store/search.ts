import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import { IBook } from '../models/book.models'

interface CartBooksState {
  searchValue: string,
  setSearchValue: (value : string) => void,
  searchBooks: IBook[],
  setSearchBooks: (books: IBook[]) => void,
}

export const useSearchBooksStore = create(
  persist(immer<CartBooksState>(set => ({
    searchValue: '',
    setSearchValue: value => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.searchValue = value
      })
    },
    searchBooks: [],
    setSearchBooks: books => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.searchBooks = books
      })
    },
  })), {
    name: 'searchBooks',
  }),
)

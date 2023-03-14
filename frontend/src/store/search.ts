import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

interface CartBooksState {
  searchValue: string,
  setSearchValue: (value : string) => void,
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
  })), {
    name: 'searchBooks',
  }),
)

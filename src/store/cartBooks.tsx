import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {persist} from "zustand/middleware";

interface CartBooksState {
  booksIds: number[],
  addBook: (id: number) => void,
  removeBook: (id: number) => void,
}

export const useCartBooksStore = create(
  persist(
    immer<CartBooksState>((set) => ({
      booksIds: [],
      addBook: (id: number) => {
        set((state) => {
          if (!state.booksIds.includes(id)) {
            state.booksIds.push(id)
          }
        })
      },
      removeBook: (id: number) => {
        set((state) => {
          state.booksIds = state.booksIds.filter(bookId => bookId !== id)
        })
      }
    })), {
      name: 'cartBooks'
    })
)

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

export interface IFilters {
  categories: string[],
  rating: number,
  price: {
    min?: number,
    max?: number
  }
}

interface IFiltersState {
  filters: IFilters,
  setCategories: (categories: string[]) => void,
  setPrice: (obj : { min?: number, max?: number }) => void,
  setRating: (value: number) => void,
}

export const useFiltersStore = create(
  persist(immer<IFiltersState>(set => ({
    filters: {
      rating: 1,
      categories: [],
      price: {
        min: 0,
        max: 2000,
      },
    },
    setCategories: categories => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.filters.categories = categories
      })
    },
    setPrice: ({ min, max }) => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.filters.price = {
          min,
          max,
        }
      })
    },
    setRating: value => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.filters.rating = value
      })
    },
  })), {
    name: 'filtersBooks',
  }),
)

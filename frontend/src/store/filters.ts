import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

export interface IFilters {
  categories: string[],
  isActive: boolean,
  rating: number,
  price: {
    min: number,
    max: number
  }
}

interface IFiltersState {
  filters: IFilters,
  reset: () => void,
  setCategories: (categories: string[]) => void,
  setPrice: (obj: { min: number, max: number }) => void,
  setIsActive: (bool: boolean) => void,
  setRating: (value: number) => void,
}

export const initialFilters = {
  rating: 0,
  isActive: false,
  categories: [],
  price: {
    min: 0,
    max: 2000,
  },
}

export const useFiltersStore = create(
  persist(immer<IFiltersState>(set => ({
    filters: initialFilters,
    reset: () => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.filters = initialFilters
      })
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
    setIsActive: bool => {
      set(state => {
        // eslint-disable-next-line no-param-reassign
        state.filters.isActive = bool
      })
    },
  })), {
    name: 'filtersBooks',
  }),
)

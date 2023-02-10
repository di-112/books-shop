import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

export interface IFilters {
  categories: string[],
  price: {
    min?: number,
    max?: number
  }
}

interface IFiltersState {
  filters: IFilters,
  toggleCategory: (category: string) => void,
  setPrice: (obj : { min?: number, max?: number }) => void,
}

export const useFilters = create(
  persist(immer<IFiltersState>(set => ({
    filters: {
      categories: [],
      price: {
        min: 0,
        max: 2000,
      },
    },
    toggleCategory: category => {
      set(state => {
        if (!state.filters.categories.includes(category)) {
          // eslint-disable-next-line no-param-reassign
          state.filters.categories.push(category)
          return
        }

        // eslint-disable-next-line no-param-reassign
        state.filters.categories = state.filters.categories.filter(item => item !== category)
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
  })), {
    name: 'filtersBooks',
  }),
)

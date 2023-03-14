import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'

interface IPageState {
  page: number,
  countPage: number,
  setCountPage: (value: number) => void,
  setPage: (value: number) => void
}

export const usePageStore = create(persist(immer<IPageState>(set => ({
  page: 1,
  countPage: 10,
  setPage: value => {
    set(state => {
      // eslint-disable-next-line no-param-reassign
      state.page = value
    })
  },
  setCountPage: value => {
    set(state => {
      // eslint-disable-next-line no-param-reassign
      state.countPage = value
    })
  },
})), {
  name: 'page',
}))

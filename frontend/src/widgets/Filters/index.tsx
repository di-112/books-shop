import React, { FC, useState } from 'react'
import { usePageStore } from '../../store/page'
import Aside from './ui/Aside'
import FiltersWrapper from './ui/FiltersWrapper'
import Title from './ui/Title'
import CategoryFilter from '../../features/CategoryFilter'
import PriceFilter from '../../features/PriceFilter'
import RatingFilter from '../../features/RatingFilter'
import Footer from './ui/Footer'
import { initialFilters, useFiltersStore } from './model/filters'

interface ISidebar {
  isDisabled?: boolean,
}

const Filters: FC<ISidebar> = ({ isDisabled = false }) => {
  const { price, categories, rating } = useFiltersStore(state => state.filters)

  const [prices, setPrices] = useState([price.min, price.max])
  const [chosenCategories, setChosenCategories] = useState(categories)
  const [chosenRating, setChosenRating] = useState(rating)
  const setPage = usePageStore(state => state.setPage)

  const {
    setPrice,
    setCategories,
    setRating,
    setIsActive,
    reset,
  } = useFiltersStore(state => state)

  const cancelHandler = () => {
    reset()
    setPage(1)
    setPrices([initialFilters.price.min, initialFilters.price.max])
    setChosenCategories(initialFilters.categories)
    setChosenRating(initialFilters.rating)
  }

  const okHandler = () => {
    setPage(1)
    setPrice({
      min: prices[0],
      max: prices[1],
    })
    setCategories(chosenCategories)
    setRating(chosenRating)
    setIsActive(true)
  }

  return (
    <Aside>
      <Title />
      <FiltersWrapper>
        <CategoryFilter
          chosenCategories={chosenCategories}
          setChosenCategories={setChosenCategories}
        />
        <PriceFilter
          prices={prices}
          isDisabled={isDisabled}
          setPrices={setPrices}
        />
        <RatingFilter
          rating={chosenRating}
          isDisabled={isDisabled}
          setRating={setChosenRating}
        />
        <Footer
          onOk={okHandler}
          onCancel={cancelHandler}
          isDisabled={isDisabled}
        />
      </FiltersWrapper>
    </Aside>
  )
}

export default Filters

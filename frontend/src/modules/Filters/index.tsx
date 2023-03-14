import React, { FC, useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Category from './components/Category'
import Price from './components/Price'
import Rating from './components/Rating'
import { useFiltersStore } from '../../store/filters'

interface ISidebar {
  isDisabled?: boolean,
}

const Aside = styled(Box)<ISidebar>(({ theme }) => ({
  width: 300,
  flexShrink: 0,
  position: 'sticky',
  top: 68,
  border: 'none',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingBottom: theme.spacing(8),
  height: 'calc(100vh - 2 * var(--header-height))',
  backgroundColor: alpha(theme.palette.common.white, 0.5),

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const FiltersWrapper = styled(Box)(() => ({
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: 0,
  },
  height: 'calc(100% - 48px)',
}))

const Filters: FC<ISidebar> = ({ isDisabled = false }) => {
  const { price, categories } = useFiltersStore(state => state.filters)

  const [prices, setPrices] = useState([price.min || 0, price.max || 5000])
  const [chosenCategories, setChosenCategories] = useState(categories)
  const [chosenRating, setChosenRating] = useState(0)

  const {
    setPrice,
    setCategories,
    setRating,
    setIsActive,
    reset,
  } = useFiltersStore(state => state)

  const toggleCategory = (category: string) => {
    if (chosenCategories.includes(category)) {
      setChosenCategories(chosenCategories.filter(item => item !== category))

      return
    }
    setChosenCategories([...chosenCategories, category])
  }

  const okHandler = () => {
    setPrice({
      min: prices[0],
      max: prices[1],
    })
    setCategories(chosenCategories)
    setRating(chosenRating)
    setIsActive(true)
  }

  return (
    <Aside
      component="aside"
    >
      <Typography
        fontWeight={700}
        variant="body1"
        textAlign="left"
        mb={2}
      >
        Фильтр
      </Typography>
      <FiltersWrapper>
        <Category
          isDisabled={isDisabled}
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
        <Price
          prices={prices}
          isDisabled={isDisabled}
          setPrices={setPrices}
        />
        <Rating
          rating={chosenRating}
          isDisabled={isDisabled}
          setRating={setChosenRating}
        />
        <Button
          sx={{
            right: 16,
            bottom: 16,
            position: 'absolute',
          }}
          variant="contained"
          onClick={okHandler}
          disabled={isDisabled}
        >
          Подтвердить
        </Button>
        <Button
          sx={{
            left: 16,
            bottom: 16,
            position: 'absolute',
          }}
          color="error"
          variant="contained"
          onClick={reset}
          disabled={isDisabled}
        >
          Сбросить
        </Button>
      </FiltersWrapper>
    </Aside>
  )
}

export default Filters

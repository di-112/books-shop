import React, { useState } from 'react'
import { alpha, styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CategoryAccordion from './components/CategoryAccordion'
import PriceAccordion from './components/PriceAccordion'
import RatingAccordion from './components/RatingAccordion'
import { useFilters } from '../../store/filters'

const Aside = styled(Box)(({ theme }) => ({
  width: 300,
  flexShrink: 0,
  position: 'sticky',
  top: 68,
  border: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
  paddingBottom: 64,
  height: 'calc(100vh - 2 * var(--header-height))',
  backgroundColor: alpha(theme.palette.common.white, 0.5),
}))

const FiltersWrapper = styled(Box)(() => ({
  overflow: 'auto',
  '::-webkit-scrollbar': {
    width: 0,
  },
}))

const Sidebar = () => {
  const { price, categories } = useFilters(state => state.filters)

  const [prices, setPrices] = useState([price.min || 0, price.max || 5000])
  const [chosenCategories, setChosenCategories] = useState(categories)
  const [rating, setRating] = useState(0)

  const toggleCategory = (category: string) => {
    if (chosenCategories.includes(category)) {
      setChosenCategories(chosenCategories.filter(item => item !== category))

      return
    }
    setChosenCategories([...chosenCategories, category])
  }

  return (
    <Aside component="aside">
      <Typography
        fontWeight={700}
        variant="body1"
        textAlign="left"
        mb={2}
      >
        Фильтр
      </Typography>
      <FiltersWrapper>
        <CategoryAccordion
          chosenCategories={chosenCategories}
          toggleCategory={toggleCategory}
        />
        <PriceAccordion
          prices={prices}
          setPrices={setPrices}
        />
        <RatingAccordion
          rating={rating}
          setRating={setRating}
        />
        <Button
          sx={{
            right: 16,
            bottom: 16,
            position: 'absolute',
          }}
          variant="contained"
        >
          Подтвердить
        </Button>
      </FiltersWrapper>
    </Aside>
  )
}

export default Sidebar

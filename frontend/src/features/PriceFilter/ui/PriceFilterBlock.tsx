import React, { FC } from 'react'
import FilterBlock from '../../../entities/FilterBlock'
import BoxCenter from '../../../shared/ui/BoxCenter'
import { Slider } from './Slider'

interface IPriceFilterBlock {
  prices: number[]
  isDisabled: boolean,
  setPrices: (arg: number[]) => void
}

const PriceFilterBlock:FC<IPriceFilterBlock> = ({
  prices,
  setPrices,
  isDisabled,
}) => {
  const changePriceHandler = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setPrices(newValue)
    }
  }

  return (
    <FilterBlock
      title="Рейтинг"
      isDisabled={isDisabled}
    >
      <BoxCenter>
        <Slider
          getAriaLabel={() => 'Диапазон цены'}
          value={prices}
          min={0}
          max={5000}
          onChange={changePriceHandler}
          valueLabelDisplay="on"
          getAriaValueText={() => `${prices} ₽`}
        />
      </BoxCenter>
    </FilterBlock>
  )
}

export default PriceFilterBlock

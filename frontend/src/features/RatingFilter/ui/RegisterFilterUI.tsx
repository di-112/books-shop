import React, { FC } from 'react'
import { Rating } from '@mui/material'
import Typography from '@mui/material/Typography'
import FilterBlock from '../../../entities/FilterBlock'
import BoxCenter from '../../../shared/ui/BoxCenter'

interface IRegisterFilterBlock {
  rating: number,
  isDisabled: boolean,
  setRating: React.Dispatch<React.SetStateAction<number>>
}

const RegisterFilterBlock:FC<IRegisterFilterBlock> = ({
  rating,
  isDisabled,
  setRating,
}) => {
  const changeRatingHandler = (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue) {
      setRating(newValue)
    }
  }

  return (
    <FilterBlock
      title="Рейтинг"
      isDisabled={isDisabled}
    >
      <BoxCenter gap={1}>
        <BoxCenter>
          <Typography textAlign="left">Мин: </Typography>
          <Rating
            name="filter-rating"
            value={rating}
            onChange={changeRatingHandler}
          />
        </BoxCenter>
      </BoxCenter>
    </FilterBlock>
  )
}

export default RegisterFilterBlock

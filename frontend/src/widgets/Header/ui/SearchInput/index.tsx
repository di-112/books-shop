import React from 'react'
import SearchWrapper from './components/SearchWrapper'
import SearchIcon from './components/SearchIcon'
import StyledInputBase from './components/StyledInput'
import { useSearchBooksStore } from '../../../../store/search'

const SearchInput = () => {
  const {
    setSearchValue,
    searchValue,
  } = useSearchBooksStore(state => state)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value

    setSearchValue(newSearchValue)
  }

  return (
    <SearchWrapper>
      <SearchIcon />
      <StyledInputBase
        value={searchValue}
        onChange={changeHandler}
        placeholder="Поиск…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </SearchWrapper>
  )
}
export default SearchInput

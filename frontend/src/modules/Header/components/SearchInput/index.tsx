import React from 'react'
import SearchWrapper from './components/SearchWrapper'
import SearchIcon from './components/SearchIcon'
import StyledInputBase from './components/StyledInput'
import { useSearchBooksStore } from '../../../../store/search'
import { useBooks } from '../../../../hooks/useBooksQuery'

const SearchInput = () => {
  const {
    setSearchValue,
    searchValue,
    setSearchBooks,
  } = useSearchBooksStore(state => state)

  const allBooks = useBooks()

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchValue = e.target.value

    setSearchValue(newSearchValue)

    setSearchBooks(allBooks.filter(book => book.title.toLowerCase().includes(newSearchValue.toLowerCase())))
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

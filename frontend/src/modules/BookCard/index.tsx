import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import { IBook } from '../../models/book.models'
import BookInfo from './components/BookInfo'
import StyledCard from './components/StyledCard'
import { useCartBooksStore } from '../../store/cart'

interface IBookCard {
  book: IBook
}

const BookCard: FC<IBookCard> = ({ book }) => {
  const { books, addBook, removeBook } = useCartBooksStore()

  const isChosenBook = books.map(({ id }) => id).includes(book.id)

  const clickHandler = () => {
    if (isChosenBook) {
      removeBook(book.id)
    } else {
      addBook(book)
    }
  }

  return (
    <StyledCard>
      <CardMedia
        width={200}
        component="img"
        alt={book.title}
        image={book.picture}
      />
      <CardContent>
        <BookInfo
          key={book.id}
          book={book}
        />
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={clickHandler}
          color={isChosenBook ? 'error' : 'primary'}
        >
          {isChosenBook ? 'Удалить' : 'Добавить'}
        </Button>
      </CardActions>
    </StyledCard>
  )
}

export default BookCard

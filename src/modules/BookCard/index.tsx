import * as React from 'react';
import {FC} from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {IBook} from "../../models/book.models";
import BookInfo from "./components/BookInfo";
import StyledCard from "./components/StyledCard";
import {useCartBooksStore} from "../../store/cartBooks";

interface IBookCard {
  book: IBook
}

const BookCard: FC<IBookCard> = ({book}) => {

  const {booksIds, addBook, removeBook} = useCartBooksStore()

  const isChosenBook = booksIds.includes(book.id)

  const clickHandler = () => {
    isChosenBook ? removeBook(book.id) : addBook(book.id)
  }

  return (
    <StyledCard>
      <CardMedia
        height="320"
        component="img"
        alt={book.title}
        image={book.image}
      />
      <CardContent>
        <BookInfo key={book.id} book={book}/>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={clickHandler}
          color={isChosenBook ? "error" : "primary"}
        >
          {isChosenBook ? 'Удалить' : 'Добавить'}
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default BookCard

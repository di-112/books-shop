import React from 'react';
import {Grid} from "@mui/material";
import BookCard from "../modules/BookCard";
import {useQueryClient} from "@tanstack/react-query";
import {IBook} from "../models/book.models";
import {useCartBooksStore} from "../store/cartBooks";

const Cart = () => {
  const client = useQueryClient()

  const booksIds = useCartBooksStore(state => state.booksIds)

  const chosenBooks = client.getQueryData<IBook[]>(['books'])?.filter(book => booksIds.includes(book.id))

  return chosenBooks?.map(book => <div key={book.id}>{book.title}</div>);
};

export default Cart;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookListPage from './BookListPage'
import BookPage from './BookPage'
import CartPage from './CartPage'

const Routing = () => (
  <Routes>
    <Route
      path=""
      element={<BookListPage />}
    />
    <Route
      path="book/:id"
      element={<BookPage />}
    />
    <Route
      path="cart"
      element={<CartPage />}
    />
  </Routes>
)

export default Routing

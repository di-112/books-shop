import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './modules/Header'
import BooksPage from './pages/BooksPage'
import CartPage from './pages/CartPage'

const App = () => (
  <>
    <Header />
    <Routes>
      <Route
        path=""
        element={<BooksPage />}
      />
      <Route
        path="cart"
        element={<CartPage />}
      />
    </Routes>
  </>
)

export default App

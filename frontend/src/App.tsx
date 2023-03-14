import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './modules/Header'
import BookListPage from './pages/BookListPage'
import CartPage from './pages/CartPage'
import background from './assets/background.jpg'
import BookPage from './pages/BookPage'

const App = () => {
  useEffect(() => {
    document.body.style.background = `url(${background})`
  }, [])

  return (
    <>
      <Header />
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
    </>
  )
}

export default App

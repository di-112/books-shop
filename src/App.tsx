import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './modules/Header'
import BooksPage from './pages/BooksPage'
import CartPage from './pages/CartPage'
import background from './assets/background.jpg'

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
          element={<BooksPage />}
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

import React from 'react'
import { BrowserRouter, Route, Routes, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

const App = () => {
  const navigate = useNavigate();
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  return (
    <>
      <NavBar onSearch={onSearch} cartIconCount={2} />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
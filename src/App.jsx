import React from 'react'
import { BrowserRouter, Route, Routes, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { useCart } from './context/cartState'

const App = () => {
  const navigate = useNavigate();
  const { cartIconCount } = useCart();
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }
  return (
    <>
      <NavBar onSearch={onSearch} cartIconCount={cartIconCount()} />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
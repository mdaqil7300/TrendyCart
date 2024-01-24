import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Products />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
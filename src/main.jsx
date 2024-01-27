import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartState } from './context/cartState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>
)

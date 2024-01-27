import React, { useState } from 'react'
import '../index.css'
import './Cart.css'
import alerticon from '../assets/alertIcon1.svg'
import { useCart } from '../context/cartState'
import { Link } from 'react-router-dom'

const SHIPPING_CHARGE = 15;

const Cart = () => {
    const { cart, removeFromCart, increaseQuant, decreaseQuant } = useCart();
    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }
    const [cartItem, setCartItem] = useState([])
    const [counter, setCounter] = useState(0);
    const handleUpCounter = () => {
        setCounter(counter + 1)
    }
    const handleDownCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <>
            {cart.length >= 1
                ?
                (
                    <div>
                        <div className="orderSummary">
                            <h4 className="card-title cartTitle">Order Summary</h4>
                            {cart.map((item) => (
                                <div className="card m-5 shadow" style={{ width: '45rem' }} key={item.product.id}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={item.product.image} className="img-fluid rounded-start cartImage" style={{ width: '160px', height: '160px' }} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <Link to={`/products/${item.product.id}`}>
                                                    <p className="card-text">{item.product.title}</p>
                                                </Link>
                                                <div className='counterBtn'>
                                                    <button type="button" className="btn btn-light " disabled={item.quantity === 1} onClick={() => decreaseQuant(item.product.id)}>-</button>

                                                    <span className='px-2'> {item.quantity} </span>

                                                    <button type="button" className="btn btn-light" onClick={() => increaseQuant(item.product.id)}>+</button>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center ">
                                                    <span className='text-primary fw-bolder'>{item.product.price}</span>
                                                    <a href="#" className="btn btn-primary" style={{ width: '105px' }} onClick={() => removeFromCart(item.product.id)}>Remove</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="card m-5 shadow" style={{ width: '45rem' }}>
                            <div className="row g-0">
                                <h4 className="card-title cartTitle">Payment Summary</h4>
                                <div className="col-md-12">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <span className="card-text">Subtotal:</span>
                                            <span className='text-primary fw-bolder'>${parseFloat(cartTotal()).toFixed(2)}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <span className="card-text">Shipping Fee:</span>
                                            <span className='text-primary fw-bolder'>${SHIPPING_CHARGE}</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <span className="card-text">Total:</span>
                                            <span className='text-primary fw-bolder'>${parseFloat(cartTotal() + SHIPPING_CHARGE).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                : (
                    <div className='d-flex justify-content-center align-items-center mt-5'>
                        <div className="card text-dark bg-info p-2 text-center" style={{ maxWidth: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title"><img src={alerticon} /> Your Cart is Empty</h5>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Cart
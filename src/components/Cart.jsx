import React, { useState } from 'react'
import '../index.css'
import './Cart.css'
import cart from '../assets/cart.svg'

const Cart = () => {
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
            {/* {cart ? (<div className='parent'>
                <span className="loader"></span>
            </div>)
                :
                } */}
            {/* {cartItem.map((item) => { */}
            <div className="card m-5 shadow" style={{ width: '45rem' }}>
                <div className="row g-0">
                    <h4 className="card-title cartTitle">Order Summary</h4>
                    <div className="col-md-4">
                        <img src={cart} className="img-fluid rounded-start cartImage" style={{ width: '160px', height: '160px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <div className='counterBtn'>
                                <button type="button" className="btn btn-light " onClick={handleDownCounter}>-</button>
                                {counter >= 0 &&
                                    <span className='px-2'> {counter} </span>
                                }
                                <button type="button" className="btn btn-light" onClick={handleUpCounter}>+</button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center ">
                                <span className='text-primary fw-bolder'>$109.55</span>
                                <a href="#" className="btn btn-primary" style={{ width: '105px' }}>Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* }) */}
            <div className="card m-5 shadow" style={{ width: '45rem' }}>
                <div className="row g-0">
                    <h4 className="card-title cartTitle">Payment Summary</h4>
                    <div className="col-md-12">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <span className="card-text">Subtotal:</span>
                                <span className='text-primary fw-bolder'>$109.55</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <span className="card-text">Shipping Fee:</span>
                                <span className='text-primary fw-bolder'>$10</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center p-2">
                                <span className="card-text">Total:</span>
                                <span className='text-primary fw-bolder'>$119.55</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
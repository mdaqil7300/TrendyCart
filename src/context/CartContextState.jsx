import { createContext, useContext, useState } from "react";

const initialState = {
    cart: [],
    cartIconCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuant: () => null,
    decreaseQuant: () => null
}

const CartContext = createContext(initialState);

const useCart = () => useContext(CartContext);

const CartState = (props) => {
    const [cart, setCart] = useState(initialState.cart)

    const cartIconCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product) => {
        const productIndex = cart.findIndex(item => item.product.id === product.id);
        if (productIndex !== -1) {
            increaseQuant(product.id);
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId));
    }

    const increaseQuant = (productId) => {
        const copy = [...cart];
        const productIndex = copy.findIndex((item) => item.product.id === productId);
        if (productIndex !== -1) {
            copy[productIndex].quantity += 1;
            setCart(copy);
        }
    }

    const decreaseQuant = (productId) => {
        const copy = [...cart];
        const productIndex = copy.findIndex((item) => item.product.id === productId);
        if (productIndex !== -1 && copy[productIndex].quantity > 1) {
            copy[productIndex].quantity -= 1;
            setCart(copy);
        }
    }

    return (
        <CartContext.Provider value={{ cart, cartIconCount, addToCart, removeFromCart, increaseQuant, decreaseQuant }}>
            {props.children}
        </CartContext.Provider>
    )
}

export { useCart, CartState }
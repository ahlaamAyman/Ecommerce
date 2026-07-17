import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems')
        return savedCart ? JSON.parse(savedCart) : []
    })

    const increaseQuantity = (id) => {
        setCartItems(prevItem => prevItem.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ))

    }


    const discreaseQuantity = (id) => {
        setCartItems(prevItem => prevItem.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ))

    }


    const removeFromCart = (id) => {
        setCartItems(prevItem => prevItem.filter(item => item.id !== id))

    }




    const addToCart = (item) => {
        setCartItems((prevItem) => {
            const exists = prevItem.some(cartItem => cartItem.id === item.id)
            if (exists) return prevItem
            return [...prevItem, { ...item, quantity: 1 }]
        })
    }

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])






    return (

        <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, discreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartProvider

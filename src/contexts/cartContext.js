import React, { useState, createContext } from 'react';

export const Context = createContext({});

const CartContext = ({ children }) => {
    const [cart, setCarts] = useState([]);
    const [cartIds, setCartIds] = useState([]);

    const addToCart = (product) => {
        setCarts([
            ...cart,
            product
        ])

        setCartIds([
            ...cartIds,
            product.id
        ])
    }

    const removeFromCart = (id) => {
        const cartIdArr = cartIds.filter(cartId => {
            return cartId != id;
        })
        setCartIds(cartIdArr)

        const cartArr = cart.filter(item => {
            return item.id != id;
        })

        setCarts(cartArr);
    }

    return (
        <Context.Provider
            value={{
                addToCart,
                cart,
                cartIds,
                removeFromCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default CartContext

import React, { useState, createContext } from 'react';
import Alert from '@material-ui/lab/Alert';

export const Context = createContext({});

const CartContext = ({ children }) => {
    const [cart, setCarts] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');


    const addToCart = (product) => {
        setCarts([
            ...cart,
            product
        ])

        setCartIds([
            ...cartIds,
            product.id
        ])
        setShow(true)
        setMessage('Items added successfully')
        setTimeout(() => {
          setShow(false) ;
          }, 1500);
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
        setShow(true)
        setMessage('Items removed successfully')
        setTimeout(() => {
          setShow(false) ;
          }, 1500);
    }

    return (
        <>
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
            {show &&  <Alert className="success" severity="success">{message}</Alert> }
        </>
    )
}

export default CartContext

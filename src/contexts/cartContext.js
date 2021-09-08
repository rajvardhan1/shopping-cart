import React, { useState, createContext } from 'react';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

export const Context = createContext({});

const CartContext = ({ children }) => {
    const [cart, setCarts] = useState([]);
    const [cartIds, setCartIds] = useState([]);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');


    const addToCart = async (product) => {
        console.log('cartxxx',product)

        const url = `http://localhost:8000/create-product`
        const body = {
            title: product.title,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image
        }
        console.log('formdata',body)
        try {
          const res = await axios.post(url, body, {
            headers: {
              'content-type': 'application/json',
            },
          })
          setShow(true)
          setMessage('Item added successfully')
          setTimeout(() => {
            setShow(false);
            // window.location.reload()
            }, 1500);
        } catch (error) {
          console.log(error)
        }
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
        const url = `http://localhost:8000/delete-item/`+id
         
         const res = axios.delete(url)
         .then((res) => {
            setShow(true)
            setMessage('Items removed successfully')
            setTimeout(() => {
              setShow(false) ;
              window.location.reload();
              }, 1500);
          });
         console.log('res..',res);
        // const cartIdArr = cartIds.filter(cartId => {
        //     return cartId != id;
        // })
        // setCartIds(cartIdArr)

        // const cartArr = cart.filter(item => {
        //     return item.id != id;
        // })

        // setCarts(cartArr);
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

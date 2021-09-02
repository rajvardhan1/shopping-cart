import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { Context } from './../contexts/cartContext'

export default function CartNext() {
  const [total, setTotal] = useState(0)
  const { cart } = useContext(Context)
  
  const products = [
    {
      "id": 3,
      "title": "Vans",
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      "price": 500,
      "img": "https://cdn.shopify.com/s/files/1/0236/3431/3280/files/a02_370x230@2x.jpg?v=1603564161",
      "quantity": 1
    },
    {
      "id": 4,
      "title": "White",
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      "price": 55,
      "img": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380353/01/sv01/fnd/IND/fmt/png",
      "quantity": 3
    }
  ]

  return(
    <div className="container">
        {/* <Card className="cart next mt">
          <div className="next-display">
            <span className="count">1</span>   
            <h5>LOGIN <CheckIcon className="check"/></h5>
          </div>
          <span className="name">Pooja Yadav</span>
          <span style={{marginLeft:"6px"}}>+912731243215</span>
        </Card>
        <Card className="cart next">
          <div className="next-display">
            <span className="count">2</span> 
            <h5>DELIVERY ADDRESS <CheckIcon className="check"/></h5>
          </div>  
          <span className="name">Pooja Yadav</span>
          <span style={{marginLeft:"6px"}}>2/14 xyz Indore 452001</span>
        </Card> */}
        <Card className="cart next">
          <div className="next-display">
            <h5>ORDER SUMMARY <CheckIcon className="check"/></h5>
          </div>  
          <>
          <ul className="collection">
            { 
              cart.map((product, index) => {
                return (
                  <li className="collection-product avatar" key={product.id}>
                    <div className="product-img">
                      <img src={product.img} alt={product.img} className="" />
                    </div>

                    <div className="product-desc">
                      <span className="title">{product.title}</span>
                      <span>{product.desc}</span>
                      <span><b>Price: {product.price}$</b></span>
                      <p>
                        {console.log('product', product.price)}
                        <b>Quantity: {product.quantity}</b>
                      </p>
                      <div className="add-remove">
                        <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                      </div>
                      <button className="waves-effect waves-light btn pink remove">Remove</button>
                    </div>

                  </li>
                )
              })
            }
          </ul>
          </>
        </Card>
        {/* <Card className="cart next">
          <div className="next-display">
            <span className="count">4</span> 
            <h5>PAYMENT OPTIONS <CheckIcon className="check"/></h5>
          </div> 
          <StripeCheckout
              stripeKey={"pk_test_51JNbPvSB8bOa6XsJ6HMHPyDH7QEtbLFsDMYl6oAdMWvQt1pzIoueqGACWa2KddNUOrJMTzx7qnys0bTdHmDyx80f00kPn1Ej6L"}
              token={handlePayment}
              name="Stripe Payment"
              amount={total * 100}
            >
              <button className="waves-effect waves-light btn green pay-btn">Pay Now</button>
            </StripeCheckout> 
        </Card> */}
    </div>
    )
}
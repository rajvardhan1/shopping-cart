import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { Context } from './../contexts/cartContext'
import PaymentModal from './Dialogs/PaymentModal';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import home1 from '../assets/home1.jpg'

export default function Cart() {
  const [quantity, setQuantity] = useState(null)
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

  const [total, setTotal] = useState(0)
  const { cart, removeFromCart } = useContext(Context)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (id) => {
    removeFromCart(id);
  }

  const handleOrder = () => {
    window.location.href = "/checkout"
  } 

  const handlePayment = (token) => {

    let total = 0;
    products.map((item, ind) => {
      total += item.price
    })


    setTotal(total)

    console.log(token, 'token');

    const body = {
      token,
      products: products,
      total
    }

    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:8000/stripe-payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log(response, ' Response');
    })
      .catch((err) => console.log(err))
  }

  const redirectToPayU = (pd) => {
    window.bolt.launch(pd, {
      responseHandler: function (response) {
        fetch('http://localhost:8000/payu-payment', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(response.response)
        })
          .then(function (a) {
            return a.json();
          })
          .then(function (json) {
            console.log(json);
          });
      },
      catchException: function (response) {
        console.log(response, ' error')
      }
    });
  }

  const handlePayuPayment = () => {

    let total = 0;
    cart.map((item, ind) => {
      total += item.price
    })
    console.log(total, 'total')

    var pd = {
      key: "GeKTPS",
      txnid: "PQI6MqpYrjEefU",
      amount: total,
      firstname: "Raj",
      email: "raj@test.com",
      phone: "8989898989",
      productinfo: "Different brands of shoes",
      surl: "http:/localhost:3000/cart",
      furl: "http:/localhost:3000/cart",
      hash: ""
    }

    let data = {
      txnid: pd.txnid,
      email: pd.email,
      amount: pd.amount,
      productinfo: pd.productinfo,
      firstname: pd.firstname
    }

    fetch('http://localhost:8000/generate-hash', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response, ' response')
        pd.hash = response['hash']
        redirectToPayU(pd);
      })
  }

  return (
    <>
      <div className="container cart-container">
        <Card className="cart">
          <h5>My Cart </h5>
          <ul className="collection">
            {console.log('cart', cart)}
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
                        {/* <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                        <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link> */}
                      </div>
                      <button
                        className="waves-effect waves-light btn pink remove"
                        onClick={() => handleRemove(product.id)}
                      >Remove</button>
                    </div>

                  </li>
                )
              })
            }
          </ul>
          <Card.Footer>
            <button className="waves-effect waves-light btn  placeOrder-btn" onClick={handleOrder}>PLACE ORDER</button>
          </Card.Footer>
        </Card>
        <Card className="cart cart-details">
          <h6>PRICE DETAILS</h6><br />
          <div className="box price-details">
            <span>Price(2 items)</span>
            <span>1</span>
          </div>
          <div className="box price-details">
            <span><b>Total</b></span>
            <span><b>$67</b></span>
          </div>
        </Card>
      </div>
      <>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="item active" style={{display:'flex'}}>
            <img src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/adidas_running_alphabounce_beyond_1_370x370_crop_top.jpg?v=1553849230" alt="Los Angeles"/>
            <img src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/clarks_desert_boot_1_370x370_crop_top.jpg?v=1553849295" alt="Chicago"/>
            <img src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/converse_chuck_taylor_all_star_leather_hi_1_370x370_crop_top.jpg?v=1553849322" alt="New York"/>
          </div>

          <div class="item">
            <img src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/clarks_desert_boot_1_370x370_crop_top.jpg?v=1553849295" alt="Chicago"/>
          </div>

          <div class="item">
            <img src="//cdn.shopify.com/s/files/1/0024/1726/2691/products/converse_chuck_taylor_all_star_leather_hi_1_370x370_crop_top.jpg?v=1553849322" alt="New York"/>
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </>
      <PaymentModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </>
  )
}

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { Context } from './../contexts/cartContext'
import PaymentModal from './Dialogs/PaymentModal';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel'
import shoes1 from '../assets/shoes1.jpg'

export default function Cart() {
  const [quantity, setQuantity] = useState(null)
  const products = [
    {
      "id": 1,
      "title": "Adidas",
      "desc": "Lorem Adidas",
      "price": 400,
      "img": "//cdn.shopify.com/s/files/1/0024/1726/2691/products/adidas_running_alphabounce_beyond_1_370x370_crop_top.jpg?v=1553849230",
      "quantity": 1
    },
    {
      "id": 2,
      "title": "NIKE",
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
      "price": 500,
      "img": "//cdn.shopify.com/s/files/1/0024/1726/2691/products/clarks_desert_boot_1_370x370_crop_top.jpg?v=1553849295",
      "quantity": 1
    },
    {
      "id": 3,
      "title": "New Balance",
      "desc": "Balance onsectetur adipisicing elit. Minima, ex.",
      "price": 1500,
      "img": "//cdn.shopify.com/s/files/1/0024/1726/2691/products/converse_chuck_taylor_all_star_leather_hi_1_370x370_crop_top.jpg?v=1553849322",
      "quantity": 1
    }
  ]

  const handleAddToCart = (product) => {
    cartIds.indexOf(product.id) == -1 ? addToCart(product) : removeFromCart(product.id);
  }

  const [total, setTotal] = useState(0)
  const { cart, addToCart, cartIds, removeFromCart } = useContext(Context)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (id) => {
    removeFromCart(id);
  }

  const handleOrder = () => {
    window.location.href = "/checkout"
  }

  const productTotal = (products) => {
    let total = 0;
    products.map((item, ind) => {
      total += item.price * item.quantity;
    })
    setTotal(total)
  }

  useEffect(() => {
    productTotal(cart);
  }, [cart])


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
            <Link to="/checkout"><button className="waves-effect waves-light btn  placeOrder-btn">PLACE ORDER</button></Link>
          </Card.Footer>
        </Card>
        <Card className="cart cart-details">
          <h6>PRICE DETAILS</h6><br />
          <div className="box price-detaicartIds.indexOf(product.id) == -1 ? 'add' : 'remove'}ls">
            <span>Price({cart.length} items)</span>
            <span>{total ? total : 0}</span>
          </div>
          <div className="box price-details">
            <span><b>Total</b></span>
            <span><b>${total ? total : 0}</b></span>
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
            <div class="item active" >
              <img src={products[0].img} alt="Los Angeles" />
              <div className="move-to-cart" onClick={() => { handleAddToCart(products[0]) }}>{cartIds.indexOf(products[0].id) == -1 ? 'MOVE TO CART' : 'REMOVE FROM CART'} </div>
              <div className="mr-803">
                <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">{products[0].title}</a>
                  </p>
                </div>
                <div className="product_prop">
                  <p class="product_price">
                    <span class="money" data-currency-usd="$19.00">{products[0].price}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="item c-item">
              <img src={products[1].img} alt="Chicago" />
              <div className="move-to-cart" onClick={() => { handleAddToCart(products[1]) }}>MOVE TO CART</div>
              <div className="mr-803">
                <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">{products[1].title}</a>
                  </p>
                </div>
                <div className="product_prop">
                  <p class="product_price">
                    <span class="money" data-currency-usd="$19.00">{products[1].price}</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="item c-item">
              <img src={products[2].img} alt="New York" />
              <div className="move-to-cart" onClick={() => { handleAddToCart(products[2]) }}>MOVE TO CART</div>
              <div className="mr-803">
                <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">{products[2].title}</a>
                  </p>
                </div>
                <div className="product_prop">
                  <p class="product_price">
                    <span class="money" data-currency-usd="$19.00">{products[2].price}</span>
                  </p>
                </div>
              </div>
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

import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './../contexts/cartContext'
import PaymentModal from './Dialogs/PaymentModal';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function Cart() {
  const [data, setData] = useState()
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
    },
    {
      "id": 4,
      "title": "NIKE",
      "desc": "Lorem ipsum dolor sit  elit. Minima, ex.",
      "price": 2000,
      "img": "https://cdn.shopify.com/s/files/1/0192/8264/products/d5909b3ba9542fcfd04622be594c10c92069928f_large.png?v=1622762867",
      "quantity": 1
    },
  ]

  const [total, setTotal] = useState(0)
  const { cart, addToCart, cartIds, removeFromCart } = useContext(Context)
  console.log('........',cart);
  const [show, setShow] = useState(false);

  useEffect(() => {
    handleCart()
    productTotal();
  },[])

 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemove = (id) => {
    removeFromCart(id);
  }

  const productTotal = () => {
    let total 
    data?.map((item, ind) => {
      total += item.price;
    })
    setTotal(total)
  }

  const handleCart = (()=>{
    const url = `http://localhost:8000/cart`
    axios.get(url)
    .then((res) => {
      console.log('res',res);
        setData(res?.data?.data)
    })
    .catch((err) => {
        console.log(err)
    })
  })

   console.log('data',data);
  return (
    <>
      <div className="container cart-container">
        <Card className="cart">
          <h5>My Cart </h5>
          <ul className="collection">
            {
              data?.map((product, index) => {
                return (
                  <li className="collection-product avatar" key={product.id}>
                    <div className="product-img">
                      <img src={product.img} alt={product.img} className="" />
                    </div>

                    <div className="product-desc">
                      <span className="title">{product.title}</span>
                      <span>{product.description}</span><br/>
                      <span><b>Price: {product.price}</b></span>
                      <p>
                        {console.log('product', product.price)}
                        <b>Quantity: 1 </b>
                      </p>
  
                      <button
                        className="waves-effect waves-light btn pink remove"
                        onClick={() => handleRemove(product.product_id)}
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
          <span>Price({data?.length} items)</span>
              {
                data?.map((product, index) => {
                  return (
                    <>
                      <span>{product.price ? product.price : 0}</span>
                    </>
                  )})
              }
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
            <div class="item active c-item" >
              <img src={products[0].img} alt="Los Angeles" />
              {/* <div className="move-to-cart" onClick={() => { handleAddToCart(products[0]) }}>{cartIds.indexOf(products[0].id) == -1 ? 'MOVE TO CART' : 'REMOVE FROM CART'} </div> */}
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
              {/* <div className="move-to-cart" onClick={() => { handleAddToCart(products[1]) }}>MOVE TO CART</div> */}
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
              {/* <div className="move-to-cart" onClick={() => { handleAddToCart(products[2]) }}>MOVE TO CART</div> */}
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

            <div class="item c-item">
              <img src={products[3].img} alt="New York" width="370px" height="370px"/>
              {/* <div className="move-to-cart" onClick={() => { handleAddToCart(products[3]) }}>MOVE TO CART</div> */}
              <div className="mr-803">
                <div className="product_info">
                  <p class="product_name">
                    <a href="/products/adidas_running_alphabounce_beyond">{products[3].title}</a>
                  </p>
                </div>
                <div className="product_prop">
                  <p class="product_price">
                    <span class="money" data-currency-usd="$19.00">{products[3].price}</span>
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

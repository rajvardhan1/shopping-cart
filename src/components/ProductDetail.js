import React from 'react'
import './styles/productDetaileStyle.css';

export default function ProductDetail() {
  return (
    <main className="container">

      <div className="left-column">
        <img src="https://i.ytimg.com/vi/YetO6_gRoCw/hqdefault.jpg" alt="" />
      </div>

      <div className="right-column">

        <div className="product-description">
          <span>Shoes</span>
          <h1>Nike Shoes</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
        </div>

        <div className="product-configuration">

          <div className="product-color">
            <span>Color</span>

          </div>

          <div className="cable-config">
            <span>Shoes color</span>

            <div className="cable-choose">
              <button>Blue</button>
              <button>Black</button>
              <button>White</button>
            </div>

            <a href="#">How to configurate your headphones</a>
          </div>
        </div>

        <div className="product-price">
          <span>148$</span>
          <a href="#" className="cart-btn">Add to cart</a>
        </div>
      </div>
    </main>)
}

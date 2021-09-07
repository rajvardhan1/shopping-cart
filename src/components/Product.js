import React, { useContext } from 'react'
import { Context } from './../contexts/cartContext'
import '../assets/nike1.jpeg'

export default function Product(props) {
  
  const { product } = props
  const { addToCart, cartIds, removeFromCart } = useContext(Context)

  const handleAddToCart = (product) => {
    cartIds.indexOf(product.id) == -1 ? addToCart(product) : removeFromCart(product.id);
  }
   
  return (
    <div className="card">
      <div className="card-image">
        <img src={product?.image} alt={product.title} />
        <span className="card-title">{product.title}</span>
        <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={() => handleAddToCart(product)}
        >
          <i className="material-icons">{cartIds.indexOf(product.id) == -1 ? 'add' : 'remove'}</i>
        </span>
      </div >

      <div className="card-content">
        <p>{product.description}</p>
        <p><b>Price: {product.price}</b></p>
      </div>
    </div>
  )
}

import React from 'react'
import products from '../products.json';
import Product from './Product';

export default function ProductList() {

  return (
    <div className="container">
      <h3 className="center">Products</h3>
      <div className="box">
        {
          products.map((product, index) => {
            return <Product key={product.id} product={product} />
          })
        }
      </div>
    </div>
  )
}

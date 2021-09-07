import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import { Context } from './../contexts/cartContext'
import jsPDF from 'jspdf';

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

 const pdfGenerate = () =>{
     var doc = new jsPDF('landscape','px','a4','false');
     var len 
     products.map((product, index) => {
      len = products.length
      doc.addImage(product.img,'PNG',25,15,150+index,150 + index)
      doc.setFont('Helvertica','bold')
      doc.text(200,60,'Title')
      doc.text(200,80,'Description')
      doc.text(200,100,'Price')
      doc.text(200,120,'quantity')
      doc.setFont('Helvertica','Normal')
      doc.text(240,60, product.title)
      doc.text(270,80, product.desc)
      doc.text(250,100, "2000")
      doc.text(260,120, "2")
      doc.addPage(1)
     })

     doc.deletePage(2+1)
     doc.save('a.pdf')
  }
  return (
    <div className="container">
      <Card className="cart next">
        <div className="next-display">
          <h5>ORDER SUMMARY <CheckIcon className="check" /></h5>
        </div>
        <>
          <ul className="collection">
            {
              products.map((product, index) => {
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
                    </div>
                  </li>
                )
              })
            }  
          </ul>
        </>
        <button className="download placeOrder-btn" onClick={()=>pdfGenerate()}> Download pdf</button>
      </Card>
    </div>
  )
}
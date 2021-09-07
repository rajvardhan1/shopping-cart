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
     doc.setFont('Helvertica','bold')
     doc.text(45, 95,'ORDER SUMMARY')
     products.map((product, index) => {
      len = products.length
      doc.addImage(product.img,'PNG',25,(index + 2)*75,100,100)
      doc.setFont('Helvertica','bold')
      doc.text(150,(index+1.5) * 95,'Title')
      doc.text(150,(index+1.5) * 105,'Description')
      doc.text(150,(index+1.5) * 115,'Price')
      doc.text(150,(index+1.5) * 125,'quantity')
      doc.setFont('Helvertica','Normal')
      doc.text(180,(index+1.5) * 95, product.title)
      doc.text(220,(index+1.5) * 105, product.desc)
      doc.text(180,(index+1.5) * 115, "2000")
      doc.text(200,(index+1.5) * 125, "2")
     })
     doc.addPage(1)
     doc.deletePage(len)
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
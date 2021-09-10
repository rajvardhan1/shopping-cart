import React, { useState, useContext, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import CheckIcon from '@material-ui/icons/Check';
import { Link } from 'react-router-dom';
import { Context } from './../contexts/cartContext'
import jsPDF from 'jspdf';
import axios from 'axios';

export default function CartNext() {
  const [list, setList] = useState([])
  const { cart } = useContext(Context)
  
  useEffect (()=>{
    handleOrderList()
  },[])
  
  const handleOrderList = (()=>{
    const url = `http://localhost:8000/order-details`
    axios.get(url)
    .then((res) => {
      console.log('res',res);
      setList(res?.data)
    })
    .catch((err) => {
        console.log(err)
    })
  })
 const pdfGenerate = () =>{
     var doc = new jsPDF('landscape','px','a4','false');
     var len 
     doc.setFont('Helvertica','bold')
     doc.text(45, 95,'ORDER SUMMARY')
     list?.data?.map((product, index) => {
      len = list?.data?.length
      console.log('len',len);
      // doc.addImage(product.image,'PNG',25,(index + 2)*75,100,100)
      doc.setFont('Helvertica','bold')
      doc.text(150,(index+1.5) * 95,'Title')
      doc.text(150,(index+1.5) * 105,'Description')
      doc.text(150,(index+1.5) * 115,'Price')
      doc.text(150,(index+1.5) * 125,'quantity')
      doc.setFont('Helvertica','Normal')
      doc.text(180,(index+1.5) * 95, product.title)
      doc.text(220,(index+1.5) * 105, product.description)
      doc.text(180,(index+1.5) * 115, "2000")
      doc.text(200,(index+1.5) * 125, "2")
      doc.addPage(1)
     })
     
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
              list?.data?.map((product, index) => {
                return (
                  <li className="collection-product avatar" key={product.id}>
                    <div className="product-img">
                      <img src={product.img} alt={product.img} className="" />
                    </div>

                    <div className="product-desc">
                      <span className="title">{product.title}</span>
                      <span>{product.description}</span><br/>
                      <span><b>Price: {product.price}$</b></span> 
                      <p>
                        {console.log('product', product.price)}
                        <b>Quantity: 1 </b>
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
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import products from '../products.json';

export default function Checkout(){
  const [userInfo, setUserInfo] = useState({
    First_name:'',
    Last_name:'',
    Address:'',
    Country:'',
    City:'',
    State: '',
    Zip: '',
    Phone_number:''
  })
  
  // const getData=()=>{
  //   fetch('product.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       console.log(myJson);
  //     });
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const handleChange = (event) => {
    event.preventDefault();
    const {name,value}=event.target
    setUserInfo(prevData=>{
      return ({...prevData,[name]:value})
    })
   }

   const handleSubmit = async() => {
    const url = `/interview_feedbacks` 
    const CSRF_Token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute('content')

    const payload = JSON.stringify({
        userInfo: userInfo 
    })
    
    try{
      const res = await axios.post(url, payload, {
          headers: {
              'content-type': 'application/json',
              'X-CSRF-Token': CSRF_Token,
          },
      })
  } catch (error) {
          console.log(error)
    }
  }
   
  return (
    <div className="container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <span className="checkout-text">Shipping Address</span>
        <div className="box" style={{marginTop: '15px'}}>
            <div class="form-group checkout-input">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control checkout-forminput" name="First_name" placeholder="Enter First Name" onChange = {(e)=>handleChange(e,'First_name')}/>
            </div>
            <div class="form-group checkout-input">
                <label for="exampleInputPassword1">Last Name</label>
                <input type="text" class="form-control checkout-forminput" name="Last_name" onChange = {(e)=>handleChange(e,'Last_name')} placeholder="Enter Last Name" />
            </div>  
        </div>
        <div class="form-group">
            <label for="creditCard">Card Number</label>
            <input type="text" class="form-control checkout-forminput" name="creditCard" id="creditCard" placeholder="Enter Card Number" />
        </div>
        <div className="box">
          <div className="form-group checkout-input">
            <label for="cvv">Security Code</label>
            <input type="text" class="form-control checkout-forminput" name="cvv" id="cvv" placeholder="Enter Security Code" />
          </div>
          
          <div className="form-group checkout-input">
            <label for="Expiration">Exp. (MM/YYYY)</label>
              <input type="text" class="form-control checkout-forminput" name="exp-month" id="exp-month" size="2" placeholder="Enter Exp. (MM/YYYY)" />
              
              {/* <input type="text" name="exp-year" id="exp-year" size="4"/> */}
          </div>
        </div>  
        <div class="form-group">
            <label for="exampleInputEmail1">Address </label>
            <input type="text" class="form-control checkout-forminput" name="Address" onChange = {(e)=>handleChange(e,'Address')} placeholder="Enter Address" />
        </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" class="form-control checkout-forminput" name="Country" onChange = {(e)=>handleChange(e,'Country')} placeholder="Enter Email" />
            </div>
        <div className="box">
            <div class="form-group checkout-input">
                <label for="exampleInputEmail1">City</label>
                <input type="text" class="form-control checkout-forminput" name="State" onChange = {(e)=>handleChange(e,'State')} placeholder="Enter City" />
            </div>
            <div class="form-group checkout-input">
                <label for="exampleInputPassword1">Zip</label>
                <input type="text" class="form-control checkout-forminput" name="Zip" onChange = {(e)=>handleChange(e,'Zip')} placeholder="Enter Zip" />
            </div>  
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input type="number" class="form-control checkout-forminput" name="Phone_number" onChange = {(e)=>handleChange(e,'Phone_number')} placeholder="In case question arise" />
        </div>
        <button type="button" onClick={handleSubmit} class="btn btn-primary checkout-btn">Submit</button>
        </form>
        <div className="order-card">
            <div className="summary-card">
            <h6>Order Summary</h6><br/>
            <label>#32144612</label>
            <div className="box">
              <span>Items</span>  
              <span>1</span> 
            </div>
            <div className="box">
              <span>Total</span> 
              <span>$67</span> 
            </div>
            </div>
            <div className="summary-card details-card dc">
            <span className="checkout-text">Order Details</span><br/>
            {products.map((product)=>{
              return(
                <>
                <div className="box details-card">
                <img src={product.img} alt={product.img} style={{width:'25%',margin:'7px'}}></img>
                <span >{product.title}</span><br/>
                </div>
                <div className="checkout-details"> 
                  <span >{product.desc}</span><br/>
                  <span > ${product.price}.00</span><br/>
                </div>
                </>
              )
              })}
            </div>
        </div>
    </div>
  )  
}

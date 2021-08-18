import React, { useState, useContext } from 'react';
import Shoes from './checkout.jpg'
import axios from 'axios'

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
    <div className="conatiner">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <span className="checkout-text">Shipping Address</span>
        <div className="box" style={{marginTop: '15px'}}>
            <div class="form-group checkout-input">
                <label for="exampleInputEmail1">First Name</label>
                <input type="text" class="form-control" name="First_name" placeholder="Enter First Name" onChange = {(e)=>handleChange(e,'First_name')}/>
            </div>
            <div class="form-group checkout-input">
                <label for="exampleInputPassword1">Last Name</label>
                <input type="text" class="form-control" name="Last_name" onChange = {(e)=>handleChange(e,'Last_name')} placeholder="Enter Last Name" />
            </div>  
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Address </label>
            <input type="text" class="form-control" name="Address" onChange = {(e)=>handleChange(e,'Address')} placeholder="Enter Address" />
        </div>
        <div className="box">
            <div class="form-group checkout-input">
                <label for="exampleInputEmail1">Country</label>
                <input type="text" class="form-control" name="Country" onChange = {(e)=>handleChange(e,'Country')} placeholder="Enter Country" />
            </div>
            <div class="form-group checkout-input">
                <label for="exampleInputPassword1">City</label>
                <input type="text" class="form-control" name="City" onChange = {(e)=>handleChange(e,'City')} placeholder="Enter City" />
            </div>  
        </div>
        <div className="box">
            <div class="form-group checkout-input">
                <label for="exampleInputEmail1">State</label>
                <input type="text" class="form-control" name="State" onChange = {(e)=>handleChange(e,'State')} placeholder="Enter State" />
            </div>
            <div class="form-group checkout-input">
                <label for="exampleInputPassword1">Zip</label>
                <input type="text" class="form-control" name="Zip" onChange = {(e)=>handleChange(e,'Zip')} placeholder="Enter Zip" />
            </div>  
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input type="number" class="form-control" name="Phone_number" onChange = {(e)=>handleChange(e,'Phone_number')} placeholder="In case question arise" />
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
            <div className="summary-card details-card">
            <span className="checkout-text">Order Details</span><br/>
                <img src={Shoes} style={{width:'25%',margin:'7px'}}></img>
            </div>
        </div>
    </div>
  )  
}

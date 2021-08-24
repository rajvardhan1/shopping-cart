import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default function PaymentModal(props) {

  const [userInfo, setUserInfo] = useState({
    First_name: '',
    Last_name: '',
    Address: '',
    Country: '',
    City: '',
    State: '',
    Zip: '',
    Phone_number: ''
  })

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    setUserInfo(prevData => {
      return ({ ...prevData, [name]: value })
    })
  }

  const { show, handleClose, handleShow } = props;
  console.log(typeof handleClose, ' handle close')
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header>
        <Modal.Title className="checkout-text" style={{ textAlign: "center" }}>Bluesnap Payment</Modal.Title>
        <Button className="cross-button mt-3" onClick={handleClose} ><span className="cross">x</span></Button>
      </Modal.Header>
      <Modal.Body>
        <form className="bluesnap-form">
          <div className="box" style={{ marginTop: '15px' }}>
            <div class="form-group checkout-input">
              <label for="exampleInputEmail1">First Name</label>
              <input type="text" class="form-control checkout-forminput" name="First_name" placeholder="Enter First Name" onChange={(e) => handleChange(e, 'First_name')} />
            </div>
            <div class="form-group checkout-input">
              <label for="exampleInputPassword1">Last Name</label>
              <input type="text" class="form-control checkout-forminput" name="Last_name" onChange={(e) => handleChange(e, 'Last_name')} placeholder="Enter Last Name" />
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
              <label for="Expiration">Expiry Month (MM)</label>
              <input type="text" class="form-control checkout-forminput" name="exp-month" id="exp-month" size="2" placeholder="Enter Expiry Month(MM)" />
              {/* <input type="text" name="exp-year" id="exp-year" size="4"/> */}
            </div>
          </div>
          <div className="box">
            <div className="form-group checkout-input">
              <label for="currency">Currency</label>
              <input type="text" class="form-control checkout-forminput" name="currency" id="currency" placeholder="Enter Currency" />
            </div>

            <div className="form-group checkout-input">
              <label for="Expiration">Expiry Year (YYYY)</label>
              <input type="text" class="form-control checkout-forminput" name="exp-year" id="exp-year" size="4" placeholder="Enter Expiry Year(YYYY)" />
            </div>
          </div>
          <div className="box">
            <div class="form-group checkout-input">
              <label for="exampleInputEmail1">Amount</label>
              <input type="text" class="form-control checkout-forminput" name="amount" onChange={(e) => handleChange(e, 'State')} placeholder="Enter Amount" />
            </div>
            <div class="form-group checkout-input">
              <label for="exampleInputPassword1">Zip</label>
              <input type="text" class="form-control checkout-forminput" name="Zip" onChange={(e) => handleChange(e, 'Zip')} placeholder="Enter Zip" />
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Card Transaction Type</label>
            <input type="text" class="form-control checkout-forminput" name="Phone_number" onChange={(e) => handleChange(e, 'Phone_number')} placeholder="Enter type" />
          </div>
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className="bluesnap-btn">
          Submit
              </Button>
      </Modal.Footer>
    </Modal>
  )
}

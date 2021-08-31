import React, { useState } from 'react'
import './styles/contact.css'

export default function Contact() {

  const [contactDetail, setContactDetail] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setContactDetail({
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      to: 'rajthakur3619@gmail.com',
      body: contactDetail.message,
      subject: 'Test mail'
    }

    fetch('http://localhost:8000/sendgrid-mail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then(response => {
        console.log(response)
        alert('Mail sent successfully')
      })

    console.log('handle submit')
  }

  return (
    <>
      <div className="container-full">
        <div className="box-full">
          <div className="text"> Contact us form</div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-data">
                <input type="text" name="firstName" value={contactDetail.firstName} onChange={handleChange} />
                <div className="underline"></div>
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input type="text" />
                <div className="underline" name="lastName" value={contactDetail.lastName} onChange={handleChange}></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="text" name="email" value={contactDetail.email} onChange={handleChange} />
                <div className="underline"></div>
                <label>Email</label>
              </div>
              <div className="input-data">
                <input type="text" name="website" value={contactDetail.website} onChange={handleChange} />
                <div className="underline"></div>
                <label>Website</label>
              </div>
            </div>
            <div className="form-row" style={{ flexDirection: 'column' }}>
              <div className="form-row textarea" style={{ marginBottom: '0px' }}>
                <div className="input-data">
                  <textarea cols="30" rows="10" name="message" value={contactDetail.message} onChange={handleChange} ></textarea>
                  <div className="underline"></div>
                  <label>Message</label>
                </div>
              </div>
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="submit" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

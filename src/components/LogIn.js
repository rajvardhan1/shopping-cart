import React, { useState } from 'react'
import './styles/loginStyle.css'

export default function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    switch (name) {
      case 'username': setUsername(value)
        break;
      case 'password': setPassword(value)
        break;
      default: console.log('inside default')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handlesubmit')
  }

  return (
    <section className="form">
      <h2>Login To Your Account</h2>
      <form className="loginbox" autocomplete="off">
        <input
          placeholder="Username"
          type="text"
          name="username"
          id="username"
          onChange={handleChange}
        ></input>
        <input
          placeholder="Password"
          type="password"
          name="password"
          id="password"
          onChange={password}
        ></input>
        <button id="submit" onClick={handleSubmit}>Login</button>
      </form>
    </section>
  )
}

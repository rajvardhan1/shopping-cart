import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="nav-wrapper blue accent-1">
      <div className="container">
        <Link to="/" className="brand-logo">Shopping</Link>

        <ul className="right">
          <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
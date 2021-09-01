
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PaymentModal from './Dialogs/PaymentModal';
import logo from '../assets/shoppica_logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = (props) => {
  const { location } = props;
  const [show, setShow] = useState(false);

  const handleCart = () => {
    window.location.href = "/cart"
  }

  const handleOrder = () => {
    window.location.href="/c"
  }

  return (
    <>
      <nav className="nav-wrapper blue accent-1">
        <div className="container menu-area">
          <Link to="/" className="brand-logo">Shopping</Link>

          <ul className="right right-menu">
            {
              location.pathname == '/login'
                ?
                ''
                :
                <>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li className="menu-button"><Link to="/cart"><i className="material-icons">shopping_cart</i></Link>
                    <ul class="dropdown-menu">
                      <li onClick={handleCart}>My Cart </li><br/>
                      <li onClick={handleOrder}>My Orders </li>
                    </ul>
                  </li>
                </>
            }
            {/* <li> Pay
                <ul class="dropdown">
                <li onClick={handleShow}>Stripe Payment</li>
                <li onClick={handleShow}>Bluesnap Payment </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </nav>
      {/* <PaymentModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      /> */}

    </>
  )
}

export default withRouter(Navbar);
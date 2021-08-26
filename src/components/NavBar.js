import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PaymentModal from './Dialogs/PaymentModal';
import logo from '../assets/shoppica_logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Navbar = (props) => {
  const { location } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="nav-wrapper blue accent-1">
        <div className="container">
          <div className="col-4">
            <Link to="/" className="brand-logo">Shopping <ShoppingCartIcon  className="cartIcon"/></Link>
          </div>
          <div className="col-8">
            <ul className="right">
              {
                 location.pathname == '/login'
                 ?
                 ''
                 :
                 <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/">Shop</Link></li>
              <li><Link to="/cart" style={{margin:"6px"}}><i className="material-icons">shopping_cart</i></Link></li>
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
        </div>  
      </nav>
      <PaymentModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />

    </>
  )
}

export default withRouter(Navbar);
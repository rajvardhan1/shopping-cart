import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PaymentModal from './Dialogs/PaymentModal';

const Navbar = (props) => {
  const { location } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="nav-wrapper blue accent-1">
        <div className="container menu-area">
          <Link to="/" className="brand-logo">Shopping</Link>

          <ul className="right">
            {
              location.pathname == '/login'
                ?
                ''
                :
                <>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
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
      <PaymentModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />

    </>
  )
}

export default withRouter(Navbar);
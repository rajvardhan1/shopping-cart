import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartContext from './contexts/cartContext';
import Checkout from './components/Checkout';
import { Home } from './components/Home';
import ProductDetail from './components/ProductDetail';
import LogIn from './components/LogIn';
import Contact from './components/Contact';
import CartNext from './components/CartNext';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <div className="App">
          <switch>
            <Route exact path="/login" component={LogIn} />
            <NavBar />
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/product-detail" component={ProductDetail} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cart-detail" component={CartNext} />
          </switch>
        </div>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CartContext from './contexts/cartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <div className="App">
          <NavBar />
          <switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
          </switch>
        </div>
      </CartContext>
    </BrowserRouter>
  );
}

export default App;

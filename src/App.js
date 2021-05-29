import './App.scss';
import Header from './components/Header';
import CartCheckout from './components/CartCheckout';
import CartProducts from './components/CartProducts';
import data from './data';
import { useState } from 'react';

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? { ...exist, quantity: exist.quantity + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}])
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => x.id === product.id ? {...exist, quantity: exist.quantity - 1} : x
        )
      );
    }
  };


  return (
    <div className="App">
      <Header></Header>
      <div className="cart">
        <CartProducts onAdd={onAdd} onRemove={onRemove} products={products}></CartProducts>
        <CartCheckout onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></CartCheckout>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from 'react';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart'; 

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    setCartCount(updatedCart.length);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    setCartCount(updatedCart.length);
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' }
  ];

  return (
    <ShoppingCartProvider>
      <div className="App">
        <header>
          <h1>Online Store</h1>
          <p>Cart Count: {cartCount}</p>
          <div className="cart">
            <ShoppingCart cart={cart} onRemoveFromCart={removeFromCart} />
          </div>
        </header>
        <div className="container">
          <div className="products">
            <h2>Products</h2>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
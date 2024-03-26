import React from 'react';
function ShoppingCart({ cart, onRemoveFromCart }) {
    return (
      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - <button onClick={() => onRemoveFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
export default ShoppingCart;
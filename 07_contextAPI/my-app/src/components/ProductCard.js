import React from 'react';
function ProductCard({ product, onAddToCart }) {
    if (!product) {
      return null; 
    }
  
    return (
      <div className="product-card">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    );
}
export default ProductCard;
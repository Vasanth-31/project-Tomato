import React from "react";

const Products = ({ product }) => {
  return (
    <div className="product">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>${product.price} per {product.unit}</p>
    <button className="buy-btn">Buy</button>
  </div>
  )
}

export default Products

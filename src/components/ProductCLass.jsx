import React from 'react'
import Products from './Products'
import AgriProducts from './AgriProducts'

const ProductCLass = () => {
  return (
    <div>
    <div className="container-box">
    <h1>Agricultural Products</h1>
    <div className="product-list">
      {AgriProducts.map((product) => (
        <Products key={product.id} product={product} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default ProductCLass

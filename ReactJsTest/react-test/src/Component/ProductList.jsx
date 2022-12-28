import React from 'react'
import ProductItem from './ProductItem'

function ProductList({setData}) {
  return (
    <div className="col-md-8">
      <div className="product-list">
        <ProductItem setData={setData}/>
      </div>
    </div>
  )
}

export default ProductList
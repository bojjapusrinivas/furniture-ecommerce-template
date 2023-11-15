import React from 'react'

//image



// COMPONENTS

import ProductCard from './ProductCard'
function ProductList({TrendingProduct}) {
  return (
    <>
    {
        TrendingProduct.map((item, index)=>(
            <ProductCard items={item} key={index}/>
        ))
 }
    </>
  )
}

export default ProductList
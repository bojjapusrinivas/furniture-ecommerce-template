import React from 'react'

//image



// COMPONENTS

import ProductCard from './ProductCard'
function ProductList({data}) {
  return (
    <>
    {
        data?.map((item, index)=>(
            <ProductCard items={item} key={index}/>
        ))
 }
    </>
  )
}

export default ProductList
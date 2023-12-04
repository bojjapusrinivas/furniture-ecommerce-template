import React from 'react'
import Helmet from '../Components/Helmet/Helmet'
import Commonsection from '../Components/UI/CommonSection/Commonsection'
import { Container, Row, Col } from 'reactstrap'
import "../Styles/shop.css"
import { useState } from 'react'

import products from "../assets/data/products.js"
import ProductList from '../Components/UI/ProductCard/ProductList.jsx'



function Shop() {

  const[productData, SetproductData] =useState(products)

  const handleFilter = (e) =>{
    const filterValue = e.target.value;
    if(filterValue === "sofa"){
      const filterProducts = products.filter(item =>{
        return item.category ==="sofa";
      })
      SetproductData(filterProducts)
    }


    if(filterValue === "chair"){
      const filterProducts = products.filter(item =>{
        return item.category ==="chair";
      })
      SetproductData(filterProducts)
    }

    if(filterValue === "mobile"){
      const filterProducts = products.filter(item =>{
        return item.category ==="mobile";
      })
      SetproductData(filterProducts)
    }

    if(filterValue === "watch"){
      const filterProducts = products.filter(item =>{
        return item.category ==="watch";
      })
      SetproductData(filterProducts)
    }

    if(filterValue === "wireless"){
      const filterProducts = products.filter(item =>{
        return item.category ==="wireless";
      })
      SetproductData(filterProducts)
    }

  }

  const handelSearch = (e) =>{
    const searchTerm = e.target.value;
    const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    SetproductData(searchProducts)


  }

  return  <Helmet title={"SHOP"}>
  <Commonsection title="PRODUCTS"/>
  <section>
  <Container className='padding-top-50'>
    <Row>
     <Col lg="3" md="3">
        <div className="filter-widget">
          <select onChange={handleFilter}>
          <option>Select By Category</option>
          <option value="chair">Chair</option>
          <option value="mobile">Mobile</option>
          <option value="sofa">Sofa</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
          </select>
        </div>
      </Col>

      <Col lg="3" md="3">
        <div className="filter-widget">
          <select>
          <option> Select By Order</option>
          <option>Accending</option>
          <option value="chair">Decessing</option>
          </select>
        </div>
      </Col>

      <Col lg="6" md="6">
        <div className="search-widget">
            <input type="text" name="search" id="search" placeholder='Search...' onChange={handelSearch} />
            <span>
            <i class="ri-search-line"></i>
            </span>
        </div>
      </Col>


    </Row>
  </Container>
  </section>

  <section>
    <Container>
      <Row>

            {
              productData.length === 0 ? <h3 className="text-center mt-5"> No Products were Found</h3>
              :<ProductList data={productData}/>
            }

      </Row>
    </Container>
  </section>






  </Helmet>
}

export default Shop
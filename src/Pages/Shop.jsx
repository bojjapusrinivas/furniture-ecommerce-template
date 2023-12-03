import React from 'react'
import Helmet from '../Components/Helmet/Helmet'
import Commonsection from '../Components/UI/CommonSection/Commonsection'
import { Container, Row, Col } from 'reactstrap'

import "../Styles/shop.css"


function Shop() {
  return  <Helmet title={"SHOP"}>
  <Commonsection title="PRODUCTS"/>
  
  <Container className='padding-top-50'>
    <Row>
      
      <Col lg="3" md="3">
        <div className="filter-widget">
          <select>
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
          
            <input type="text" name="search" id="search" placeholder='Search By Name' />
            <span>
            <i class="ri-search-line"></i>
            </span>
        
        </div>
      </Col>


    </Row>
  </Container>



  </Helmet>
}

export default Shop
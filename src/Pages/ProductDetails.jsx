import React from 'react'
import Helmet from '../Components/Helmet/Helmet'
import Commonsection from '../Components/UI/CommonSection/Commonsection'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import { Container,Row,Col } from 'reactstrap'



function ProductDetails() {
  return  <Helmet title={"PRODUCT DETAILS"}>

  const {id}=useParams();
  const product = products.find(item = item.id === id)

  <Commonsection/>
  <Container>
    <Row>
      <Col lg="6" sm="12">

      </Col>

      <Col lg="6" sm="12">
        
      </Col>
    </Row>
  </Container>
  



  </Helmet>
}

export default ProductDetails
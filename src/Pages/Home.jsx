import React from 'react'

import { Row, Container,Col } from 'reactstrap'

import Helmet from '../Components/Helmet/Helmet'

function Home() {
  const year = new Date().getFullYear();
  return  <Helmet title={"HOME"}>
<section className='hero_section p-2'>
    <Container>
       <Row>
            <Col lg="6" md="6">
                <div className='hero_content'>
                    <p className='hero_subtitle'>Trending product {year}</p>
                    <h2 className="hero_Title"> Make Your Interior More Minimalistic  Modern</h2>
            
                </div>
            </Col>
        <Col lg="6">
        
        </Col>
       </Row>
    </Container>

</section>



  </Helmet>
}

export default Home
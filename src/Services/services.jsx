import React from 'react'
import { Container,Row, Col } from 'reactstrap'

import "./services.css"

function services() {
  return (
    <>
    <section className="services">
        <Container>
            <Row>
                <Col lg="3" md="4">
                    <div className="services_item">
                        <i class="ri-truck-line"></i>  
                        <div className="service-item-content">
                            <h3>Free Shipping</h3>
                            <p>Free shipping on all orders over</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default services
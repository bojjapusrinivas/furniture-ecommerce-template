import React from 'react'
import { Container,Row, Col } from 'reactstrap'

import { motion } from 'framer-motion'

import ServicData from "../assets/data/serviceData"

function services() {
  return (
    <>
    <section className="services">
        <Container>
            <Row>

                {
                    ServicData.map((value,key) => (
                <Col lg="3" md="4" whileTap={{scale:1.2}}>
                    <div  className="services_item" style={{backgroundColor:value.bg}}>
                        <i class={value.icon}></i>  
                        <div className="service-item-content">
                            <h3>{value.title}</h3>
                            <p>{value.subtitle}</p>
                        </div>
                    </div>
                </Col>


                    ))
                }


                
            </Row>
        </Container>
    </section>
    </>
  )
}

export default services
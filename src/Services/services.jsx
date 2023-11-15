import React from 'react'
import { Container,Row, Col } from 'reactstrap'
import "./services.css"

import { motion } from 'framer-motion'

import ServicData from "../assets/data/serviceData"

function services() {
  return (
    <>
    <section className="services padding-top-50">
        <Container>
            <Row>

                {
                    ServicData.map((value,key) => (
                <Col lg="3" md="6" sm="6" xs="12"  >
                    <motion.div whileHover={{scale:1.1}}   className="services_item" style={{backgroundColor:value.bg}}>
                        <i class={value.icon}></i>  
                        <div className="service-item-content">
                            <h3>{value.title}</h3>
                            <p>{value.subtitle}</p>
                        </div>
                    </motion.div>
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
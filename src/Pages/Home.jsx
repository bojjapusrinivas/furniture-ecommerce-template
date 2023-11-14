import React from 'react'
import { Link } from 'react-router-dom'

import { Row, Container,Col } from 'reactstrap'
import Helmet from '../Components/Helmet/Helmet'
import { motion } from 'framer-motion'
import "../Styles/Home.css"

import Services from '../Services/services'


import HeroImg from '../assets/images/hero-img.png'
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim hic alias, impedit quidem quas perferendis, pariatur facere ullam officia, laudantium voluptatem aut eos libero aperiam dolor labore! Culpa, dolores.</p>

                    <motion.button whileTap={{scale:1.2}} className='buy_btn'><Link to="/shop">SHOP NOW</Link></motion.button>
                </div>
            </Col>

          <Col lg="6" md="6">
              <div className="hero-img">
                <img src={HeroImg} alt="heroimg" title="heroimg"/>
              </div>
          </Col>
       </Row>
    </Container>

</section>

<Services/>





  </Helmet>
}

export default Home
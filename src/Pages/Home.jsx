// DEPENDIENCES
import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import { motion } from "framer-motion";

// CSS
import "../Styles/Home.css";

// COMPONENTS
import Helmet from "../Components/Helmet/Helmet";
import Services from "../Services/services";
import ProductList from "../Components/UI/ProductList";

// IMAGES
import HeroImg from "../assets/images/hero-img.png";

// DATA


import products from "../assets/data/products"




function Home() {

  // Get full date
  const year = new Date().getFullYear();

  const [TrendingProduct, SetTrendingProduct] =useState([])

  useEffect( () =>{
    const FiltredTrendingProduct = products.filter(item => item.category==="chair");
    SetTrendingProduct(FiltredTrendingProduct)
    console.log(SetTrendingProduct)
  },[]);





   


  return (
    <Helmet title={"HOME"}>

      {/* HERO SECTION */}
      <section className="hero_section p-2">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending product {year}</p>
                <h2 className="hero_Title">
                  {" "}
                  Make Your Interior More Minimalistic Modern
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  enim hic alias, impedit quidem quas perferendis, pariatur
                  facere ullam officia, laudantium voluptatem aut eos libero
                  aperiam dolor labore! Culpa, dolores.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero-img">
                <img src={HeroImg} alt="heroimg" title="heroimg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* SERVICE SECTION */}
      <Services />

      {/* TRENDING PRODUCT SECTION */}
      <section className="trending-product-section padding-top-50">
          <Container>
              <Row>
                  <Col lg="12">
                      <div className="subtitle text-center">
                        <h2>TRENDING PRODUCT</h2>
                      </div>
                      
                  </Col>
              </Row>

              <Row>
              <ProductList TrendingProduct={TrendingProduct}/>
              </Row>
            </Container>
      </section>
    </Helmet>
  );
}

export default Home;

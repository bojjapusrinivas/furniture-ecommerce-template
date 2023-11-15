// DEPENDIENCES
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "reactstrap";
import { motion } from "framer-motion";

// CSS
import "../Styles/Home.css";

// COMPONENTS
import Helmet from "../Components/Helmet/Helmet";
import Services from "../Services/services";
import ProductList from "../Components/UI/ProductCard/ProductList";
import TimmerClock from "../Components/UI/TimmerClock/TimmerClock";

// IMAGES
import HeroImg from "../assets/images/hero-img.png";
import CounterImg from "../assets/images/counter-timer-img.png"

// DATA

import products from "../assets/data/products";

function Home() {
  // Get full date
  const year = new Date().getFullYear();

  const [TrendingProduct, SetTrendingProduct] = useState([]);
  const [BestSalesProduct, SetBestSalesProduct] = useState([]);
  const [newarrivelmobileProduct, SetNewArrivelMobileProduct] = useState([]);
  const [newarrivelwirelessProduct, setNewarrivelWirelessProduct] = useState([]);
  const [poplerProduct, setPoplerProduct] = useState([]);

  useEffect(() => {
    const FiltredTrendingProduct = products.filter(
      (item) => item.category === "chair"
    );
    const FiltredBestSales = products.filter(
      (item) => item.category === "sofa"
    );

    const Filtredarrivelmobile = products.filter(
      (item) => item.category === "mobile"
    );

    const Filtredarrivelwireless = products.filter(
      (item) => item.category === "wireless"
    );

    const PoplerProducts = products.filter(
      (item) => item.category === "watch"
    );


    SetTrendingProduct(FiltredTrendingProduct);
    SetBestSalesProduct(FiltredBestSales);
    SetNewArrivelMobileProduct(Filtredarrivelmobile);
    setNewarrivelWirelessProduct(Filtredarrivelwireless);
    setPoplerProduct( PoplerProducts);




  }, []);

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
            <ProductList data={TrendingProduct} />
          </Row>
        </Container>
      </section>

      {/* BEST SEALES */}
      <section className="best-sales padding-top-50 ">
        <Container>
          <Row>
            <Col lg="12">
              <div className="subtitle text-center">
                <h2>BEST SELLING PRODUCT</h2>
              </div>
            </Col>
          </Row>

            <Row>
              <ProductList data={BestSalesProduct}/>
            </Row>
           
        </Container>
      </section>

      {/* TIMER COUNTER */}

      <section className="timer-counter margin-top-50">

        <Container>
          <Row>
            <Col lg="6" md="6" className="d-flex flex-column justify-content-center">
              <div className="timer-Top-block px-3 ">
                  <h4 className="text-white fs-6 mb0">Limited Offer</h4>
                  <h3 className="text-white fs-5">Quality Armchari</h3>
              </div>
              <TimmerClock className="mt-3"/>
              <div className="timer-bottom mt-3">
                    <motion.button className="btn" whileTap={{scale:"1.2"}}>
                    <Link to="/shop">
                        Visit Store
                    </Link>
                    </motion.button>
              </div>
            </Col>

            <Col lg="6" md="6" className="timecount-img-block">
              <img src={CounterImg} alt="CounterImg" titl="counterimg"/>
            </Col>
          </Row>
        </Container>

      </section>


      {/* NEW ARRIVALS */}
        <section className="new-arivals padding-top-50 ">
          <Container>
          <Row>
            <Col lg="12">
              <div className="subtitle text-center">
                <h2>NEW ARRIVALS</h2>
              </div>
            </Col>
          </Row>
            <Row>
              <ProductList data={newarrivelmobileProduct} />
              <ProductList data={newarrivelwirelessProduct} />
            </Row>

          </Container>
        </section>

      {/* POPLER ITEMS */}

        <section className="popler-itmes padding-top-50 "> 
          <Container>
          <Row>
            <Col lg="12">
              <div className="subtitle text-center">
                <h2>POPLER ITEMS</h2>
              </div>
            </Col>
          </Row>
            <Row>
              <ProductList data={poplerProduct} />
              
            </Row>

          </Container>
        </section> 




    </Helmet>
  );
}

export default Home;

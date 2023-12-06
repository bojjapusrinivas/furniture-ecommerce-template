import React from "react";
// TITLE OF PAGE
import Helmet from "../Components/Helmet/Helmet";
// PAGE BANNER
import Commonsection from "../Components/UI/CommonSection/Commonsection";

//PRODUCTS DATA
import products from "../assets/data/products";

// PASSING VARIABLE
import { useParams } from "react-router-dom";

// BOOTSTARP
import { Container, Row, Col } from "reactstrap";

//CSS
import "../Styles/ProductDetails.css";

// ONLICK EFFECTS
import { motion } from "framer-motion";
import {  toast } from 'react-toastify';

// HOOKS
import { useState, useRef, useEffect } from "react";

// COMPONENTS
import ProductList from "../Components/UI/ProductCard/ProductList.jsx";


//REDEX
import { useDispatch } from "react-redux";
import { cartAction } from "../redux/Slice/cartSlice.jsx";





function ProductDetails() {
  // PASSING VARIABLE
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  // GETING DATA FROM PRODUCTS USING DESTRACTURE
  const {
    imgUrl,
    productName,
    price,
    shortDesc,
    description,
    reviews,
    avgRating,
    category,
  } = product;

  //  FILTER  ITEM BY CATEGORY
  const relatedProducts = products.filter(
    (items) => items.category === category
  );

  // ACCORDIAN TABS
  const [tab, setTab] = useState("desc");

  // STAR RATING ON SUBMIT FORM
  const [rating, setRating] = useState(null);

  // REVIEW USERNAME USERMESSAGE
  const reviewUser = useRef('')
  const reviewMessage = useRef('')
  
  const reviewsubmithandle = (e) =>{
      e.preventDefault()
      const reviwUserName = reviewUser.current.value
      const reviwUsermessage = reviewMessage.current.value
      toast.success("Review Submitted Successfully ");
      const reviewobj ={
        userName: reviwUserName,
        userMessage: reviwUsermessage,
        userRating: rating,
      }

      console.log(reviewobj)
}

// ADD TO CART 
const dispatch = useDispatch();


const addToCart = () =>{

dispatch(cartAction.addItem({
  id,
  image:imgUrl,
  productName,
  price,
}))
toast.success("Product Added Successfully");

}

// MOVE TO TOP WHEN CLICK ON PRODUCT
useEffect(()=>{
  window.scrollTo(0,0)
},[product]) 







  return (
    <Helmet title={productName}>
      <Commonsection title={productName} />

      <section>
        <Container>
          <Row>
            <Col lg="6" sm="12">
              <img
                src={imgUrl}
                alt={productName}
                title={productName}
                className="product-img"
              />
            </Col>

            <Col lg="6" sm="12">
              <div className="d-flex flex-column h-100 justify-content-center mt-2">
                <h3 className="product-title"> {productName}</h3>
                <div className="product-rating d-flex justify-content-start aling-items-center">
                  <span >
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span >
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span >
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span >
                    <i class="ri-star-s-fill"></i>
                  </span>
                  <span >
                    <i class="ri-star-half-s-fill"></i>
                  </span>
                  <p>
                    (<span>{avgRating}</span> Ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center">
                  <p className="pricing">${price}</p>
                  <span className="Category">
                    Category: {category.toUpperCase()}
                  </span>
                </div>

                <p className="short-desc ">{shortDesc}</p>
                <motion.span
                  whileTap={{ scale: 1.1 }}
                  className="add-cart py-2 text-center"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <div className="tab-wrapper d-flex justify-content-start gap-3 border-top pt-3 border-bottom">
              <h6
                className={`${tab === "desc" ? "active_Tab" : ""}`}
                onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                className={`${tab === "rev" ? "active_Tab" : ""}`}
                onClick={() => setTab("rev")}
              >
                Reviews ({reviews.length})
              </h6>
            </div>

            <div className="tab-content mt-3">
              {tab === "desc" ? (
                <p>{description}</p>
              ) : (
                <div className="review-wrapper">
                  <ul>
                    {reviews.map((item, index) => (
                      <li class="mb-3">
                        <p className="rating">
                          <span>{item.rating}</span> Rating
                        </p>
                        <p className="subdec">{item.text}</p>
                      </li>
                    ))}
                  </ul>

                  <div className="review_form text-center">
                    <h5> Leave Your Expriences</h5>

                    <form action="">
                      <div className="form-group mt-3">
                        <input
                          type="text"
                          className="w-100 border p-2"
                          placeholder="Enter Name"
                          ref={reviewUser}
                          required
                        />
                      </div>

                      <div className="rating form-group mt-3 d-flex justify-content-left px-2">
                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>
                          1 <i class="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>
                          2 <i class="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>
                          3 <i class="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>
                          4 <i class="ri-star-s-fill"></i>
                        </motion.span>
                        <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>
                          5 <i class="ri-star-s-fill"></i>
                        </motion.span>
                      </div>

                      <div className="form-group mt-3">
                        <textarea
                          rows="5"
                          type="text"
                          className="p-2 w-100 border"
                          placeholder="Enter Message"
                          ref={reviewMessage}
                          required
                        />
                      </div>

                      <div className="mt-3">
                        <motion.span
                          whileTap={{ scale: 1.2 }}
                          className="add-cart py-2 text-center px-2 "
                          onClick={reviewsubmithandle}
                        >
                          Submit
                        </motion.span>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </Row>
        </Container>
      </section>

      <section className="padding-top-50">
        <Container>
          <Row>
            <div className="subtitle text-center">
              <h2>YOU MIGHT ALSO LIKE THESE</h2>
            </div>
          </Row>

          <Row>
            <ProductList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;

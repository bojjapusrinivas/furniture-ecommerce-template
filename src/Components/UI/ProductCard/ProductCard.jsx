import React from "react";

//DEPENDIENCES
import {Col } from "reactstrap";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../redux/Slice/cartSlice";
import {  toast } from 'react-toastify';

// CSS
import "./ProductCard.css"


function ProductCard({items}) {

  const Dispach = useDispatch()

  const addtocart = () =>{
    Dispach(cartAction.addItem({
      id:items.id,
      productName:items.productName,
      imgUrl:items.imgUrl,
    }))

   toast.success("Product Added Successfully");
    
  }

  return (
    <>
    <Col lg="3" sm="6" xs="12">
      <div className="product-item">
        <div className="product-img">
          <motion.img whileHover={{scale:0.9}}src={items.imgUrl} alt="productimg" title="productimage" />
        </div>
        <div className="product-info">
          <h3><Link to={`shop/${items.id}`}>{items.productName} </Link></h3>
          <span>{items.category}</span>
        </div>  
        <div className="product-purchase-info">
            <div className="price">
              <span>${items.price}</span>
            </div>
            <motion.div className="product-add-item" whileTap={{scale:1.2}} onClick={addtocart}>
                 <i  class="ri-add-line"></i>
            </motion.div>
      
        </div>
        </div>
      
      </Col>
    </>
  );
}

export default ProductCard;

import React from 'react'

// COMPONENTS
import Helmet from '../Components/Helmet/Helmet'
import Commonsection from "../Components/UI/CommonSection/Commonsection";

// CSS
import "../Styles/Cart.css"

// ONLICK EFFECTS
import { motion } from "framer-motion";
import {  toast } from 'react-toastify';

// BOOTSTRAP COMPONETNS
import { Container, Row, Table, Col } from 'reactstrap';

// REACT ROUTER

import { Link } from 'react-router-dom';

// REDUX
import {cartAction} from "../redux/Slice/cartSlice"
import{useSelector, useDispatch} from "react-redux"




function Cart() {

  const cartItems = useSelector( state =>state.cart.cartItems)
  const totalAmount = useSelector( state =>state.cart.totalAmount)
  const totalQuantity = useSelector(state => state.cart.totalQuantity )
  console.log(cartItems)
  return  <Helmet title={"CART"}>
  <Commonsection title="Shoping Cart"/>
  <section className="padding-top-50">
  <Container>
    <Row>
      <Col lg="8">



        {
          cartItems.length === 0 ? <h4 className="text-center"> No items on the cart</h4>
          :
          <Table className='table table-striped cart-table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>

            {
              cartItems.map((item,index)=>(
                <Tr item={item} key={index}/>
              ))
            }

          </tbody>

        </Table>

        }



      </Col>

     <Col lg="4" className='px-4 pt-3 ordersummery-block'>
  
      <h5 className="text-center font-weight-bold w-100 border-bottom pb-2"><b>ORDER SUMMERY</b></h5>
     <div className="d-flex justify-content-between mt-3">
      <h6> Items: <b> {totalQuantity} </b></h6>
      <h6> Total Amount: <b> ${totalAmount}</b></h6>
     </div>
     <p>Taxes and Shipping will calculate in checkout</p>
     
     <div className="d-flex justify-content-between mt-3">
      <Link to="/shop"  className='cart-btn'>Continue Shoping</Link>

        {
          cartItems.length === 0 ? <Link to=""  className='cart-btn disabled'>CheckOut</Link> :
          <Link to="/checkout"  className='cart-btn'>CheckOut</Link>
        }



     </div> 
       
     </Col>
    </Row>
  </Container>


</section>


  </Helmet>
  
};

const Tr=({item})=>{

  const dispatch = useDispatch()

  const DeleteProduct = () =>{
    dispatch(cartAction.deleteItem(item.id))
    toast.success(`Product Removed From Cart`);
  }

  return <tr >
  <td className='cart-img'><img src={item.imgUrl} alt={item.ProductName}/></td>
  <td className='cart-title'>{item.ProductName}</td>
  <td className='cart-price'>{item.price}</td>
  <td className='cart-quantiy'>{item.quantity}</td>
  <td className='cart-delete'><motion.i whileTap={{scale:1.2}} class="ri-delete-bin-line" onClick={DeleteProduct}></motion.i></td>
</tr>

}
export default Cart
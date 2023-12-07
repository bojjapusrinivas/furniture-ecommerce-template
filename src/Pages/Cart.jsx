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
import { Container, Row, Table, Col, Button } from 'reactstrap';


// REDUX
import {cartAction} from "../redux/Slice/cartSlice"
import{useSelector, useDispatch} from "react-redux"




function Cart() {

  const cartItems = useSelector( state =>state.cart.cartItems)
  const totalAmount = useSelector( state =>state.cart.totalAmount)
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

     <Col lg="4">
     <div className="d-flex justify-content-between">
      <h5 className="text-center font-weight-bold w-100 border-bottom"><b>SUB-TOTAL</b></h5>
      <span>${totalAmount}</span>
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
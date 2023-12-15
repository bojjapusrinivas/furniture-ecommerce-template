import React from 'react'

import Helmet from '../Components/Helmet/Helmet'
//COMPONENTS
import Commonsection from '../Components/UI/CommonSection/Commonsection'
import { Container, Row, Col, Button, FormGroup } from 'reactstrap'
//css
import "../Styles/CheckOut.css"

// Redux
import cartSlice from '../redux/Slice/cartSlice'
import { useSelector } from 'react-redux'

function CheckOut() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return  <Helmet title={"CHECKOUT"}>

  <Commonsection title="CheckOut">

  </Commonsection>

  <section id="checkOut" className='padding-top-50'>
    <Container>
        <Row>
          <Col lg="8">
            <div className='billing-info-block'>
            <h5>Billing Information</h5>

            <FormGroup className='form_group'>
              <input type='text' placeholder='Enter your Name'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='email' placeholder='Enter your Email'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='number' placeholder='Enter your Phone Number'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='text' placeholder='Enter your Streen'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='text' placeholder='Enter your City'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='text' placeholder='Enter your PinCode'/>
            </FormGroup>

            <FormGroup className='form_group'>
              <input type='text' placeholder='Enter your Country'/>
            </FormGroup>
            </div>
          </Col>

          <Col lg="4">
          <div className='CheckOut-info-block'>
            <h5 className='text-dark mb-4'>Check Out Info</h5>
            <div className='bg-dark p-3'>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Total Quantity</h6>
              <h6 className='text-right'>{totalQuantity} items</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Sub Total</h6>
              <h6 className='text-right'>${totalAmount}</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Shipping</h6>
              <h6 className='text-right'>$120</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h6>Free Shipping</h6>
            </div>
            <hr/>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className='mb-0'>Total Cost</h5>
              <h5 className='text-right mb-0'>${totalAmount}</h5>
            </div>
            <hr/>
            <Button className='btn btn-block bg-dark bg-white text-dark w-100'>Place an Order</Button>
          </div>
          </div>
          </Col>
        </Row>
    </Container>


  </section>



  </Helmet>
}

export default CheckOut
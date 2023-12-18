import React from 'react'

import Helmet from '../Components/Helmet/Helmet'
//COMPONENTS
import Commonsection from '../Components/UI/CommonSection/Commonsection'
import { Container,Row, Col, FormGroup, Button } from 'reactstrap'

//redux
import { useSelector } from 'react-redux'

//CSS
import "../Styles/Checkout.css"

function CheckOut() {

  const totalQuantity = useSelector(State => State.cart.totalQuantity)
  const totalAmount = useSelector(State => State.cart.totalAmount)

  return  <Helmet title={"CHECKOUT"}>

  <Commonsection title="CheckOut">

  </Commonsection>


  <section className='padding-top-50'>
    <Container>
      <Row>
        <Col  lg="8">
            <div className="subtitle text-center">
                <h2>Billing Information</h2>
              </div>
         
          <div className="billing-info">
          <FormGroup className="form-group w-100">
            <input className="w-100" type='text' placeholder='Enter your name' />
          </FormGroup>
          <FormGroup className="form-group w-100">
            <input className="w-100" type='email' placeholder='Email Address' />
          </FormGroup>

          <FormGroup className="form-group w-100">
            <input className="w-100" type="Number" placeholder='Enter your Phone Number'/>
          </FormGroup>

          <FormGroup className="form-group w-100">
            <input  className="w-100" type='text' placeholder='Address' />
          </FormGroup>

          
          <FormGroup className="form-group w-100">
            <input  className="w-100" type='text' placeholder='City' />
          </FormGroup>
          <FormGroup className="form-group w-100">
            <input className="w-100" type='text' placeholder='Postel Code' />
          </FormGroup>


          <FormGroup className="form-group w-100">
            <input className="w-100" type='text' placeholder='Country' />
            </FormGroup>

            </div>

         

        </Col>

       <Col lg="4">

       <div className="subtitle text-center">
                <h2>CheckOut Details</h2>
              </div>
        <div className='checkout_cart'> 
            <div className='d-flex justify-content-between'>
              <h6>Total Quantity:</h6>
              <h6>{totalQuantity}</h6>
            </div>
            <div className='d-flex justify-content-between'>
              <h6>SubTotal:$</h6>
              <h6>{totalAmount}</h6>
            </div>

            <div className='d-flex justify-content-between'>
              <h6>FreeShipping</h6>
            
            </div>
            <div className='d-flex justify-content-between'>
              <h6>Total Cost:$</h6>
              <h6>{totalAmount}</h6>
            </div>

            <div className="divider"></div>
            <Button className='btn btn-sm d-block w-100 bg-white text-dark'>Place an Order</Button>
        </div>

        </Col>
      </Row>
    </Container>

  </section>



  </Helmet>
}

export default CheckOut
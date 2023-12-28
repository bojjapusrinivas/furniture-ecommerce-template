import React from 'react'
// COMPONENTS
import Helmet from '../Components/Helmet/Helmet'
import { Container, Row,Form, FormGroup, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function LogIn() {
 
  const [email,setEmail]  = useState()
  const [password,setPassword]  = useState()

  return  <Helmet title={"LOGIN"}>

  <section className="login">
  <Container> 
    <Row>
      <Col xl="4" className='  m-auto p-2 text-cener' >
  <h3 fs-4 className='my-3 text-center fw-bold'>LOGIN</h3>
  <Form className='aut-form bg-dark p-3 text-center' >
      <FormGroup className='my-1 w-100'>
        <input type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className=' w-100 p-2'/>
      </FormGroup>

      <FormGroup className='my-1  w-100'>
        <input type='Password' placeholder='Enter Password' value={password} onChange={(e) =>setPassword(e.target.value)} className=' w-100 p-2'/>
      </FormGroup>

      <Button type='submit' className='log_btn btn btn-md bg-white text-dark my-3 fw-bold '>Login</Button>
      
      <p>Dont't have Account?<Link to="/signup" className='text-default' style={{textDecoration:"none"}}> Create An Account</Link></p>
  </Form>


      </Col>
    </Row>
  </Container>


  </section>



  </Helmet>
}

export default LogIn
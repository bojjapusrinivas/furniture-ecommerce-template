import React from 'react'

import Helmet from '../Components/Helmet/Helmet'
import { Container, Row,Form, FormGroup, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SingUp() {
  return  <Helmet title={"SIGNUP"}>
  const [email,setEmail]  = useState()
  const [password,setPassword]  = useState()
  const [username,setUsername]  = useState()
  const [filename,setFilename]  = useState()
    
  <section className="signup">
  <Container> 
    <Row>
      <Col xl="4" className='  m-auto p-2 text-cener' >
        <h3 fs-4 className='my-3 text-center fw-bold'>SIGNUP</h3>
        <Form className='aut-form bg-dark p-3 text-center ' >
            <FormGroup className='my-1 w-100'>
              <input type='text' placeholder='Enter UserName' className=' w-100 p-2'/>
            </FormGroup>
            <FormGroup className='my-1 w-100'>
              <input type='text' placeholder='Enter Email' className=' w-100 p-2'/>
            </FormGroup>
            <FormGroup className='my-1  w-100'>
              <input type='Password' placeholder='Enter Password' className=' w-100 p-2'/>
            </FormGroup>
            <FormGroup className='my-1 w-100'>
              <input type='file'  className=' w-100 p-2'/>
            </FormGroup>
            <Button type='submit' className='log_btn btn btn-md bg-white text-dark my-3 fw-bold '> Register </Button>
            <p>Already have Account?<Link to="/login" className='text-default' style={{textDecoration:"none"}}>SignIn</Link></p>
        </Form>


      </Col>
    </Row>
  </Container>


  </section>



  </Helmet>
}

export default SingUp
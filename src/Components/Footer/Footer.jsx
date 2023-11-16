//Dependiences
import { Container, Row,Col, FormGroup,Label, Input, Button } from 'reactstrap'
import { motion } from "framer-motion";


// Data import
import footerData from "../../assets/data/footer.json";

// CSS
import "./Footer.css"



function Footer() {
   
  return (
   <>



    <section className="footer-block margin-top-50">
      <Container>
        <Row>
           


            <Col lg="8" col="md-4">
            <Row>
              {footerData.map((tab, index) => (
                <Col lg="3" col="md-4">
                <div key={index}>
                  <p className='tab-header'>{tab.MainTab}</p>
                  <ul className='subtabs'>
                    {tab.SubTab.map((subTab, subIndex) => (
                      <li key={subIndex}>
                        <a href={subTab.Link}>{subTab.subtabs}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                </Col>
              ))}
              </Row>
              </Col>
         
              <Col lg="4" col="md-4">
                <div className="footer-subscribe-block px-3">  
                <p> Sign up for emails packed with finds and inspiration</p>
                    
                <FormGroup className='d-flex'>
                  <Col sm={10}>
                    <Input className="subscribe-input" name="email" placeholder="Enter Your Email Id" type="email"
                    />
                  </Col>
                  <Button  sm={2} className='subscribe-btn' >
                     Subscribe
                  </Button>
                </FormGroup>

              </div>    
              </Col>
           
        </Row>
      </Container>
    </section>
   </>
  )
}

export default Footer
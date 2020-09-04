import React from 'react'
import FooterPagePro from '../components/Footer'
import image1 from "../assets/unsplash2.jpg";
import logo2 from "../assets/unsplash2.jpg";

import { Container } from 'react-bootstrap';
import {Row, Col, Image,Form} from 'react-bootstrap'

function AboutUs() {
  return (
    <div>
      <Container className="d-flex mt-5">
        <div>
          <h1>Our misson</h1>
          <h6>Our mission is to build digital products that last. By being reasonable product craftsmen, we're able to avoid surprises and focus on the quality of the software we deliver.</h6>
          <p>What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. All that is possible thanks to our great team.</p>
          <Form className="mt-4">
            <h5 style={{marginTop: "30px"}}>Contacts: +996 557 76 64 53</h5>
            <h5 style={{marginTop: "20px"}}>Address: Bishkek city 312</h5>
            <h5 style={{marginTop: "20px"}}>Fax: +475 27865 23485</h5>
          </Form>
          
        </div>
      
        <img style={{width:"600px", height:"400px"}} src={image1}></img>
      </Container>
     

      <Container className="mt-5">
        <h2 style={{textAlign:"center"}}>Our team</h2>
          <Row style={{textAlign:"center", marginTop:"60px"}} >
            <Col xs={6} md={4}>
            <Image style={{width:"170px", height:"180px"}} src={logo2} rounded />
              <h3 className="mt-4">Name</h3>
              <p className="mt-3"> 
            What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. All that is possible thanks to our great team.</p>
            </Col>
            <Col xs={6} md={4}>
              <Image style={{width:"170px", height:"180px"}} src={logo2} roundedCircle />
              <h3 className="mt-4">Name</h3>
              <p className="mt-3"> 
            What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. All that is possible thanks to our great team.</p>
            </Col>
            <Col xs={6} md={4}>
            <Image style={{width:"170px", height:"180px"}} src={logo2} rounded />
              <h3 className="mt-4">Name</h3>
              <p className="mt-3"> 
            What helps us achieve it is our goal to become the no. 1 JavaScript software development company in the world by focusing on one technology, supporting the ecosystem (open source). We're eager to help technology driven companies achieve their business goals with our help. All that is possible thanks to our great team.</p>
            </Col>
          </Row>
      </Container>
      
      <FooterPagePro />
    </div>
  )
}

export default AboutUs

import React from 'react'

import { Container, Form, NavLink } from 'react-bootstrap';
import PaymentForm from '../components/CreditCard';
import FooterPagePro from '../components/Footer';
import { RiVisaFill } from 'react-icons/ri';
import { FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import { SiQiwi } from 'react-icons/si';

function Payment() {
  return (
    <div>
        <Container>
        <h2 className="mt-4">Форма оплаты</h2>
        <h3 className="mt-4">Выберите метод оплаты:</h3>
        
        
        <Form className="mt-4 d-flex">
          <NavLink><RiVisaFill style={{fontSize:"40px", marginRight:"5px"}}/></NavLink>
          <NavLink><FaCcMastercard style={{fontSize:"40px", marginRight:"5px"}} /></NavLink>
          <NavLink> <SiQiwi style={{fontSize:"40px", marginRight:"5px"}} /></NavLink>
          <NavLink><FaCcPaypal style={{fontSize:"40px", marginRight:"5px"}} /></NavLink>
        </Form>

            <PaymentForm />
      </Container> , 
      <FooterPagePro />
      
    </div>
        
    
  )
}

export default Payment


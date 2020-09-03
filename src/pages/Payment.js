import React from 'react'

import { Container } from 'react-bootstrap';
import PaymentForm from '../components/CreditCard';
import FooterPagePro from '../components/Footer';

function Payment() {
  return (
    <div>
        <Container>
        <h2>Payment Form</h2>
            <PaymentForm />
      </Container> , 
      <FooterPagePro />
    </div>
        
    
  )
}

export default Payment


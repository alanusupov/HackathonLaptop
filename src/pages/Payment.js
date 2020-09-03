import React from 'react'

import { Container } from 'react-bootstrap';
import PaymentForm from '../components/CreditCard';

function Payment() {
  return (
      <Container>
        <h2>Payment Form</h2>
            <PaymentForm />
      </Container>    
    
  )
}

export default Payment


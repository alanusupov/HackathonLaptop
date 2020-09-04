import React from 'react';
import CarouselBox from '../components/CarouselBox';
import  { Container} from 'react-bootstrap';
import Footer from '../components/Footer';
import Product from './Product';






function Home() {
  return (
    <div style={{backgroundColor: "silver"}}>
      <CarouselBox className="mb-3" />

        <Product/>
        
      <Container className="mt-3">
          
      </Container>

      <Footer />
     
    </div>
  )
}

export default Home

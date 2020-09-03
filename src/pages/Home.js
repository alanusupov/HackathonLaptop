import React from 'react';
import CarouselBox from '../components/CarouselBox';
import Carousel, { Container, Button } from 'react-bootstrap';
import {Card, CardDeck,ListGroup, ListGroupItem, CardColumns} from 'react-bootstrap';
import pexels from "../assets/pexels.jpg";
import Footer from '../components/Footer';
import { FaCartPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';






function Home() {
  return (
    <div>
      <CarouselBox className="mb-3" />
        <Product/>
      <Container className="mt-3">
          <Footer />
      </Container>



    </div>
  )
}

export default Home

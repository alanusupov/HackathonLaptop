import React from 'react'
import Carousel from 'react-bootstrap'
import image1 from '../assets/alexander.jpg'
import image2 from '../assets/malte.jpg'
import image3 from '../assets/marku.jpg'
import { Container } from 'react-bootstrap'


function Carousel() {
  return (
    <Container>
          <Carousel>
      <Carousel.Item >
          <img className="d-block w-100" src={image1} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    
  )
}

export default Carousel

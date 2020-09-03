import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/Carousel.jpg'
import image2 from '../assets/malte.jpg'
import image3 from '../assets/marku.jpg'


function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item style={{ height:"500px"}}>
          <img className="d-block w-100" src={image1} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height:"500px"}}>
          <img className="d-block w-100" src={image2} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height:"500px"}}>
          <img className="d-block w-100" src={image3} alt="forest"/>
          <Carousel.Caption>
              <h3>Forest</h3>
              <p>fsigf sedfviujbh rvoiuwervf ewroviw voiwurv wou vow jvwiviw voi wof vu</p>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselBox

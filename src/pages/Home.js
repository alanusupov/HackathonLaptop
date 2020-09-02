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


<Container className="mt-3">
     <CardColumns className="mt-3">
     
          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>

          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>

          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>

          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>

          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>

          <Card className="mt-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pexels} />
              <Card.Body>
                <Card.Title>Lenovo</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
                <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
              </Card.Body>
          </Card>


        
     </CardColumns>
      

       
</Container>

<Container className="mt-3">
<Footer />
</Container>

     
    </div>
  )
}

export default Home

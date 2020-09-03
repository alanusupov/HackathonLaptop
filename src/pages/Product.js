import React, { useEffect } from 'react'
import  { Container, Button } from 'react-bootstrap';
import {Card,ListGroup, ListGroupItem, CardColumns} from 'react-bootstrap';
import pexels from "../assets/pexels.jpg";
import { FaCartPlus } from 'react-icons/fa';
import { CgDetailsMore } from 'react-icons/cg';
import { connect } from 'react-redux';
import {getProduct, addNewProduct} from '../redux/Action'
import Axios from 'axios';
import { url } from '../url/url';


function Product({ getProduct , ...props }) {
  useEffect(()=>{
    Axios.get(url + '/products')
      .then((res)=>{
        const {data} = res;
        console.log(res);
        if(data)getProduct(data)
      })
  },[getProduct])
  console.log(props.products);



  return (
    <Container>
      <CardColumns className="mt-3">
     {props.products ? props.products.map((product) => (
       <Card  className="mt-3 bg-info" style={{width: '18rem'}}>
         <Card.Img variant="top" src={pexels} />
         <Card.Body>
     <Card.Title>{product.product}</Card.Title>
           <Card.Text>
             Price: {product.price}
           </Card.Text>
         </Card.Body>
         <ListGroup className="list-group-flush">
           <ListGroupItem className="bg-info">Cras justo odio</ListGroupItem>
           <ListGroupItem className="bg-info">Dapibus ac facilisis in</ListGroupItem>
           <ListGroupItem className="bg-info">Vestibulum at eros</ListGroupItem>
         </ListGroup>
         <Card.Body>
           <Button className="mr-2" href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
     </Card>  
     )):<p>Product List Is Empty</p> }
     
</CardColumns>
    </Container>
  )
}

const mapStateToProps = (state) => {
  let {products} = state.ProductReducer;
  return {products}
}

export default connect(mapStateToProps,{getProduct, addNewProduct})(Product)

import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Axios from 'axios';
import {url} from '../url/url'
import { connect } from 'react-redux';
import {addNewProduct} from '../redux/Action'
function Order(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [info, setInfo] = useState('');


function addProduct(e){
  e.preventDefault();
  const data ={
    id: Date.now(),
    name,
    number,
    email,
    product,
    price,
    info,
    image
  }
  if(name !== '' && email !== ''){
    async function addData(){
      const res = await Axios.post(url + '/products', data)
      console.log(res);
      props.addNewProduct(data)
      setEmail('');
      setName('');
      setNumber('');
      setPrice('');
      setProduct('');
      setInfo('');
      setImage('');
    }addData();
  }
}



  return (
    <Container>
      <Form onSubmit={(e)=>addProduct(e)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
        value={name} 
        onChange={(e)=> setName(e.target.value)} 
        type="name" name="name" id="name" placeholder="Enter your Name" />
      </FormGroup>
      <FormGroup>
        <Label for="number">Number</Label>
        <Input 
        value={number} 
        onChange={(e)=> setNumber(e.target.value)}
         type="number" name="number" id="number" placeholder="Enter your Number" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
         value={email}
          onChange={(e)=> setEmail(e.target.value)}
           type="email" name="email" id="exampleEmail" placeholder="Enter Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Product Name">Product Name</Label>
        <Input 
        value={product} 
        onChange={(e)=> setProduct(e.target.value)} 
        type="text" name="product" id="Product Name" placeholder="Enter the Product Name" />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input 
        value={price}
         onChange={(e)=> setPrice(e.target.value)} 
         type="text" name="price" id="price" placeholder="Enter the Price" />
      </FormGroup>
      <FormGroup>
        <Label for="info">Product Info</Label>
        <Input 
        value={info}
         onChange={(e)=> setInfo(e.target.value)} 
         type="text" name="info" id="info" placeholder="Enter the Product Information" />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input 
        value={image}
         onChange={(e)=> setImage(e.target.value)} 
         type="text" required name="image" id="image" placeholder="Enter the Image URL" />
      </FormGroup>
      
      <Button type="submit">Submit</Button>
    </Form>

    </Container>
    
  )
}

export default connect(null, {addNewProduct})(Order) 

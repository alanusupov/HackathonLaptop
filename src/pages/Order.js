import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import Axios from 'axios';
import {url} from '../url/url'
import { connect } from 'react-redux';
import {addNewProduct} from '../redux/Action'
import FooterPagePro from '../components/Footer';
// import FooterPagePro from '../components/Footer';
function Order(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');


function addProduct(e){
  e.preventDefault();
  const data ={
    id: Date.now(),
    name,
    number,
    email,
    product,
    price
  }
  if(name !== '' && email !== ''){
    async function addData(){
      const res = await Axios.post(url + '/products', data)
      console.log(res);
      // props.addNewContact(data)
      setEmail('');
      setName('')
    }addData();
  }
}



  return (
    
    <div>
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
        type="product" name="product" id="Product Name" placeholder="Enter the Product Name" />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input 
        value={price}
         onChange={(e)=> setPrice(e.target.value)} 
         type="price" name="price" id="price" placeholder="Enter the Price" />
      </FormGroup>
      
      <Button type="submit">Submit</Button>
    </Form>

    </Container>
   
       
   <div>
     <FooterPagePro/>
   </div>
    </div>
    
    
  
    
  )
}

export default connect(null, {addNewProduct})(Order) 

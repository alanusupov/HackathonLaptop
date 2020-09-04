import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Card, ListGroup, CardColumns } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { connect } from "react-redux";
import {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart
} from "../redux/Action";
import Axios from "axios";
import { url } from "../url/url";
import { Input } from "reactstrap";
import styles from '../pages/button.module.css';

function Product({ getProduct, ...props }) {
  const [productN, setProductN] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [isEdit, setIsEdit] = useState();



  useEffect(() => {
    Axios.get(url + "/products").then((res) => {
      const { data } = res;
      console.log(res);
      if (data) getProduct(data);
    });
  }, [getProduct]);
  console.log(props.products);

  function delData(id) {
    async function delProduct(id) {
      const res = await Axios.delete(url + `/products/${id}`);
      console.log(res);
      props.deleteProduct(id);
    }
    delProduct(id);
  }
  function EditData(id, productN, price, info) {
    setProductN(productN);
    setPrice(price);
    setInfo(info);
    if (isEdit !== id) {
      setIsEdit(id);
    } else {
      setIsEdit("");
    }
  }
  function saveData(id) {
    const data = {
      id,
      productN,
      price,
      info,
    };
    setIsEdit("");

    async function saveProduct(id) {
      const res = await Axios.patch(url + `/products/${id}`, data);
      props.updateProduct(res.data);
      console.log(res.data);
    }
    saveProduct(id);
  }
  function addCart(id){
    props.addToCart(id)
  }

  return (
    <Container>
      <CardColumns className="mt-3">
     {props.products ? props.products.map((product) => (
       <Card  className="mt-3 bg-info" style={{width: '18rem'}}>
         <Card.Img variant="top"  src={pexels} />
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
           <Button className={styles.button} style={{marginRight: "10px"}} href="#"> <CgDetailsMore style={{fontSize: "20px"}}/> Details</Button>
           <Button className={styles.button} href="#"> <FaCartPlus style={{fontSize: "20px"}}/> Add to cart</Button>
         </Card.Body>
     </Card>  
     )):<p>Product List Is Empty</p> }
     
</CardColumns>
    </Container>
  );
}

const mapStateToProps = (state) => {
  let { products } = state.ProductReducer;
  return { products };
};
const mapDispatchToProps= (dispatch)=>{
  return{
     addToCart: (id)=>{dispatch(addToCart(id))}
       }
  }

export default connect(mapStateToProps, {
  getProduct,
  addNewProduct,
  deleteProduct,
  updateProduct,
  addToCart
})(Product);

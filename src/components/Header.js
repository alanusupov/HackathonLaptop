import { BiMeteor } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import { Navbar, Nav, Form,FormControl,Button, NavDropdown} from 'react-bootstrap';
// import Sidebar from "./Sidebar";
import React from 'react'
import {Link} from 'react-router-dom'

function Header () {
  return (
    <div>
       <Navbar style={{paddingBottom:"-20px", paddingTop:"-15px"}}  collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link  to="/home"><BiMeteor style={{fontSize:"40px", marginLeft: "40px"}}/><h4>LaptopKG</h4></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/home">Home</Link>
              <Link className="nav-link" to="/about">About us</Link>
              <Link className="nav-link" to="/payment">Payment</Link>
              <Link className="nav-link" to="/order">Order</Link>

              <NavDropdown title="Каталог товаров" id="collasible-nav-dropdown">
                <NavDropdown.Item> <Link className="nav-link" to="/lenovo"></Link>Lenovo </NavDropdown.Item>
                <NavDropdown.Item> <Link className="nav-link" to="/asus"></Link>Asus</NavDropdown.Item>
                <NavDropdown.Item> <Link className="nav-link" to="/microsoft"></Link>Microsoft</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item> <Link className="nav-link" to="/hp"></Link>HP</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>

                {/*====== Cart section =====*/}

            <Form>
            <Link style={{ color:"white"}} to="/cart">Мои заказы <FaCartPlus style={{fontSize: "60px", paddingRight: "30px", color:"white"}}/> </Link>
            </Form>
            <Form inline className="mr-3">
              <FormControl type="text" placeholder="Поиск по названию" className="mr-sm-3" />
              <Button variant="outline-primary">Search</Button>
            </Form>
             
            </Nav>
         </Navbar.Collapse>
      </Navbar>
      {/* <Sidebar/> */} 
    </div>
  )
}

export default Header

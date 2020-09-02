import { BiMeteor } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import React from 'react';
import { Navbar, Nav, NavLink, Form,FormControl,Button} from 'react-bootstrap';
// import Sidebar from "./Sidebar";



function Header() {

  return (
    <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand  href="/home"><BiMeteor style={{fontSize:"40px", marginLeft: "40px"}}/><h4>OurMarket</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink href="/home">Home</NavLink>
              <NavLink href="/about">About us</NavLink>
              <NavLink href="/contacts">Contacts</NavLink>
              <NavLink href="/address">Address</NavLink>
              <NavLink href="/order">Order</NavLink>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
            <Form inline className="mr-3">
              <FormControl type="text" placeholder="Поиск по названию" className="mr-sm-3" />
              <Button variant="outline-primary">Search</Button>
            </Form>
              <NavLink className="mr-3"  style={{fontSize: "30px"}} href="/dash"><FaCartPlus/></NavLink>
              <NavLink className="d-flex align-items-center" eventKey={2} href="/registration">
                Вход / Регистрация
              </NavLink>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
      {/* <Sidebar/> */}


    </div>
  )
}

export default Header

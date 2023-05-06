import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import './Navbar.css';

export const MenuNavegacionSuperior = () => {
    return (
        <Navbar variant="dark" className="NavbarMargenes" >
        <Container fluid>
        <Navbar.Brand href="#home"> <span>Inventarios App</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3"> 
          <NavItem>
            <Nav.Link  href="#deets"> <span>User</span></Nav.Link>
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    );
}
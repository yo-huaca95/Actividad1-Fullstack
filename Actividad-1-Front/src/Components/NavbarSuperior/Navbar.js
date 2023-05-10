import React from "react";
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import './Navbar.css';


export const MenuNavegacionSuperior = () => {
    return (
        <Navbar variant="dark" className="NavbarMargenes TituloComponentes" >
        <Container fluid>
        <Navbar.Brand href="#home"><Icon.Box color="white" size={18} ></Icon.Box> <span className="spanLetraTextoTitulo">Inventarios App</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3"> 
          <NavItem>
            <Nav.Link  href="#deets"><Icon.Person color="white" size={18} ></Icon.Person> <span className="spanLetraTextoTitulo"> UserAdmin</span></Nav.Link>
          </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
    );
}
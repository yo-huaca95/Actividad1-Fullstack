import React from 'react'
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import './MenuIzquierdo.css';
import { AppRouterMenuIzquierdo } from './Rutas/AppRouterMenuIzquierdo';


export const MenuIzquierdo = () => {
    return (
        <Tab.Container id="list-group-tabs-example" >
        <Row className='fila'>
          <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action variant='light'>
            <Link to="/RegistroProductos">Registro de productos</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Compras">Compras</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Ventas">Ventas</Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Productos-Disponibles">Productos disponibles</Link>
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
            <AppRouterMenuIzquierdo/>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }



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
          <Col md={{ span: 3 }} className='ColumnMenu'>
          <ListGroup>
            <ListGroup.Item action variant='light'>
            <Link to="/RegistroProductos"><span className="spanletraTextoNormal" >Registro de productos</span></Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Compras"><span className="spanletraTextoNormal" >Compras </span></Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Ventas"><span className="spanletraTextoNormal" >Ventas</span></Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Productos-Disponibles"><span className="spanletraTextoNormal" >Productos disponibles </span></Link>
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={{ span: 9  }}>
            <Tab.Content>
            <AppRouterMenuIzquierdo/>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }



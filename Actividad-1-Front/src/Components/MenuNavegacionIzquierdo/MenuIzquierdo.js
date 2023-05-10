import React, { useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListGroup from 'react-bootstrap/ListGroup';
import './MenuIzquierdo.css';
import { MarcoOpciones } from './OpcionesMenu/MarcoOpciones';



export const MenuIzquierdo = () => {

  var [opcionMenu,setOpcion]=useState(1);
    return (
        <Tab.Container id="list-group-tabs-example" >
        <Row >
          <Col md={{ span: 3 }} className='ColumnMenu'>
          <ListGroup>
            <ListGroup.Item action variant='light'>
            <Link to="/RegistroProductos" onClick={()=> setOpcion(opcionMenu=1)} > <Icon.CaretRightFill color="#1989ff" size={14} ></Icon.CaretRightFill><span className="spanletraTextoNormal">Registro de productos</span></Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Compras" onClick={()=>setOpcion(opcionMenu=2)} ><Icon.CaretRightFill color="#1989ff" size={14} ></Icon.CaretRightFill><span className="spanletraTextoNormal" >Compras </span> </Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Ventas" onClick={()=>setOpcion(opcionMenu=3)} ><Icon.CaretRightFill color="#1989ff" size={14} ></Icon.CaretRightFill><span className="spanletraTextoNormal" >Ventas</span></Link>
            </ListGroup.Item>
            <ListGroup.Item action variant='light'>
            <Link to="/Productos-Disponibles" onClick={()=>setOpcion(opcionMenu=4)} ><Icon.CaretRightFill color="#1989ff" size={14} ></Icon.CaretRightFill><span className="spanletraTextoNormal" >Productos disponibles </span></Link>
            </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col md={{ span: 9  }}>
            <Tab.Content>
            <MarcoOpciones opcion={opcionMenu}/>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  }



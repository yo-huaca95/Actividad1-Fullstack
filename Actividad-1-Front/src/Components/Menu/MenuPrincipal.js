
//import * as Icon from 'react-bootstrap-icons';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MenuNavegacionSuperior } from '../NavbarSuperior/Navbar';
import {MenuIzquierdo} from '../MenuNavegacionIzquierdo/MenuIzquierdo'


export const MarcoOpciones= ()=>{
    return (
        <>
        <Row className='Margen-App' >
        <Col md={{ span: 8, offset: 2 }} >
        <div className="card text-center dimencionar">
        <div >
        <MenuNavegacionSuperior/>
       </div>
       <div className="card-body">
       <MenuIzquierdo></MenuIzquierdo>
      </div>
       </div>
      </Col>
      </Row>
      </>
    );

}
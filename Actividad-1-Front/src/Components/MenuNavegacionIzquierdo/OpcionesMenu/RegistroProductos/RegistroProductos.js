import React from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import './RegistroProductos.css';
import {Tabla} from './Tabla/Tabla'

export  const RegistroProductos= () => {

    return (
      <Container className="conta">
      <Row>
      <Col >
      <Card>
      <Card.Header className="TituloComponentes" ><span className="spanLetraTextoTitulo">Registrar Producto</span></Card.Header>
        <Card.Body>
      <Form >
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column md={{ span: 3  }} ><span className="spanletraTextoNormal" >Producto</span></Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control  type="text" placeholder="Ingrese producto" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" controlId="formBasicPassword">
        <Form.Label column md={{ span: 3  }}><span className="spanletraTextoNormal">Precio</span> </Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control type="number" placeholder="Precio del producto" min={0} />
        </Col>
      </Form.Group>
      <Button variant="primary" >
        Crear
      </Button>
    </Form>
    </Card.Body>
    </Card>

    </Col>
  <Col >
  <Card  className="CardsTablePrRegistrar">
      <Card.Header className="TituloComponentes"><span className="spanLetraTextoTitulo">Productos Registrados</span></Card.Header>
        <Card.Body>
      <Container >
       <Tabla/>
     </Container>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    );
}

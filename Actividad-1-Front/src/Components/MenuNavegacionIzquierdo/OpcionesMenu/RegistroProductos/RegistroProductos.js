import React from "react";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import './RegistroProductos.css';
import {Tabla} from './Tabla/Tabla'





export  const RegistroProductos= () => {

    return (
      <Container >
      <Row >
      <Col md={{ span: 5 }}>
      <Card className="ajusteDimencion" >
      <Card.Header className="TituloComponentes" ><span className="spanLetraTextoTitulo">Registrar Producto</span></Card.Header>
        <Card.Body>
      <Form >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column md={{ span: 3  }} ><span className="spanletraTextoNormal" >Producto</span></Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control  type="text" placeholder="Ingrese producto" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" >
        <Form.Label column md={{ span: 3  }}><span className="spanletraTextoNormal">Precio</span> </Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control type="number" placeholder="Precio del producto" min={0} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}  className="mb-3">
        <Form.Label column md={{ span: 3  }}><span className="spanletraTextoNormal">Lote</span> </Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control type="number" placeholder="Lote del producto" min={0} />
        </Col>
      </Form.Group>
      <Button size="sm" variant="primary"  >
        <span className="spanletraTextoNormal btnspan">Crear</span>
      </Button>
    </Form>
    </Card.Body>
    </Card>

    </Col>
  <Col md={{ span: 7 }} >
  <Card  className="CardsTablePrRegistrar">
      <Card.Header className="TituloComponentes"><span className="spanLetraTextoTitulo">Productos Registrados</span></Card.Header>
        <Card.Body>
       <Tabla/>
    </Card.Body>
    </Card>
    </Col>
    </Row>
      </Container>
    );
}

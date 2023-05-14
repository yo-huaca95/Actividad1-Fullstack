import React from "react";
import { Container,Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";

import './Home.css';
import * as Icon from 'react-bootstrap-icons';


export const Home= ()=>{
  
    return (
        <Container fluid className="Homes">
      
          <div className="justify-content-center Homes">
           <Row className="rowHome">
            <Col md={{ span: 8, offset: 2 }} className="d-grid gap-2" >
           <Button variant="primary" size="lg" ><Link to="/Menu" ><Icon.Box color="white" size={33} ></Icon.Box><span className="spanLetraboton"> Inventarios App Ingreso </span></Link><Icon.CaretRightFill color="white" size={30} ></Icon.CaretRightFill></Button>
           </Col> 
          </Row>
          </div>
      </Container>
    );

}
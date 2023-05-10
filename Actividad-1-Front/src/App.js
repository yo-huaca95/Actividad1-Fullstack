import './App.css';
import { MenuNavegacionSuperior } from './Components/NavbarSuperior/Navbar';
import {MenuIzquierdo} from './Components/MenuNavegacionIzquierdo/MenuIzquierdo'
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Row className='Margen-App' >
        <Col md={{ span: 8, offset: 2 }} >
      <div className="card text-center dimencionar">
      <div >
      <MenuNavegacionSuperior/>
     </div>
     <div className="card-body">
       <MenuIzquierdo></MenuIzquierdo>
    </div>
    {/* <div className="card-footer text-muted">
    </div> */}
       </div>
      </Col>
      </Row>
    </div>
  );
}

export default App;

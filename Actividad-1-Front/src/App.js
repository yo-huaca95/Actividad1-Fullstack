import './App.css';
import { MenuNavegacionSuperior } from './Components/NavbarSuperior/Navbar';
import {MenuIzquierdo} from './Components/MenuNavegacionIzquierdo/MenuIzquierdo'
import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container className='container'>
      <div class="card text-center">
      <div class="card-header">
      <MenuNavegacionSuperior/>
     </div>
     <div class="card-body">
      <Router>
       <MenuIzquierdo></MenuIzquierdo>
      </Router>
    </div>
    <div class="card-footer text-muted">
    </div>
       </div>
      </Container>
    </div>
  );
}

export default App;

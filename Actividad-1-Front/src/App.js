import React  from "react";
import './App.css';
//import { Home } from "./Components/Home/Home";
import { RutasPrincipales } from "./Rutas/RutasPrincipales/RutasPrincipales";
//import { Button } from "react-bootstrap";
import { UpdateListaProvider } from "./Context/UpdateListaProvider.jsx";

function App() {
  
  return (
    <UpdateListaProvider>
    <div className="App">
     <RutasPrincipales/>
    </div>
    </UpdateListaProvider>
  );
}

export default App;

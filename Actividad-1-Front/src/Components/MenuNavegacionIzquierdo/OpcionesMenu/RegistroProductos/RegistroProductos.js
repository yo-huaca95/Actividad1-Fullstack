import React, {useEffect, useState } from "react";
import {Card, Col, Container,Row} from "react-bootstrap";
//import * as Icon from 'react-bootstrap-icons';

import './RegistroProductos.css';
import {Tabla} from './Tabla/Tabla'
import {PRODUCTOS} from "./Tabla/productos";
import { COLUMNS as columnasTabla}  from "./Tabla/columns";
import { FormularioRegistroProductos } from "./Formulario/FormularioRegistroProductos";
import {useActualizacionStore} from '../../../../CustomHook/CustomHookLocalStore/useActualizacionStore'
import { useGetCodeCambio } from "../../../../Context/UpdateListaProvider";
//import { UpdateListaProvider } from "../../../../Context/UpdateListaProvider";


localStorage.setItem('productos',JSON.stringify(PRODUCTOS));

export  const RegistroProductos= () => {
    console.log("Registro Productos..");
    const {getLocalStorage,eliminarProductoCH} =useActualizacionStore()
    const [productos,setProducto]  =useState(getLocalStorage);
    const codeCambio=useGetCodeCambio()

    useEffect(()=>{
      setProducto(getLocalStorage);
    },[codeCambio,getLocalStorage])
    //console.log("dato Context code Cambio"+ codeCambio);

    const agregarProducto= (producto)=>{
      setProducto([
        ...productos,
        producto
      ])
    }

    const eliminarProducto=(producto)=>{
      
      const newProductos=productos.filter((product)=>product.id!==producto.id)
      setProducto(newProductos);
      eliminarProductoCH(newProductos);
    }

    return (
   
      <Container >
      <Row >
      <Col md={{ span: 5 }}>
      <Card className="ajusteDimencion" >
      <Card.Header className="TituloComponentes" ><span className="spanLetraTextoTitulo">Registrar Producto</span></Card.Header>
        <Card.Body>
          <FormularioRegistroProductos opcion="Crear" agregarProducto={agregarProducto}  productos={productos}  productoEditar={null} />
    </Card.Body>
    </Card>

    </Col>
  <Col md={{ span: 7 }} >
  <Card  className="CardsTablePrRegistrar">
      <Card.Header className="TituloComponentes"><span className="spanLetraTextoTitulo">Productos Registrados</span></Card.Header>
        <Card.Body>
       <Tabla columnasTabla={columnasTabla} productos={productos} eliminarProducto={eliminarProducto} />
    </Card.Body>
    </Card>
    </Col>
    </Row>
      </Container>

    );
}

import React, {  useEffect } from "react";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {Card, Col, Container,Row} from "react-bootstrap";
import {FormularioRegistroProductos} from '../Formulario/FormularioRegistroProductos'
import './Edicion.css'



export const Edicion = (props)=>{
    console.log("Edicion...");
   

    //console.log(user);
    const [show, setShow] = useState(false);
    const [dataEditar, setDataEditar] = useState(false);
    const [codigoProces,setCodeProceso]=useState(0);


    //console.log(props);
    
    useEffect(()=>{
      setShow(props.dataEditar.ActivaModal);
      setDataEditar(props.dataEditar.DataEditar);
      setCodeProceso(props.dataEditar.CodeProcess);
 
    },[props.dataEditar.ActivaModal,props.dataEditar.DataEditar,props.dataEditar.CodeProcess]
    )
    const handleClose = () => {
      setShow(false)
      setDataEditar({
        id:null,
        Producto:'',
        Precio:'',
        Lote:''
      })
      setCodeProceso(0)
    };
    
    console.log(codigoProces);

    return (
        <>
         <Container >
         <Row >
         <Col md={{ span: 12 }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header> 
        <Modal.Body>
        <Card className="ajusteDimencion" >
        <Card.Header className="TituloComponentes" ><span className="spanLetraTextoTitulo">Editar Producto</span></Card.Header>
        <Card.Body>
        <FormularioRegistroProductos opcion="Editar" closeModal={handleClose} agregarProducto="" productos="" productoEditar={dataEditar}  />
        </Card.Body>
        </Card>
        </Modal.Body>
      </Modal>
      </Col>
      </Row>
      </Container>
    </>
    );

}
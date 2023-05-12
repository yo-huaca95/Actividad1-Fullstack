import React, { useEffect, useState } from "react";
import {Col,Form, Row} from "react-bootstrap";
//import * as Icon from 'react-bootstrap-icons';

import {BotonesOpcionales} from '../BotonesOpciones/BotonesOpcionales' 
import './FormularioRegistroProductos.css'


export const FormularioRegistroProductos = (props) => {

      const [datosFormulario,setDatosFormulario]=useState({       
        id:null,
        Producto:'',
        Precio:'',
        Lote:''
      })
      

      const eventoSubmit =(e)=>{
        e.preventDefault();
        
        if(datosFormulario.Producto !=='' && datosFormulario.Precio !==null && datosFormulario.Lote !==null && props.opcion!=="Editar") {
        
            do {
              datosFormulario.id=Math.floor(Math.random()*100);
              //console.log("resultado:" +datosFormulario.id)
               } while(props.productos.filter((producto)=>producto.id===datosFormulario.id).length>0 && datosFormulario.id!==0);

        props.agregarProducto(datosFormulario)
        setDatosFormulario({
          id:null,
          Producto:'',
          Precio:'',
          Lote:''
        })
        }else if(props.opcion==="Crear") {
           alert("Por Favor ingrese los datos...") 
        }

      }  
      
      const editarProducto=(producto)=>{
        //console.log(producto);
        var productos=JSON.parse(localStorage.getItem("productos"))
        productos=productos.map(produc => produc.id !== producto.id ? produc : producto);
       // console.log(productos);
        localStorage.setItem('productos',JSON.stringify(productos));
      }

      useEffect(()=>{
        if(props.productoEditar !==null ){
          console.log(props.productoEditar)
          setDatosFormulario(props.productoEditar)
        }else{
          setDatosFormulario({
            id:null,
            Producto:'',
            Precio:'',
            Lote:''
          })
        }
      },[props.productoEditar])

      const eventoChange=(e)=>{

        setDatosFormulario({
          ...datosFormulario,
          [e.target.name]: e.target.name==="Producto"? e.target.value : parseInt(e.target.value)                         

      })}

      return (
        <>
      <Form onSubmit={eventoSubmit} >
      <Form.Group as={Row} className="mb-3">
        <Form.Label column md={{ span: 4  }}  ><span className="spanletraTextoNormal">Producto</span></Form.Label>
        <Col md={{ span: 8  }} >
        <Form.Control  type="text" name="Producto"  onChange={eventoChange} value={datosFormulario.Producto} placeholder="Ingrese producto" required={true} />
        </Col>
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" >
        <Form.Label column md={{ span: 4  }} ><span className="spanletraTextoNormal">Precio</span> </Form.Label>
        <Col md={{ span: 8  }}>
        <Form.Control type="number" name="Precio" onChange={eventoChange} value={datosFormulario.Precio}  placeholder="Precio del producto" min={0} required={true} />
        </Col>
      </Form.Group>
      <Form.Group as={Row}  className="mb-3">
        <Form.Label column md={{ span: 4  }}  ><span className="spanletraTextoNormal">Lote</span> </Form.Label>
        <Col md={{ span: 8  }}>
        <Form.Control type="number" name="Lote" onChange={eventoChange} value={datosFormulario.Lote} placeholder="Lote del producto" min={0} required={true} />
        </Col>
      </Form.Group>
      <BotonesOpcionales opcion={{"opcion":props.opcion,"producto":datosFormulario, "editarProducto":editarProducto}}/>
    </Form>
     </>
    );
      }

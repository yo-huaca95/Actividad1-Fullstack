import React from "react";
import Button from 'react-bootstrap/Button';
import './Editar.css';

export const Editar= (props)=>{
    return (
        <Button size="sm" variant="warning" type="submit" className="botonEditar" onClick={()=>props.editarProducto(props.producto)}  >
        <span className="spanletraTextoNormal btnspan">Editar</span>
        </Button>
    );

}
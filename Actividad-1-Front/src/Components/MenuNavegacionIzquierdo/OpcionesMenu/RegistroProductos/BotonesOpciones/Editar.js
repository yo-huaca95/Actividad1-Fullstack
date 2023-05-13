import React from "react";
import Button from 'react-bootstrap/Button';
import './Editar.css';
import {useActualizacionStore} from '../../../CustomHook/useActualizacionStore'


export const Editar= (props)=>{
    const {editarProductoCH} =useActualizacionStore()

    console.log(props.producto);
    return (
        <Button size="sm" variant="warning" type="submit" className="botonEditar" onClick={()=>editarProductoCH(props.producto)} >
        <span className="spanletraTextoNormal btnspan">Editar</span>
        </Button>
    );

}
import React from "react";
import Button from 'react-bootstrap/Button';
import './Editar.css';
import {useActualizacionStore} from '../../../../../CustomHook/CustomHookLocalStore/useActualizacionStore'
import { useUpdateLista } from "../../../../../Context/UpdateListaProvider";

export const Editar= (props)=>{
    const {editarProductoCH} =useActualizacionStore()
    console.log(" btn Editar...");

    const updateList=useUpdateLista();

    return (
        <Button size="sm" variant="warning" type="submit" className="botonEditar" onClick={()=>{editarProductoCH(props.producto); props.closeModal(); updateList(); } } >
        <span className="spanletraTextoNormal btnspan">Editar</span>
        </Button>
    );

}
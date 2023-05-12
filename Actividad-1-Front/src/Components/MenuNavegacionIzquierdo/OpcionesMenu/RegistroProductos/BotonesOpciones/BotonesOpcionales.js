import React from "react";
import {Crear} from './Crear'
import { Editar } from "./Editar";




export const BotonesOpcionales= (props)=>{
    console.log(props.opcion)
    const opciones=[
        {    "Opcion":"Crear",
             "Cuerpo":<Crear/>
        },
        {   "Opcion":"Editar",
            "Cuerpo":<Editar producto={props.opcion.producto} editarProducto={props.opcion.editarProducto}/>
        }
    ]
    
    return (
           <>
             {opciones.filter((opcion)=>opcion.Opcion===props.opcion.opcion)[0].Cuerpo}
           </>
    );

}
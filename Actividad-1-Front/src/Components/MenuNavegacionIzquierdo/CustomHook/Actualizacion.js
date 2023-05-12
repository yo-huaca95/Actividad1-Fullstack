import { useState } from "react";


export const useActualizacion=()=>{
    const [outproductos,getProductos]=useState({});

    const editarProductos=(productos)=>{getProductos(productos)}

    return{
        outproductos,
        getProductos,
        editarProductos
    }
}
import React, {useContext, useState } from "react";
//import { Children } from "react";

const updateListaProductos=React.createContext();
const codeCambiContext =React.createContext();
//....todas las funciones que necesite

export function useUpdateLista () {
    return useContext(updateListaProductos);
}

export function useGetCodeCambio () {
    return useContext(codeCambiContext);
}

export function UpdateListaProvider(props){
    const [codeCambio,setCodeCambio]=useState(null);

    const updateCodeCambio =()=>{
        setCodeCambio(Math.floor(Math.random()*100))
    }
    console.log("UpdateListaProvider Se ha registrado un cambio.."+ codeCambio)

    return (
        <codeCambiContext.Provider value={codeCambio}>
            <updateListaProductos.Provider value={updateCodeCambio}>
               {props.children}
            </updateListaProductos.Provider>
        </codeCambiContext.Provider>
    );
}



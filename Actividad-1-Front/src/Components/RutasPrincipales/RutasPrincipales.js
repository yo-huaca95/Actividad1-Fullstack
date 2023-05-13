import React from "react";
import { Home } from "../Home/Home";
import {MarcoOpciones} from "../Menu/MenuPrincipal"
//import { RegistroProductos } from "../MenuNavegacionIzquierdo/OpcionesMenu/RegistroProductos/RegistroProductos";
//import { Compras } from "../MenuNavegacionIzquierdo/OpcionesMenu/Compras/Compras";

import {Routes,Route } from "react-router-dom";

export const RutasPrincipales = () =>{
    return (
        <>
             <Routes>
                <Route  path="/" element={<Home/>}/> 
                <Route  path="/Menu/*" element={<MarcoOpciones/>}>
                </Route>
             </Routes>
        </>
    );
}
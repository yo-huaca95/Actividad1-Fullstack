import React from "react";
import {MarcoOpciones} from '../OpcionesMenu/MarcoOpciones';

import {Routes,Route } from "react-router-dom";

export const AppRouterMenuIzquierdo = () =>{
    return (
        <div>
             <Routes>
                <Route  path="/RegistroProductos" element={<MarcoOpciones opcion="1"/>}/> 
                <Route  path="/Compras" element={<MarcoOpciones opcion="2"/>}/>
                <Route  path="/Ventas" element={<MarcoOpciones opcion="3"/>}/>
                <Route  path="/Productos-Disponibles" element={<MarcoOpciones opcion="4"/>}/>
             </Routes>
        </div>
    );
}
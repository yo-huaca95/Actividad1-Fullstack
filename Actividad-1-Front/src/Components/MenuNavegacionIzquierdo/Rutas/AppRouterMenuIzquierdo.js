import React from "react";
import {Ventas} from '../OpcionesMenu/Ventas/Ventas'
import {RegistroProductos} from '../OpcionesMenu/RegistroProductos/RegistroProductos'
import {Compras} from '../OpcionesMenu/Compras/Compras'
import {ProductosDisponibles} from '../OpcionesMenu/ProductosDisponibles/ProductosDisponibles'

import {Routes,Route } from "react-router-dom";

export const AppRouterMenuIzquierdo = () =>{
    return (
        <div>
             <Routes>
                <Route  path="/RegistroProductos" element={<RegistroProductos/>}/> 
                <Route  path="/Compras" element={<Compras/>}/>
                <Route  path="/Ventas" element={<Ventas/>}/>
                <Route  path="/Productos-Disponibles" element={<ProductosDisponibles/>}/>
             </Routes>
        </div>
    );
}
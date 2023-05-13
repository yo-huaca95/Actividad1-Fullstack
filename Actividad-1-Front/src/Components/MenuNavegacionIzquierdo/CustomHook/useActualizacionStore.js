import { useState} from "react";
//import {PRODUCTOS} from '../OpcionesMenu/RegistroProductos/Tabla/productos'

//localStorage.setItem('productos',JSON.stringify(PRODUCTOS));

export const useActualizacionStore=()=>{
   const [outproductos,getProductos]=useState([]);
    

    
    console.log("useActualizacionStore...")
    
    const setLocalStorage=(productos)=>{
        console.log("useActualizacionStore.setLocalStorage...")
        getProductos(()=>productos)
        localStorage.setItem('productos',JSON.stringify(productos));
    }

    const getLocalStorage=()=>{
        console.log("useActualizacionStore.getLocalStorage...")
        var productos=JSON.parse(localStorage.getItem("productos"));
        return productos
    }


    const editarProductoCH= (producto)=>{
        console.log("useActualizacionStore.editarProductoCH...")
        console.log(producto);
        var productos=JSON.parse(localStorage.getItem("productos"))
        productos=productos.map(produc => produc.id !== producto.id ? produc : producto);
        console.log(productos);
        setLocalStorage(productos);
    }

    const insertarProdcutoCH=(producto)=>{
        console.log("useActualizacionStore.insertarProdcutoCH...")
        var productos= getLocalStorage();
        productos.push(producto);
        setLocalStorage(productos);
    }

    

    return{
        outproductos,
        getProductos,
        setLocalStorage,
        getLocalStorage,
        editarProductoCH,
        insertarProdcutoCH
    }
}
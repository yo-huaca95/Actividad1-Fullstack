import React from "react";

import {RegistroProductos} from '../OpcionesMenu/RegistroProductos/RegistroProductos';
import {Compras} from '../OpcionesMenu/Compras/Compras';
import {Ventas} from '../OpcionesMenu/Ventas/Ventas';
import {ProductosDisponibles} from '../OpcionesMenu/ProductosDisponibles/ProductosDisponibles';

const headerOpciones=[
    {"Opcion":"1", 
      "Descripcion": "Registro Productos",
      "Cuerpo":<RegistroProductos/>
    },
    {"Opcion":"2", 
     "Descripcion": "Compras",
     "Cuerpo":<Compras/>
    },
    {"Opcion":"3", 
    "Descripcion": "Ventas",
    "Cuerpo":<Ventas/>
    },
    {"Opcion":"4", 
    "Descripcion": "Productos disponibles",
    "Cuerpo":<ProductosDisponibles/>
   }
]


export const MarcoOpciones= (props)=>{

    return (
        <div className="card text-center">
        <div className="card-header">
            {headerOpciones.filter((headerOpcion)=>headerOpcion.Opcion===props.opcion)[0].Descripcion}
        </div>
        <div className="card-body">
    
          {headerOpciones.filter((headerOpcion)=>headerOpcion.Opcion===props.opcion)[0].Cuerpo}

        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    );

}
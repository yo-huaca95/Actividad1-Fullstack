import React from "react";

const headerOpciones=[
    {"Opcion":1, 
      "Descripcion": "Registro Productos",
    },
    {"Opcion":2, 
     "Descripcion": "Compras",
    },
    {"Opcion":3, 
    "Descripcion": "Ventas",
    },
    {"Opcion":4, 
    "Descripcion": "Productos disponibles",
   }
]

export const TituloMarcoOpciones= (props)=>{
    return (
        <div className="card-header TituloComponentes">
        <span className="spanLetraTextoTitulo"> {headerOpciones.filter((headerOpcion)=>headerOpcion.Opcion===props.opcion)[0].Descripcion}</span> 
       </div>
    );

}
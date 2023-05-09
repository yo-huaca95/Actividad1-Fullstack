import React from "react";

import {TituloMarcoOpciones} from '../OpcionesMenu/MarcoOpciones/TituloMarcoOpciones';
import './MarcoOpciones.css';
import {AppRouterMenuIzquierdo} from '../Rutas/AppRouterMenuIzquierdo';





export const MarcoOpciones= (props)=>{
    return (
        <div className="card text-center">
          <TituloMarcoOpciones opcion={props.opcion}/>
        <div className="card-body">
           <AppRouterMenuIzquierdo/>       
        </div>
        <div className="card-footer text-muted">
          2 days ago
        </div>
      </div>
    );

}
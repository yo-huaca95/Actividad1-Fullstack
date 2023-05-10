import React from "react";
import * as Icon from 'react-bootstrap-icons';

import {TituloMarcoOpciones} from './marcoOpciones/TituloMarcoOpciones';
import './MarcoOpciones.css';
import {AppRouterMenuIzquierdo} from '../Rutas/AppRouterMenuIzquierdo';





export const MarcoOpciones= (props)=>{
    return (
        <div className="card text-center ">
          <TituloMarcoOpciones opcion={props.opcion}/>
        <div className="card-body">
           <AppRouterMenuIzquierdo/>       
        </div>
      </div>
    );

}
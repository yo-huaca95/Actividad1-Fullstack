import React from "react";
//import * as Icon from 'react-bootstrap-icons';

import {TituloMarcoOpciones} from './TituloMarcoOpciones/TituloMarcoOpciones';
import './MarcoOpciones.css';
import {AppRouterMenuIzquierdo} from '../../../Rutas/RutasMenu/AppRouterMenuIzquierdo';


export const MarcoOpciones= (props)=>{
  console.log(props.opcion!==0);

 return props.opcion===0? <></>: (
        <>
        <div className="card text-center ">
          <TituloMarcoOpciones opcion={props.opcion}/>
        <div className="card-body">
           <AppRouterMenuIzquierdo/>       
        </div>
      </div>
      </>
    );

}
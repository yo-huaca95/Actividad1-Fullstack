import React, { useEffect, useMemo} from "react";
import * as Icon from 'react-bootstrap-icons';
import {useTable, usePagination} from "react-table"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Tabla.css';
import { Container } from "react-bootstrap";

//import { COLUMNS } from "./columns";
//import {PRODUCTOS} from "./productos";


export const Tabla= (props)=>{

    const data= useMemo(()=> props.productos,[props.productos])
    const columns = useMemo (()=>props.columnasTabla,[props.columnasTabla])
  
    const tableInstance= useTable({
      columns,
      data
    },usePagination)


    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageOptions,
      gotoPage,
      pageCount,
      setPageSize,
      state,
      prepareRow
  
    }=tableInstance

    
   const {pageIndex}=state
    
    useEffect(()=>{
      setPageSize(5);
    },[setPageSize]);

    return (
        <>
        <Container className="caja" >
        <Table striped bordered hover {...getTableProps} >
        <thead className="tituloTabla" >
          {headerGroups.map((headerGroup)=>(
          <tr  {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(
                (column)=>(
                  <th className="spanletraTextoNormal" {...column.getHeaderProps()} >{column.render('Header')}</th>
                ))               
            }
            <th className="spanletraTextoNormal">Editar</th>
            <th className="spanletraTextoNormal">Eliminar</th>
          </tr>
          ))}
        </thead>

        <tbody  {...getTableBodyProps()} >
          { 
          
          page.map(row=>{
            prepareRow (row)
            return (         
          <tr {...row.getRowProps()} >
              {
                row.cells.map(
                  (cell)=>{
                    return <td className="spanletraTextoNormal" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  }
                )
              }
            <td> <Button size="sm"> <Icon.PencilFill  color="white" size={15} /></Button></td>
            <td> <Button variant="danger" size="sm"><Icon.DashLg  color="white" size={15} ></Icon.DashLg></Button></td>
          </tr>
             )
            })
            
            }
            
        </tbody>

        </Table>
        </Container>
        <div className="footertabla">
        <span className="botonPaginacion">Pagina{''}</span>
          <span className="botonPaginacion" ><strong> {pageIndex +1} of {pageOptions.length} </strong>{''}</span>
          <span className="botonPaginacion">
            | Ir a la pagina: {''}
            <input className="inputPaginacion"
            type='number'
            defaultValue={pageIndex+1}
            onChange={(e)=>{
              const pageNumber = e.target.value? Number(e.target.value)-1 : 0
              gotoPage(pageNumber)
            }}  
            />
            {' '}
          </span>
         <Button onClick={()=>gotoPage(0)} disabled={!canPreviousPage} className="botonPaginacion">{'<<'}</Button> 
         <Button onClick={()=>previousPage()} disabled={!canPreviousPage} className="botonPaginacion"><span > Anterior</span></Button>
         <Button onClick={()=>nextPage()} disabled={!canNextPage} className="botonPaginacion"> <span  >Siguiente</span></Button>
         <Button onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage} className="botonPaginacion" >{'>>'}</Button> 
        </div>
        </>
    );

}



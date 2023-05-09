import React, {useEffect, useMemo} from "react";
import {useTable, usePagination} from "react-table"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Tabla.css';

import { COLUMNS } from "./columns";
import {PRODUCTOS} from "./productos";
//import { Container } from "react-bootstrap";

export const Tabla= ()=>{
    
    const data= useMemo(()=> PRODUCTOS,[])
    const columns = useMemo (()=>COLUMNS,[])
  
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
    
    useEffect(()=>setPageSize(4),[]);
    

    return (
        <>
        <Table striped bordered hover {...getTableProps}>
        <thead>
          {headerGroups.map((headerGroup)=>(
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
              headerGroup.headers.map(
                (column)=>(
                  <th {...column.getHeaderProps()} >{column.render('Header')}</th>
                ))}
          </tr>
          ))}
        </thead>
        <tbody  {...getTableBodyProps()} >
          { page.map(row=>{
            prepareRow (row)
            return (
          <tr {...row.getRowProps()} >
              {
                row.cells.map(
                  (cell)=>{
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  }
                )
              }
          </tr>
             )
            })}
        </tbody>
        </Table>
        <div>
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



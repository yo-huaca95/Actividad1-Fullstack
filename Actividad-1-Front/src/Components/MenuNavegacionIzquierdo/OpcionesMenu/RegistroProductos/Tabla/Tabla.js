import React, {useMemo} from "react";
import {useTable, usePagination} from "react-table"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { COLUMNS } from "./columns";
import {PRODUCTOS} from "./productos";

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
      prepareRow
  
    }=tableInstance
  
    return (
        <>
        <Table striped bordered hover size="sm" {...getTableProps}>
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
        <tbody {...getTableBodyProps()} >
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
        <Button onClick={()=>previousPage()}> Previous</Button>
        <Button onClick={()=>nextPage()}> Next</Button>
        </div>
        </>
    );

}



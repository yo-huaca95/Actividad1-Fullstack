import React, { useEffect, useState, useMemo } from "react";
import {useTable} from "react-table"
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './RegistroProductos.css';
import { COLUMNS } from "./Tabla/columns";
import {PRODUCTOS} from "./Tabla/productos"
//import { COLUMNS } from "./Tabla/columns";


// function useProductos (){
//   const [productos, getProductos]=useState([])
//   useEffect (
//               () => {
//               fetch('Json/json.js')
//               .then(response=>response.json())
//               .then (datos=>{
//                 getProductos(datos)
//               })

//             },[])
  

//   return productos
// }




//console.log(useProductos ());

export  const RegistroProductos= () => {

  // const listaProductos= useProductos()
  // console.log(listaProductos);
  const data= useMemo(()=> PRODUCTOS,[])
  const columns = useMemo (()=>COLUMNS,[])
  
  // console.log(columns);

  const tableInstance= useTable({
    columns,
    data
  })


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow

  }=tableInstance

    return (
      <Container className="conta">
      <Row>
      <Col >
      <Card>
      <Card.Header className="TituloComponentes" ><span className="spanLetraTextoTitulo">Registrar Producto</span></Card.Header>
        <Card.Body>
      <Form >
      <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
        <Form.Label column md={{ span: 3  }} ><span className="spanletraTextoNormal" >Producto</span></Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control  type="text" placeholder="Ingrese producto" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}  className="mb-3" controlId="formBasicPassword">
        <Form.Label column md={{ span: 3  }}><span className="spanletraTextoNormal">Precio</span> </Form.Label>
        <Col md={{ span: 9  }}>
        <Form.Control type="number" placeholder="Precio del producto" min={0} />
        </Col>
      </Form.Group>
      <Button variant="primary" >
        Crear
      </Button>
    </Form>
    </Card.Body>
    </Card>

    </Col>
  <Col >
  <Card  className="CardsTablePrRegistrar">
      <Card.Header className="TituloComponentes"><span className="spanLetraTextoTitulo">Productos Registrados</span></Card.Header>
        <Card.Body>

    <Table striped bordered hover size="sm" {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup)=>(
        <tr {...headerGroup.getHeaderGroupProps()}>
          {
            headerGroup.headers.map(
              (column)=>(
                <th {...column.getHeaderProps()} >{column.render('Header')}</th>
              ))}
          <th>N°</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Lote</th>
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} >
        { rows.map(row=>{
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
  
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    );
}

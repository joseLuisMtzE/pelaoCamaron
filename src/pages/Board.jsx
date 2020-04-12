import React from 'react';
import { Row, Col, Cascader } from 'antd';
import Table from '../components/Table';
import { useState } from 'react';

export default function Board() {

  const [tables] = useState([
    {
      mesero: 'José Luis',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Erick Llerenas',
      disponible: false,
      reservada: true,
    },
    {
      mesero: 'Mariana',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Karen Robles',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Salas',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'José Luis',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Erick Llerenas',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Mariana',
      disponible: false,
      reservada: false,
    },
    {
      mesero: 'Karen Robles',
      disponible: true,
      reservada: true,
    },
    {
      mesero: 'Salas',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'José Luis',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Erick Llerenas',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Mariana',
      disponible: false,
      reservada: false,
    },
    {
      mesero: 'Karen Robles',
      disponible: true,
      reservada: false,
    },
    {
      mesero: 'Salas',
      disponible: false,
      reservada: false,
    }

  ]
  );

  const [cascader,setCascader] = useState('todas');

  const options = [
    {
      value: 'todas',
      label: 'Todas'
    },
    {
      value: 'disponibles',
      label: 'Disponibles'
    },
    {
      value: 'ocupadas',
      label: 'Ocupadas'
    },
    {
      value: 'reservadas',
      label: 'Reservadas'
    }
  ]
  
  return (
    <Row>
      <Col md={3} xs={24}><header style={{background: '#FEB225',height: '100%'}}><h1 style={{color: '#545454',textAlign:'right',fontWeight:'bold', marginRight:20}}>Mesas</h1></header></Col>
      <Col md={21} xs={24}>
        <Cascader size="large" options={options} onChange={onChange} placeholder="Filtrar por..."/>
        <Row>
          { 
            cascader==='todas' && tables.map((table,index)=>(
              <Col md={6} xs={8} key={index}>
                <Table table={table} index={index}/>
              </Col>
            ))
          }
          {  
            cascader==='disponibles' && tables.map((table,index)=>(
              table.disponible && !table.reservada &&
              <Col md={6} xs={8} key={index}>
                <Table table={table} index={index}/>
              </Col>
            ))
          }
          {  
            cascader==='ocupadas' && tables.map((table,index)=>(
              !table.disponible && !table.reservada &&
              <Col md={6} xs={8} key={index}>
                <Table table={table} index={index}/>
              </Col>
            ))
          }
          {  
            cascader==='reservadas' && tables.map((table,index)=>(
              table.reservada &&
              <Col md={6} xs={8} key={index}>
                <Table table={table} index={index}/>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  );

  function onChange(value) {
    if(value[0])
      setCascader(value[0]);
  }
}

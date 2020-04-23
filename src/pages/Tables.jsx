import React from 'react';
import { Row, Col, Cascader } from 'antd';
import Table from '../components/tables/Table';
import { useState } from 'react';
import NewTable from '../components/tables/NewTable';
import Background from '../assets/background.png';

export default function Tables() {
  const [tables, setTables] = useState([
    {
      id: 1,
      numMesa: 1,
      estado: 'disponible'
    },
    {
      id: 2,
      numMesa: 2,
      estado: 'ocupada'
    },
    {
      id: 3,
      numMesa: 3,
      estado: 'disponible'
    },
    {
      id: 4,
      numMesa: 4,
      estado: 'reservada'
    },
    {
      id: 5,
      numMesa: 5,
      estado: 'disponible'
    },
    {
      id: 6,
      numMesa: 6,
      estado: 'disponible'
    },
    {
      id: 7,
      numMesa: 7,
      estado: 'disponible'
    },
    {
      id: 8,
      numMesa: 8,
      estado: 'ocupada'
    },
    {
      id: 9,
      numMesa: 9,
      estado: 'reservada'
    },
    {
      id: 10,
      numMesa: 10,
      estado: 'disponible'
    },
    {
      id: 11,
      numMesa: 11,
      estado: 'disponible'
    },
    {
      id: 12,
      numMesa: 12,
      estado: 'disponible'
    },
    {
      id: 13,
      numMesa: 13,
      estado: 'reservada'
    },
    {
      id: 14,
      numMesa: 14,
      estado: 'disponible'
    },
    {
      id: 15,
      numMesa: 15,
      estado: 'ocupada'
    }
  ]);

  const [state, setState] = useState({
    visible: false,
    filter: 'todas'
  });

  const filterOptions = [
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
  ];

  const addTable = data => {
    var temp = [...tables];
    temp.push(data);
    setTables(temp);
  };

  const deleteTable = id => {
    var temp = [...tables];
    temp.forEach((t, index) => {
      if (t.id === id) temp.splice(index, 1);
    });
    setTables(temp);
  };

  return (
    <Row>
      <Col md={24} xs={24}>
        <img src={Background} alt="bg" style={{ width: '100%', height: 180 }} />
        <header style={{ top: 0, position: 'absolute' }}>
          <h1
            style={{
              color: '#545454',
              position: 'absolute',
              left: 20,
              top: 30,
              fontWeight: 'bold'
            }}
          >
            Mesas
          </h1>
        </header>
      </Col>
      <Col md={24} xs={24}>
        <Col xs={12}>
          <Cascader
            size="large"
            options={filterOptions}
            onChange={onFilterChange}
            placeholder="Filtrar por..."
          />
        </Col>

        <Row>
          {state.filter === 'todas' &&
            tables.map(table => (
              <Col md={4} xs={8} key={table.id}>
                <Table
                  table={table}
                  numMesa={table.numMesa}
                  deleteTable={deleteTable}
                />
              </Col>
            ))}
          {state.filter === 'disponibles' &&
            tables.map(
              table =>
                table.estado === 'disponible' && (
                  <Col md={4} xs={8} key={table.id}>
                    <Table
                      table={table}
                      numMesa={table.numMesa}
                      deleteTable={deleteTable}
                    />
                  </Col>
                )
            )}
          {state.filter === 'ocupadas' &&
            tables.map(
              table =>
                table.estado === 'ocupada' && (
                  <Col md={4} xs={8} key={table.id}>
                    <Table
                      table={table}
                      numMesa={table.numMesa}
                      deleteTable={deleteTable}
                    />
                  </Col>
                )
            )}
          {state.filter === 'reservadas' &&
            tables.map(
              table =>
                table.estado === 'reservada' && (
                  <Col md={4} xs={8} key={table.id}>
                    <Table
                      table={table}
                      numMesa={table.numMesa}
                      deleteTable={deleteTable}
                    />
                  </Col>
                )
            )}
          <Col xs={8} md={4}>
            <NewTable count={tables.length} addTable={addTable} />
          </Col>
        </Row>
      </Col>
    </Row>
  );

  function onFilterChange(value) {
    if (value[0])
      setState({
        filter: value[0]
      });
  }
}

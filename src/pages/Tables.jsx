import React, { useEffect } from 'react';
import { Row, Col, Cascader } from 'antd';
import Table from '../components/tables/Table';
import { useState } from 'react';
import axios from 'axios';
import url from '../constants/api';
import NewTable from '../components/tables/NewTable';
import Background from '../assets/background.png';

const api = axios.create({
  baseURL: url.apiEndPoint,
});

export default function Tables() {
  const retrieveMesas = async () => {
    try {
      let response = await api.get('mesas');
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const addCategoryRequest = async (table) => {
    try {
      let response = await api.post('mesas', table);
      // console.log(response);

      if (response.status === 201) {
        console.log(`Categoria ${table} creada correctamente`);
      } else {
        console.log('Hubo un error al añadir la categoria');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const [tables, setTables] = useState([]);

  const initializeState = async () => {
    let data = await retrieveMesas();
    setTables(data);
  };
  useEffect(() => {
    initializeState();
  }, []);
  const [state, setState] = useState({
    visible: false,
    filter: 'todas',
  });

  const filterOptions = [
    {
      value: 'todas',
      label: 'Todas',
    },
    {
      value: 'disponibles',
      label: 'Disponibles',
    },
    {
      value: 'ocupadas',
      label: 'Ocupadas',
    },
    {
      value: 'reservadas',
      label: 'Reservadas',
    },
  ];

  const addTable = (data) => {
    var temp = [...tables];
    temp.push(data);
    setTables(temp);
    addCategoryRequest(data);
  };

  const deleteTable = (id) => {
    var temp = [...tables];
    temp.map((t, index) => {
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
              fontWeight: 'bold',
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
            tables.map((table) => (
              <Col md={4} xs={8} key={table._id}>
                <Table
                  table={table}
                  noMesa={table.noMesa}
                  deleteTable={deleteTable}
                />
              </Col>
            ))}
          {state.filter === 'disponibles' &&
            tables.map(
              (table) =>
                table.estado === 'disponible' && (
                  <Col md={4} xs={8} key={table._id}>
                    <Table
                      table={table}
                      noMesa={table.noMesa}
                      deleteTable={deleteTable}
                    />
                  </Col>
                )
            )}
          {state.filter === 'ocupadas' &&
            tables.map(
              (table) =>
                table.estado === 'Ocupada' && (
                  <Col md={4} xs={8} key={table._id}>
                    <Table
                      table={table}
                      noMesa={table.noMesa}
                      deleteTable={deleteTable}
                    />
                  </Col>
                )
            )}
          {state.filter === 'reservadas' &&
            tables.map(
              (table) =>
                table.estado === 'reservada' && (
                  <Col md={4} xs={8} key={table._id}>
                    <Table
                      table={table}
                      noMesa={table.noMesa}
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
        filter: value[0],
      });
  }
}

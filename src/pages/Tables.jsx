import React, { useEffect, useState } from 'react';
import { Row, Col, Cascader } from 'antd';
import axios from 'axios';
import Table from '../components/tables/Table';
import url from '../constants/api';
import NewTable from '../components/tables/NewTable';
import Background from '../assets/background.png';

const api = axios.create({
  baseURL: url.apiEndPoint,
});


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg2ODg0MzMsImV4cCI6MTU4ODcxNzIzM30.E5UBebL6sgKlFKVptNskC_-iAsA4Zo-g7YtxfCIfnzI';

export default function Tables() {
  const [tables, setTables] = useState([]); //Tables
  const [selectedTables, setSelectedTables] = useState([]); //Result cascader state
  const [filter, setFilter] = useState('Todas'); //Cascader state

  const onFilterChange = (value) => {
    //Cascader onchange event
    setFilter(value[0]);
  };

  const retrieveMesas = async () => {
    //READ tables from API
    try {
      let response = await api.get('mesas?isActive=true', {
        headers: {
          Authorization:
            'Bearer ' + token,
        },
      });
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const addTablesRequest = async (table) => {
    //ADD tables to API
    console.log(table); 
    try {
      let response = await api.post(
        'mesas',
        { noMesa: table.noMesa, estado: table.estado },
        {
          headers: {
            Authorization:
              'Bearer ' + token,
          },
        }
      );

      if (response.status === 204) {
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

  const deleteMesasRequest = async (id) => {
    try {
      let response = await api.delete(`mesas/${id}`,{
        headers: {
          'Authorization': 'Bearer '+ token
        }
      });

      if (response.status === 200) {
        console.log('Categoria borrada correctamente');
      } else {
        console.log('Hubo un error al borrar la categoria');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editMesasRequest = async (id,noMesa,estado) => {
    try {
      let response = await api.patch(`mesas/${id}`,{
        'estado': estado,
        'noMesa':noMesa
      },{
        headers: {
          'Authorization': 'Bearer '+token
        }
      });

      if (response.status === 200) {
        console.log('Categoria editada correctamente');
      } else {
        console.log('Hubo un error al editar la categoria');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initState = async () => {
      let data = await retrieveMesas();
      setTables(data);
    };
    initState();
  },[]);

  useEffect(() => {
    let result =
      filter !== 'Todas'
        ? tables.filter((table) => table.estado === filter)
        : tables;

    setSelectedTables(result);
  }, [tables, filter]);

  const filterOptions = [
    //Cascader options
    {
      value: 'Todas',
      label: 'Todas',
    },
    {
      value: 'Disponible',
      label: 'Disponibles',
    },
    {
      value: 'Ocupada',
      label: 'Ocupadas',
    },
    {
      value: 'Reservada',
      label: 'Reservadas',
    },
  ];

  const addTable = (data) => {
    var temp = [...tables];
    temp.push(data);
    setTables(temp);
    addTablesRequest(data);
  };

  const deleteTable = (noMesa,id) => {
    var temp = [...tables];
    temp.forEach((t, index) => {
      if (t.noMesa === noMesa) temp.splice(index, 1);
    });
    setTables(temp);
    deleteMesasRequest(id);
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
              top: 25,
              fontSize:25,
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
          {selectedTables.map((table) => (
            <Col md={4} xs={8} key={table._id}>
              <Table
                table={table}
                noMesa={table.noMesa}
                _id={table._id}
                deleteTable={deleteTable}
                editMesasRequest={editMesasRequest}
              />
            </Col>
          ))}
          <Col xs={8} md={4}>
            <NewTable count={tables.length} addTable={addTable} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

import React, { useEffect, useState } from 'react';
import { Row, Col, Cascader} from 'antd';
import Table from '../components/tables/Table';
import NewTable from '../components/tables/NewTable';
import Background from '../assets/background.png';
import {makeRequest} from '../shared/ApiWrapper';
import { LoadingOutlined } from '@ant-design/icons';
import {alertSuccess,alertError} from '../shared/Alert';



export default function Tables() {
  const [tables, setTables] = useState([]); //Tables
  const [selectedTables, setSelectedTables] = useState([]); //Result cascader state
  const [filter, setFilter] = useState('Todas'); //Cascader state

  const onFilterChange = (value) => {
    setFilter(value[0]);
  };

  const getTablesRequest = async () => {
    try {
      let response = await makeRequest('GET','mesas?isActive=true&&limit=100');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const addTablesRequest = async (table) => {
    console.log(table); 
    try {
      let response = await makeRequest('POST','mesas',{ noMesa: table.noMesa})
      let data = response.data.data;
      if (response.status === 201) {
        var temp = [...tables];
        temp.push(data);
        setTables(temp);
        alertSuccess(`Mesa ${table.noMesa} creada correctamente`);
      } else {
        alertError('Hubo un error al crear la mesa');
      }
      return data;
    } catch (err) {
      console.log(err);
      alertError(`La mesa número ${table.noMesa} ya existe. Intenta con otro número`);
    }
  };

  const deleteTablesrequest = async (id) => {
    try {
      let response = await makeRequest('DELETE',`mesas/${id}`)

      if (response.status === 204) {
        alertSuccess('Mesa borrada correctamente');
      } else {
        alertError('Hubo un error al borrar la Mesa');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editTablesRequest = async (id,noMesa,estado,detalles) => {
    try {
      let response = await makeRequest('PATCH',`mesas/${id}`,{
        'estado': estado,
        // 'noMesa':noMesa,
        'reservaciones': {
          'detalles': detalles
        }
      })

      if (response.status === 200) {
        detalles===undefined?
          alertSuccess('Mesa editada correctamente'):
          alertSuccess('Mesa reservada correctamente');
      } else {
        alertError('Hubo un error al editar la mesa');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initState = async () => {
      let data = await getTablesRequest();
      console.log(data);
      if(data)
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

  const options = [
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

  const addTable = async(data) => {
    await addTablesRequest(data);
  };

  const deleteTable = (noMesa,id) => {
    var temp = [...tables];
    temp.forEach((t, index) => {
      if (t.noMesa === noMesa) temp.splice(index, 1);
    });
    setTables(temp);
    deleteTablesrequest(id);
  };

  return (
    <Row>
      <Col md={24} xs={24}>
        <img src={Background} alt="bg" className="bg-img"/>
        <header className="header">
          <h1 className="h1">Mesas</h1>
        </header>
      </Col>
      <Col md={24} xs={24}>
        <Col xs={12}>
          <Cascader
            size="large"
            options={options}
            onChange={onFilterChange}
            placeholder="Filtrar por..."
          />
        </Col>
        <Row>
          {selectedTables.map((table) => (
            <Col lg={4} md={6} xs={8} key={table._id}>
              <Table
                table={table}
                noMesa={table.noMesa}
                _id={table._id}
                deleteTable={deleteTable}
                editTablesRequest={editTablesRequest}
              />
            </Col>
          ))}
          <Col lg={4} md={6} xs={8}>
            {tables.length!==0 && 
            <NewTable count={tables.length} addTable={addTable} />
            }
          </Col>
        </Row>
      </Col>
      {tables.length===0 && <div style={{margin:'0 auto',display:'block',top:250,position:'relative'}}><LoadingOutlined className="big-size" spin />
      </div>}
    </Row>
  );
}

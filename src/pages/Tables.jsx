import React, { useEffect, useState } from 'react';
import { Row, Col, Cascader} from 'antd';
import Table from '../components/tables/Table';
import NewTable from '../components/tables/NewTable';
import Background from '../assets/background.png';
import {makeRequest} from '../shared/ApiWrapper';
import { LoadingOutlined } from '@ant-design/icons';


export default function Tables() {
  const [tables, setTables] = useState([]); //Tables
  const [selectedTables, setSelectedTables] = useState([]); //Result cascader state
  const [filter, setFilter] = useState('Todas'); //Cascader state

  const onFilterChange = (value) => {
    setFilter(value[0]);
  };

  const getTablesRequest = async () => {
    try {
      let response = await makeRequest('GET','mesas?isActive=true');
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const addTablesRequest = async (table) => {
    console.log(table); 
    try {
      let response = await makeRequest('POST','mesas',{ noMesa: table.noMesa})

      if (response.status === 201) {
        console.log('mesa creada correctamente');
      } else {
        console.log('Hubo un error al crear la mesa');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTablesrequest = async (id) => {
    try {
      let response = await makeRequest('DELETE',`mesas/${id}`)

      if (response.status === 201) {
        console.log('Mesa borrada correctamente');
      } else {
        console.log('Hubo un error al borrar la Mesa');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const editTablesRequest = async (id,noMesa,estado) => {
    try {
      let response = await makeRequest('PATCH',`mesas/${id}`,{
        'estado': estado,
        'noMesa':noMesa
      })

      if (response.status === 201) {
        console.log('Mesa editada correctamente');
      } else {
        console.log('Hubo un error al editar la mesa');
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
            <Col md={4} xs={8} key={table._id}>
              <Table
                table={table}
                noMesa={table.noMesa}
                _id={table._id}
                deleteTable={deleteTable}
                editTablesRequest={editTablesRequest}
              />
            </Col>
          ))}
          <Col xs={8} md={4}>
            {tables.length!==0 && 
            <NewTable count={tables.length} addTable={addTable} />
            }
          </Col>
        </Row>
      </Col>
      {tables.length===0 && <div style={{margin:'0 auto',display:'block',top:250,position:'relative'}}><LoadingOutlined className="big-size" spin />;
      </div>}
    </Row>
  );
}

import React, { useState } from 'react';
import { Card, Modal, Cascader, Button, InputNumber } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined,LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import {makeRequest} from '../../shared/ApiWrapper';
const { confirm } = Modal;

export default function Table({table,deleteTable,editTablesRequest}) {
  const options = [
    {
      value: 'Disponible',
      label: 'Disponible',
    },
    {
      value: 'Ocupada',
      label: 'Ocupada',
    },
    {
      value: 'Reservada',
      label: 'Reservada',
    },
  ];

  const tipoOrdenOptions = [
    {
      value: 'Local',
      label: 'Local'
    }
  ]

  const onOrdenchange = (value) => {
    if (value[0]) 
      setOrderType(value[0])
  };

  const onchange = (value) => {
    if (value[0]) table.estado = value[0];
    editTablesRequest(table._id, table.noMesa, table.estado);
  };

  const [visible, setVisible] = useState(false); 
  const [orderType,setOrderType] = useState('');
  const [order,setOrder] = useState({});

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleClick = async ()=>{
    const form = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(form);
    data.tipoOrden = orderType;
    console.log(data);
    const newOrder = await crearOrden(data);
    setOrder(newOrder);
    console.log(newOrder);
  }

  const crearOrden = async (order) => {
    try {
      let response = await makeRequest('POST',`mesas/${table._id}/ordenes`,{ numPersonas: order.numPersonas, tipoOrden: order.tipoOrden,observaciones:order.observaciones })

      if (response.status === 201) {
        console.log('Orden creada correctamente');
      } else {
        console.log('Hubo un error al crear la orden');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const showConfirm = () => {
    setVisible(false);
    confirm({
      title: `¿Quieres eliminar la mesa ${table.noMesa}?`,
      icon: <ExclamationCircleOutlined />,
      content: `La mesa ${table.noMesa} será eliminada de la lista de mesas.`,
      okText: 'Eliminar',
      cancelText: 'Cancelar',
      okType: 'danger',
      onOk() {
        deleteTable(table.noMesa, table._id);
      },
      onCancel() {},
    });
  };

  var title = `Mesa ${table.noMesa}`;
  var modalTitle = `Mesa ${table.noMesa} - ${table.estado}`;
  return (
    <div>
      <Card
        size="small"
        onClick={showModal}
        title={title}
        className="card"
      >
        <p>{`Mesa ${table.estado}`}</p>
        {table.estado==='Disponible' ? <div className="disponible"></div>:table.estado === 'Ocupada' ? <div className="ocupada"></div>: <div className="reservada"></div>}
        
      </Card>
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={table.estado==='Disponible'?[
          <form id="form">
            <strong>Abrir cuenta</strong>
            <p>¿Cuántas personas?</p>
            <InputNumber
              placeholder="0"
              name="numPersonas"/>
            <p>Tipo de orden: </p>
            <Cascader
              name="tipoOrden"
              options={tipoOrdenOptions}
              onChange={onOrdenchange}
              placeholder="Tipo de orden..."
            />
            <p>Observaciones: </p>
            <TextArea
              name="observaciones"
              placeholder="Agregar observaciones..."
            />
            <Button key="submit" type="primary" className="margin">
              <Link
                onClick={handleClick}
                to={{
                  pathname: '/agregar-platillos',
                  noMesa: table.noMesa,
                  idOrder: order._id,
                }}
              >
                Abrir cuenta
              </Link>
            </Button>
          </form>
        ]:[<strong>Orden en proceso...</strong>,<br/>,<LoadingOutlined />,<br/>,<Button type="primary" className="margin">Ver orden</Button>]}
      >
        <strong>Editar</strong>
        <br/>
        <Cascader
          options={options}
          onChange={onchange}
          placeholder="Estado de la mesa..."
        />
        <Button onClick={showConfirm} type="primary" danger>
          <DeleteFilled />
        </Button>
      </Modal>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Card, Modal, Cascader, Button, InputNumber } from 'antd';
import {
  DeleteFilled,
  ExclamationCircleOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TextArea from 'antd/lib/input/TextArea';
import { makeRequest, getRol } from '../../shared/ApiWrapper';
import { alertError } from '../../shared/Alert';
const { confirm } = Modal;

export default function Table({ table, deleteTable, editTablesRequest }) {
  const options = [
    {
      value: 'Disponible',
      label: 'Disponible'
    },
    {
      value: 'No Disponible',
      label: 'No Disponible'
    },
    {
      value: 'Reservada',
      label: 'Reservada'
    }
  ];

  const optionsReservada = [
    {
      value: 'Disponible',
      label: 'Disponible'
    },
    {
      value: 'Reservada',
      label: 'Reservada'
    }
  ];

  const tipoOrdenOptions = [
    {
      value: 'Local',
      label: 'Local'
    },
    {
      value: 'Domicilio',
      label: 'Domicilio'
    }
  ];

  const onOrdenchange = value => {
    if (value[0]) setOrderType(value[0]);
  };

  const onchange = value => {
    if (value[0]) table.estado = value[0];
    if (value[0] !== 'Reservada') {
      editTablesRequest(table._id, table.noMesa, table.estado);
      setReservada(false);
      setVisible(false);
    } else setReservada(true);
  };

  const [visible, setVisible] = useState(false);
  const [orderType, setOrderType] = useState('');
  // const [order, setOrder] = useState({});
  const [reservada, setReservada] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (table.estado === 'Reservada') {
      setReservada(true);
    }
  }, [table.estado]);

  const handleClick = async () => {
    const form = new FormData(document.getElementById(table._id));
    const data = Object.fromEntries(form);
    data.tipoOrden = orderType;
    console.log(data);
    localStorage.setItem('domicilio', JSON.stringify(data));
    localStorage.setItem('noMesa', table.noMesa);
    if (orderType === 'Local') {
      const newOrder = await crearOrden(data);
      // setOrder(newOrder);
      console.log(newOrder);
    }
  };

  const crearOrden = async order => {
    try {
      let response = await makeRequest('POST', `mesas/${table._id}/ordenes`, {
        numPersonas: order.numPersonas,
        tipoOrden: order.tipoOrden,
        observaciones: order.observaciones
      });

      if (response.status === 201) {
        console.log('Orden creada correctamente');
        window.history.replaceState(
          null,
          null,
          'http://localhost:3000/agregar-platillos/' + response.data.data._id
        );
      } else {
        window.location.href = '/mesas';
        alertError('Hubo un error al crear la orden');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
      window.location.href = '/mesas';
      alertError('Hubo un error al crear la orden');
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
      onCancel() {}
    });
  };

  const reservar = () => {
    const form = new FormData(document.getElementById(table._id));
    const data = Object.fromEntries(form);
    if (data.detalles === undefined || data.detalles === '')
      data.detalles = ' ';
    editTablesRequest(table._id, table.noMesa, table.estado, data.detalles);
    setVisible(false);
  };

  const setLocalStorage = () => {
    localStorage.setItem('noMesa', table.noMesa);
    localStorage.setItem('mesaID', table._id);
  };

  var title = `Mesa ${table.noMesa}`;
  var modalTitle = `Mesa ${table.noMesa} - ${table.estado}`;
  return (
    <div>
      <Card size="small" onClick={showModal} title={title} className="card">
        <p>{`Mesa ${table.estado}`}</p>
        {table.estado === 'Disponible' ? (
          <div className="disponible"></div>
        ) : table.estado === 'Ocupada' ? (
          <div className="ocupada"></div>
        ) : (
          <div className="reservada"></div>
        )}
      </Card>
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          table.estado === 'Disponible'
            ? [
                <form id={table._id}>
                  <strong>Abrir cuenta</strong>
                  <p>¿Cuántas personas?</p>
                  <InputNumber required placeholder="0" name="numPersonas" />
                  <p>Tipo de orden: </p>
                  <Cascader
                    required
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
                        pathname:
                          orderType === 'Local'
                            ? '/agregar-platillos/:id'
                            : '/home-delivery/',
                            state:{
                              'idMesa':table._id
                            }
                      }}
                    >
                      Abrir cuenta
                    </Link>
                  </Button>
                </form>
              ]
            : null
        }
      >
        {table.estado !== 'Ocupada' ? (
          <div>
            <strong>Editar</strong>
            <br />
            <Cascader
              options={reservada ? optionsReservada : options}
              onChange={onchange}
              placeholder="Estado de la mesa..."
            />
            {getRol() === 'Dueño' ? (
              <Button onClick={showConfirm} type="primary" danger>
                <DeleteFilled />
              </Button>
            ) : null}
            {reservada && (
              <form id={table._id}>
                <TextArea
                  name="detalles"
                  placeholder="Observaciones de la reservación..."
                  className="margin-top"
                ></TextArea>
                <Button className="margin-top reservar-btn" onClick={reservar}>
                  Reservar
                </Button>
              </form>
            )}
          </div>
        ) : (
          <div>
            <strong>Orden en proceso...</strong>
            <br />
            <LoadingOutlined />

            <br />
            <Button type="primary" className="margin">
              <Link
                onClick={setLocalStorage}
                to={{
                  pathname: '/ver-orden/:id'
                }}
              >
                Ver orden
              </Link>
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
}

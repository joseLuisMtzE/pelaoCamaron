import React, { useState } from 'react';
import { Card, Modal, Cascader, Button } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { confirm } = Modal;

export default function Table({ numMesa, table,deleteTable}) {
  const [visible, setVisible] = useState(false);

  const waiterOptions = [
    {
      value: 'Jose Luis',
      label: 'Jose Luis',
    },
    {
      value: 'Erick Noel',
      label: 'Erick Noel',
    },
    {
      value: 'Mariana Fajardo',
      label: 'Mariana Fajardo',
    },
    {
      value: 'Karen Robles',
      label: 'Karen Robles',
    },
  ];
  const stateOptions = [
    {
      value: 'disponible',
      label: 'Disponible',
    },
    {
      value: 'ocupada',
      label: 'Ocupada',
    },
    {
      value: 'reservada',
      label: 'Reservada',
    },
  ];

  const onWaiterChange = (value) => {
    if (value[0]) console.log(value[0]);
  };
  const onStateChange = (value) => {
    if (value[0]) table.estado= value[0];
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const showConfirm = ()=> {
    setVisible(false);
    confirm({
      title: `¿Quieres eliminar la mesa ${numMesa}?` ,
      icon: <ExclamationCircleOutlined />,
      content: `La mesa ${numMesa} será eliminada de la lista de mesas.`,
      okText: 'Eliminar',
      cancelText: 'Cancelar',
      okType: 'danger',
      onOk() {
        deleteTable(numMesa);
      },
      onCancel() {},
    });
  }

  var title = `Mesa ${numMesa}`;
  var modalTitle = `Mesa ${numMesa} - ${table.estado}`;
  return (
    <div>
      <Card
        size="small"
        onClick={showModal}
        title={title}
        style={{
          margin: 10,
          borderRadius: 15,
          height: 130,
          backgroundColor: '#FFFFFF',
        }}
      >
        <p>{`Mesa ${table.estado}`}</p>
        <div
          style={{
            borderRadius: '100%',
            background:
              table.estado === 'disponible'
                ? '#95D362'
                : table.estado === 'ocupada'
                  ? '#DC7171'
                  : '#FED154',
            height: 25,
            width: 25,
            right: 10,
            bottom: 10,
            position: 'absolute',
          }}
        ></div>
      </Card>
      <Modal
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button onClick={showConfirm} type="primary" danger>
            <DeleteFilled />
          </Button>,
          <Button key="back" onClick>
            Cancelar platillo
          </Button>,
          <Button key="submit" type="primary" onClick>
            <Link to={{
              pathname:'/agregar-platillos',
              numMesa: numMesa
            }}>Ordenar</Link>
          </Button>,
        ]}
      >
        <p>Mesero: </p>
        <Cascader
          size="large"
          options={waiterOptions}
          onChange={onWaiterChange}
          placeholder="Mesero..."
        />
        <p>Estado: </p>
        <Cascader
          size="large"
          options={stateOptions}
          onChange={onStateChange}
          placeholder="Estado..."
        />
      </Modal>
    </div>
  );
}

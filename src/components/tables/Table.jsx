import React, { useState } from 'react';
import { Card, Modal, Cascader, Button } from 'antd';
import { DeleteFilled, ExclamationCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { confirm } = Modal;

export default function Table({ noMesa, table,deleteTable,_id,editMesasRequest}) {

  const options = [ //Cascader options
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

  const onchange = (value) => { //Cascader onChange event
    if (value[0]) table.estado= value[0];
    editMesasRequest(table._id,table.noMesa,table.estado)
  };

  const [visible, setVisible] = useState(false); //Modal state

  const showModal = () => { //Modal open event
    setVisible(true);
  };

  const handleOk = (e) => { //Modal onOK event
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => { //Modal onCancel event
    console.log(e);
    setVisible(false);
  };

  const showConfirm = ()=> { //DeleteModal
    setVisible(false);
    confirm({
      title: `¿Quieres eliminar la mesa ${noMesa}?` ,
      icon: <ExclamationCircleOutlined />,
      content: `La mesa ${noMesa} será eliminada de la lista de mesas.`,
      okText: 'Eliminar',
      cancelText: 'Cancelar',
      okType: 'danger',
      onOk() {
        deleteTable(noMesa,_id);
      },
      onCancel() {},
    });
  }

  var title = `Mesa ${noMesa}`;
  var modalTitle = `Mesa ${noMesa} - ${table.estado}`;
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
              table.estado === 'Disponible'
                ? '#95D362'
                : table.estado === 'Ocupada'
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
          <Button key="back" onClick={()=>console.log('cancelado xd')}>
            Cancelar platillo
          </Button>,
          <Button key="submit" type="primary" onClick>
            <Link to={{
              pathname:'/agregar-platillos',
              noMesa: noMesa
            }}>Ordenar</Link>
          </Button>,
        ]}
      >
        <span>Estado </span>
        <Cascader
          size="large"
          options={options}
          onChange={onchange}
          placeholder="Estado de la mesa..."
        />
      </Modal>
    </div>
  );
}

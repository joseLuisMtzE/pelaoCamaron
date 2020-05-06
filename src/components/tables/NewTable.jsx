import React, { useState } from 'react';
import { Card, Button, Modal, InputNumber, Cascader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function NewTable({ count , addTable}) {
  const [visible, setVisible] = useState(false);
  const [cascader, setCascader] = useState('');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    const form = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(form);
    data.estado = cascader;
    data._id = data.noMesa;
    setVisible(false);
    addTable(data);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const onChange = (value) => {
    console.log('changed', value);
  };

  const onCascaderChange = (value) => {
    setCascader(value[0]);
  };

  const options = [
    {
      value: 'Disponible',
      label: 'Disponible'
    },
    {
      value: 'Ocupada',
      label: 'Ocupada'
    },
    {
      value: 'Reservada',
      label: 'Reservada'
    }
  ];

  return (
    <div>
      <Card
        onClick={showModal}
        size="small"
        style={{
          margin: 10,
          borderRadius: 25,
          height: 130,
        }}
      >
        <Button
          type="link"
          size="large"
          icon={<PlusOutlined style={{fontSize:40}} />}
          shape="circle"
          style={{
            color: 'grey',
            margin: 'auto',
            display: 'block',
            marginTop: 25,
          }}
        ></Button>
      </Card>
      <Modal
        title="Agregar nueva mesa"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form id="form">
          <p>Número de mesa:</p>
          <InputNumber
            name="noMesa"
            size="large"
            onChange={onChange}
            defaultValue={count + 1}
          />
          <p>Estado:</p>
          <Cascader
            size="large"
            options={options}
            onChange={onCascaderChange}
            name="estado"
          />
        </form>
      </Modal>
    </div>
  );
}

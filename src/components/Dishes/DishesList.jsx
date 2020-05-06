import React, { useState } from 'react';
import { Button, Modal, InputNumber } from 'antd';
import { FormOutlined } from '@ant-design/icons';

export default function DishesList({ dishesList }) {
  const [visible, setVisible] = useState(false);
  const [total,setTotal] = useState(0);

  const showModal = () => {
    let temp = 0;
    setVisible(true);
    console.log(dishesList);
    dishesList.forEach((dish)=>{
      temp += dish.precioConIva;
      setTotal(temp)
    })
  };
  const handleOk = (e) => {
    setVisible(false);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onChange = (e) => {};

  return (
    <div>
      <Button
        onClick={showModal}
        shape="circle"
        icon={<FormOutlined style={{ fontSize: 25 }} />}
        style={{
          position: 'fixed',
          right: 40,
          bottom: 60,
          width: 60,
          height: 60,
          border: 'none',
          backgroundColor: '#FED154',
          color: '#FFFFFF',
          boxShadow: '0px 3px 2px 0px #FEB225',
        }}
      ></Button>
      <Modal
        title="Artículos"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Ordenar
          </Button>,
          <Button onClick={handleCancel}>Cancelar</Button>,
        ]}
      >
        <table width="100%">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
            {dishesList.map((dish) => (
              <tr key={dish._id}>
                <td>{dish.nombre}</td>
                <td>{dish.cantidad}</td>
                <td>{dish.precioConIva}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Personas: </h3>
        <InputNumber
          name="cantidad"
          size="large"
          onChange={onChange}
          defaultValue={1}
        />
        <h3>Artículos: {dishesList.length}</h3>
        <h3>Total: {total.toFixed(2)}</h3>
      </Modal>
    </div>
  );
}

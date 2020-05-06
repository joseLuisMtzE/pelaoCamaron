import React, { useState } from 'react';
import { Modal, InputNumber, Input, Button } from 'antd';
const { TextArea } = Input;

export default function Dish({ dish,addDishToList }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    const form = new FormData(document.getElementById('form'));
    const d = Object.fromEntries(form);
    d.nombre = dish.nombre
    d.precioConIva = dish.precioConIva
    console.log(d);
    setVisible(false);
    addDishToList(d);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const onChange = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div style={{ margin: 15 }} onClick={showModal}>
        <img
          alt="example"
          src="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          style={{
            boxShadow: '0px 3px 5px 0px grey',
            width: '100%',
            borderRadius: 5,
          }}
        />
        <p
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
          }}
        >
          {dish.nombre}
        </p>
      </div>
      <Modal
        title={dish.nombre}
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
        <form id="form">
          <img
            src="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="platillo"
            style={{ width: '100%' }}
          />
          <h3>Cantidad:</h3>
          <InputNumber
            name="cantidad"
            size="large"
            onChange={onChange}
            defaultValue={1}
          />

          <h3>Observaciones:</h3>
          <TextArea name="observaciones" />
        </form>
      </Modal>
    </div>
  );
}

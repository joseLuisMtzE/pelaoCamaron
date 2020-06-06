import React, { useState } from 'react';
import { Modal, InputNumber, Input, Button } from 'antd';
const { TextArea } = Input;

export default function Dish({ dish, addDishToList }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const form = new FormData(document.getElementById(dish._id));
    const data = Object.fromEntries(form);
    data.cantidad = parseInt(data.cantidad);
    data.nombre = dish.nombre;
    data.precioConIva = dish.precioConIva * data.cantidad;
    data._id = dish._id;
    console.log(data);
    setVisible(false);
    addDishToList(data);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  return (
    <div>
      <div className="xs-margin" onClick={showModal}>
        <img
          alt="dish"
          src="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="dish"
        />
        <p className="center">{dish.nombre}</p>
      </div>
      <Modal
        title={dish.nombre}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Agregar
          </Button>
        ]}
      >
        <form id={dish._id}>
          <img
            src="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="platillo"
            className="modal-dish"
          />
          <h3>Cantidad:</h3>
          <InputNumber name="cantidad" size="large" defaultValue="1"/>
          <h3>Observaciones:</h3>
          <TextArea name="observaciones" />
        </form>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import { Card, Button, Modal, InputNumber, Cascader } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function NewTable({addTable}) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const form = new FormData(document.getElementById('form'));
    const data = Object.fromEntries(form);
    data.estado = 'Disponible';
    setVisible(false);
    addTable(data);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleKeyPress = (event)=>{
    if (event.which != 8 && event.which != 0 && event.which < 48 || event.which > 57)
    {
      event.preventDefault();
    }
  }

  return (
    <div>
      <Card
        onClick={showModal}
        size="small"
        className="card"
      >
        <Button
          type="link"
          size="large"
          icon={<PlusOutlined className="big-size"/>}
          className="add-btn-2"
        ></Button>
      </Card>
      <Modal
        title="Nueva mesa"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Agregar
          </Button>
        ]}
      >
        <form id="form">
          <p>Número de mesa:</p>
          <InputNumber
            type="text"
            name="noMesa"
            size="large"
          />
        </form>
      </Modal>
    </div>
  );
}

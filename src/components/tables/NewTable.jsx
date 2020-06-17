import React, { useState } from 'react';
import { Card, Button, Modal, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function NewTable({ addTable }) {
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

  // const handleKeyPress = event => {
  //   if (
  //     (event.which !== 8 && event.which !== 0 && event.which < 48) ||
  //     event.which > 57
  //   ) {
  //     event.preventDefault();
  //   }
  // };

  return (
    <div>
      <Card onClick={showModal} size="small" className="card">
        <Button
          type="link"
          size="large"
          icon={<PlusOutlined className="big-size" />}
          className="add-btn-2"
        ></Button>
      </Card>
      <Modal
        title="Nueva mesa"
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        <form id="form">
          <p>Número de mesa:</p>
          <Input onPressEnter={(e)=>e.preventDefault()} name="noMesa" size="large" style={{ width: '25%' }} /><br/>
          <Button type="primary" onClick={handleOk} className="margin">
            Agregar
          </Button>
        </form>
      </Modal>
    </div>
  );
}

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import FormMenuDishes from './FormMenuDishes'

function ModalMenuDishes() {
  const [state, setState] = useState({ visible: false, loading:false });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ loading: false, visible: false });
    }, 3000);
  };

  const handleCancel = () => {
    setState({ visible: false });
  };


  //--------FORM
 

  return (
    <div>
      <div>
        <Button type="primary" onClick={showModal}>Agregar Platillo</Button>
        <Modal
          title="Agregar Platillo"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
            footer={[]}
          >
              <div>
                <p>Llena todos los espacios con la informacion correspondiente.</p>
                <FormMenuDishes  onOk={handleOk}/>
            </div>
            
        </Modal>
      </div>
    </div>
  );
}
export default ModalMenuDishes;

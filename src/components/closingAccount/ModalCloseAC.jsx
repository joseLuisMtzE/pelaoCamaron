import React, { useState } from 'react';
import { Modal, Button,Tooltip} from 'antd';
import ClosingAccounts from './ClosingAccounts';

function ModalCloseAC() {
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

        <Button type="primary" onClick={showModal}  > cerrar cuenta </Button>
        <Modal
          title="Cerrar Cuenta"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
            footer={[]}
            width=""
          >
              <div>
                <p>Llena todos los espacios con la informacion correspondiente.</p>
                <ClosingAccounts  onOk={handleOk}/>
                <Button  type="primary" onClick={handleOk}  > Cobrar </Button>
            </div>

        </Modal>
      </div>
    </div>
  );
}
export default ModalCloseAC;
import React, { useState} from 'react';
import { Modal, Button } from 'antd';
import FormMenuDishes from './FormMenuDishes'


function ModalMenuDishes({token}) {
  const [state, setState] = useState({ visible: false, loading:false });

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = () => {
    //function validateFields(){}
    
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
        <Button className="floatButton" type="primary" onClick={showModal} shape="circle"
            icon={'+'}
            style={{
              margin: 6,
              width: 50,
              height: 50,
              border: 'none',
              boxShadow: '0px 3px 5px 0px grey',
            }}/>
            
        <Modal
          title="Agregar Platillo"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
            footer={[]}
          >
              <div>
                <p>Llena todos los espacios con la informacion correspondiente.</p>
                <FormMenuDishes  onOk={handleOk} token={token} />
            </div>
            
        </Modal>
      </div>
    </div>
  );
}
export default ModalMenuDishes;

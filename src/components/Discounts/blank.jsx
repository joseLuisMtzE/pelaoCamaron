import React, { useState, Fragment } from 'react';
//import icons
import { mdiAccountHeartOutline } from '@mdi/js';
import { mdiPlusThick } from '@mdi/js';
import Icon from '@mdi/react';
import { Modal, Button,Card } from 'antd';
//! Constants
//import { makeRequest } from '../../shared/ApiWrapper';
//! Libraries
//import axios from 'axios';
//import { errorAlert, successAlert } from '../Alerts/Alerts';

const UsersViewPage1 = () => {


  const [modalVisible, setModalVisible] = useState({ visible: false });;
  

 const showModal = () => {
      setModalVisible({
        visible: true,
      });
    };

    const handleOk = () => {
      setTimeout(() => {
        setModalVisible({ visible: false });
      }, 1000);
    };

    const handleCancel = () => {
      setModalVisible({ visible: false });
    };
    return (
      <Fragment>
   
    <div className="site-card-border-less-wrapper espacio">
    <Card title="Luis Alexandro Salas Chávez" bordered={false} style={{ width: 300 }}>
    <center>
    <div>
   <Icon path={mdiAccountHeartOutline} title="Usuario" size={3} color="#000" />
   </div>
    </center>
   
    <div>
    <p>Soy un mesero facherita</p>
    </div>
    </Card>
  </div>

  <div className="site-card-border-less-wrapper espacio">
    <Card title="Agregar un nuevo usuario" bordered={false} style={{ width: 300 }}>
    <center>
    <div>
    <button>
    <Icon path={mdiPlusThick} title="agregar" size={3} color="#000" />
    </button>
   </div>
    </center>
    </Card>
  </div>
  <div>
  <Button
    type="primary"
    onClick={showModal}
  >
    Cerrar cuenta
  </Button>
  <Modal
    title="CERRAR ORDEN"
     visible={modalVisible.visible}
     onCancel={handleCancel}
     onOk={handleOk}
      footer={[]}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</div>

      </Fragment>
      );
    };
export default UsersViewPage1;

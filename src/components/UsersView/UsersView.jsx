import React, { useState, Fragment } from 'react';
//import icons
import { mdiAccountHeartOutline } from '@mdi/js';
import { mdiPlusThick } from '@mdi/js';
import Icon from '@mdi/react';
import { Input } from 'antd';
import { Modal, Button, Card } from 'antd';
//! Constants
//import { makeRequest } from '../../shared/ApiWrapper';
//! Libraries
//import axios from 'axios';
//import { errorAlert, successAlert } from '../Alerts/Alerts';

const UsersViewPage1 = () => {

  const { TextArea } = Input;
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
              <button
                type="primary"
                className="boto"
                onClick={showModal}>
                <Icon path={mdiPlusThick} title="agregar" size={3} color="#000" />
              </button>
            </div>
          </center>
        </Card>
      </div>
      <div>

        <Modal
          title="Datos generales"
          visible={modalVisible.visible}
          onCancel={handleCancel}
          onOk={handleOk}
          footer={[]}
        >
          <div className="mitad espacio">

            <p>Nombre:</p><br></br>
            <Input placeholder="Nombre" />

            <p>Apellido:</p><br></br>
            <Input placeholder="Apellido" />
          </div>

          <br />

          <div className="mitad">
            <p>Correo:</p><br></br>
            <Input placeholder="correo" />

            <p>Telefono Móvil:</p><br></br>
            <Input placeholder="Telefono" />
          </div>

          <h2>
            Contacto secundario
</h2>
          <div className="mitad">

            <p>Nombre completo:</p><br></br>
            <Input placeholder="Nombre" />

            <p>Telefono:</p><br></br>
            <Input type="number" max="10" placeholder="Telefono" />
          </div>

          <br></br>
          <div className="mitad">
            <h2>
              Detalles
</h2>
            <br></br>

          </div>
          <TextArea rows={4} placeholder="add details" />
          <br></br>

          <div className="">

            <Button type="primary" danger
              onClick={handleCancel}  >
              Cancelar
    </Button>
            <Button type="primary" >
              Guardar
    </Button>

          </div>

        </Modal>
      </div>



    </Fragment>
  );
};
export default UsersViewPage1;

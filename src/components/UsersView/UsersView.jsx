import React, { useState, useEffect } from 'react';
//import icons
import { mdiAccountHeartOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Input } from 'antd';
import { Modal, Button, Card } from 'antd';
import { Tabs } from 'antd';
import UserCard from './UserCard';

//! Constants
import { makeRequest } from '../../shared/ApiWrapper';
//! Libraries
//import { errorAlert, successAlert } from '../../shared/Alerts';
import UserAdd from './UserAdd';

const { TabPane } = Tabs;

const UsersViewPage1 = () => {
  const [usuarios, setUsuarios] = useState([]);

  const { TextArea } = Input;
  const [modalVisible, setModalVisible] = useState({ visible: false });

  const retrieveUsers = async () => {
    try {
      let response = await makeRequest('GET', 'usuarios');
      let data = response.data.data;
      console.log('Datos de los usuarios', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const setearEstado = async () => {
      console.log('Componente montado');
      let usuariosData = await retrieveUsers();
      setUsuarios(usuariosData);
    };
    setearEstado();
  }, []);

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
    <div className="MainWrapper">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Usuarios" key="1">
            <div className="UserCardWrapper">
              {console.log('estado de usuarios', usuarios)}
              {usuarios.map((usuario) => {
                let apellidos = '';
                if (usuario.apellidos !== undefined)
                  apellidos = usuario.apellidos;
                return (
                  <UserCard
                    nombre={`${usuario.nombre} ${apellidos}`}
                    rol={usuario.rol}
                  />
                );
              })}
              <UserAdd showModal={showModal} />
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
                  <p>Nombre:</p>
                  <br></br>
                  <Input placeholder="Nombre" />

                  <p>Apellido:</p>
                  <br></br>
                  <Input placeholder="Apellido" />
                </div>

                <br />

                <div className="mitad">
                  <p>Correo:</p>
                  <br></br>
                  <Input placeholder="correo" />

                  <p>Telefono Móvil:</p>
                  <br></br>
                  <Input placeholder="Telefono" />
                </div>

                <h2>Contacto secundario</h2>
                <div className="mitad">
                  <p>Nombre completo:</p>
                  <br></br>
                  <Input placeholder="Nombre" />

                  <p>Telefono:</p>
                  <br></br>
                  <Input type="number" max="10" placeholder="Telefono" />
                </div>

                <br></br>
                <div className="mitad">
                  <h2>Detalles</h2>
                  <br></br>
                </div>
                <TextArea rows={4} placeholder="add details" />
                <br></br>

                <div className="">
                  <Button type="primary" danger onClick={handleCancel}>
                    Cancelar
                  </Button>
                  <Button type="primary">Guardar</Button>
                </div>
              </Modal>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default UsersViewPage1;

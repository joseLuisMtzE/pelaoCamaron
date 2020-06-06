import React, { useState, useEffect } from 'react';
//import icons
import { Input } from 'antd';
import { Modal, Button } from 'antd';
import { Tabs } from 'antd';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

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
              <Link className="nav-text" to="/Editar-usuario">
                <UserAdd/>
              </Link>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default UsersViewPage1;

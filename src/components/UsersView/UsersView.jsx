import React, { useState, useEffect } from 'react';
//import icons
import { Input, Tabs } from 'antd';
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

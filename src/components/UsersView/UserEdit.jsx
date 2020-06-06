import React, { useState, useEffect } from 'react';
//import icons
import { Input, Button, Tabs, Cascader } from 'antd';
//! Constants
import { makeRequest } from '../../shared/ApiWrapper';
import UserTextInput from './UserTextInput';
import { Link } from 'react-router-dom';

//! Libraries
//import { errorAlert, successAlert } from '../../shared/Alerts';

const { TabPane } = Tabs;

const UserEdit = () => {
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
  
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  useEffect(() => {
    const setearEstado = async () => {
      console.log('Componente montado');
      let usuariosData = await retrieveUsers();
      setUsuarios(usuariosData);
    };
    setearEstado();
  }, []);

  const CreateUser = ()=>{
    
  }


  return (
    <div className="MainWrapper">
      <div className="card-container">
        <Tabs type="card">
          <TabPane tab="Datos Generales" key="1">
            <div className="userDiv">
              <UserTextInput title="Nombre(s)" />
              <UserTextInput title="Apellidos" />
              <UserTextInput title="Correo Electrónico" />
              <UserTextInput title="Teléfono" />
            </div>
            <h2 className="userTitle">Contacto Secundario</h2>
            <div className="userDiv">
              <UserTextInput title="Nombre Completo" />
              <UserTextInput title="Teléfono" />
            </div>
            <div className="userDiv">
              <span className="text-bold">Notas</span>
              <TextArea rows={4} />
            </div>
          </TabPane>
          <TabPane tab="Credenciales" key="2">
            <h2 className="userTitle">Rol/Cargo</h2>
            <div className="userDiv">
              <Cascader
                options={options}
                onChange={onChange}
                placeholder="Please select"
              />
            </div>
            <h2 className="userTitle">Credenciales</h2>
            <div className="userDiv">
              <UserTextInput title="Usuario" />
              <UserTextInput title="Contraseña" />
              <UserTextInput title="Confirmar Contraseña" />
              <UserTextInput title="PIN" />
              <UserTextInput title="Confirmar PIN" />
            </div>
          </TabPane>
        </Tabs>
        <div className="buttonWrapper">
          <Link className="nav-text" to="/vista-usuarios">
            <Button type="primary" danger>
              Cancelar
            </Button>
          </Link>

          <Button type="primary" onClick="CreateUser">Crear Usuario</Button>
        </div>
      </div>
    </div>
  );
};
export default UserEdit;

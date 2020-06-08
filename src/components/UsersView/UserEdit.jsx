import React, { useState, useEffect } from 'react';
//import icons
import { Form, Input, Button, Tabs, Select } from 'antd';
//! Constants
import UserTextInput from './UserTextInput';
import { Link } from 'react-router-dom';
const { Option } = Select;

//! Libraries
//import { errorAlert, successAlert } from '../../shared/Alerts';

const { TabPane } = Tabs;

const UserEdit = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    const usuario = {
      contactoReferencia: {
        nombre: values.refnombre,
        telefono: values.reftelefono,
      },
      rol: values.rol,
      nombre: values.nombre,
      apellidos: values.apellidos,
      telefono: values.telefono,
      correo: values.correo,
      nombreUsuario: values.nombreUsuario,
      pin: values.pin,
      observaciones: values.observaciones,
    };
    console.log(usuario);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="MainWrapper">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Datos Generales" key="1">
              <div className="userDiv">
                <UserTextInput title="Nombre" name="nombre" />
                <UserTextInput title="Apellidos" name="apellidos" />
                <UserTextInput title="Correo Electrónico" name="correo" />
                <UserTextInput title="Teléfono" name="telefono" />
              </div>
              <h2 className="userTitle">Contacto Secundario</h2>
              <div className="userDiv">
                <UserTextInput
                  title="Nombre Completo"
                  name="refnombre"
                />
                <UserTextInput
                  title="Ref Teléfono"
                  name="reftelefono"
                />
              </div>
              <span className="text-bold">Observaciones</span>
              <div className="userDiv">
                <Form.Item name={'observaciones'}>
                  <Input.TextArea />
                </Form.Item>
              </div>
            </TabPane>
            <TabPane tab="Credenciales" key="2">
              <h2 className="userTitle">Rol/Cargo</h2>
              <Form.Item name="rol" rules={[{ required: true }]}>
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                >
                  <Option value="Mesero">Mesero</Option>
                  <Option value="Dueño">Dueño</Option>
                  <Option value="Caja">Caja</Option>
                  <Option value="Cocina">Cocina</Option>  
                </Select>
              </Form.Item>
              <div className="userDiv"></div>
              <h2 className="userTitle">Credenciales</h2>
              <div className="userDiv">
                <UserTextInput title="Usuario" name="nombreUsuario" />
                <UserTextInput
                  title="Contraseña"
                  name="contrasena"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su contraseña',
                    },
                  ]}
                />
                <UserTextInput
                  title="Confirmar Contraseña"
                  name="confcontrasena"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su contraseña',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('contrasena') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('Las contraseñas no coinciden');
                      },
                    }),
                  ]}
                />
                <UserTextInput
                  title="PIN"
                  name="pin"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su PIN',
                    },
                  ]}
                />
                <UserTextInput
                  title="Confirmar PIN"
                  name="confpin"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su PIN',
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('pin') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('Los PIN no coinciden');
                      },
                    }),
                  ]}
                />
              </div>
            </TabPane>
          </Tabs>
          <div className="buttonWrapper">
            <Link className="nav-text" to="/vista-usuarios">
              <Button type="primary" danger>
                Cancelar
              </Button>
            </Link>
            <Button type="primary" htmlType="submit">
              Crear Usuario
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserEdit;

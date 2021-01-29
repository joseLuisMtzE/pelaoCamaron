import React, { useEffect } from 'react';
import { makeRequest } from '../../shared/ApiWrapper';
import { alertError, alertSuccess } from '../../shared/Alert';
import { confirmDialog } from '../../shared/Alerts';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
//import icons
import { Form, Input, Button, Tabs, Select } from 'antd';
//! Constants
import UserTextInput from './UserTextInput';
import { Link, useHistory } from 'react-router-dom';
const { Option } = Select;
const { TabPane } = Tabs;

const UserEdit = props => {
  const [form] = Form.useForm();
  const id = props.match.params.id;
  console.log('recibido', id);
  let history = useHistory();

  const retrieveUser = async () => {
    try {
      let response = await makeRequest('GET', `usuario/${id}`);
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const addUser = async usuario => {
    try {
      let response = await makeRequest('POST', 'usuario/registro', usuario);
      if (response.status === 201) {
        alertSuccess('Usuario creado correctamente');
        history.push('/vista-usuarios');
      } else {
        // debugger;
        console.log(response.response.data.error);
        let msg =
          (response &&
            response.response &&
            response.response.data &&
            response.response.data.error) ||
          '';
        alertError(`Ups, algo salió chistosón, revisa tus datos. ${msg}`);
      }
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async usuario => {
    try {
      let response = await makeRequest('PUT', `usuario/${id}`, usuario);
      if (response.status === 200) {
        alertSuccess('Usuario editado correctamente');
        history.push('/vista-usuarios');
      } else {
        alertError('Ups, algo salió chistosón, revisa tus datos');
      }
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteUser = () => {
    confirmDialog(
      'eliminar',
      '¿Desea elminiar este usuario?',
      '',
      '',
      deleteUser
    );
  };

  const deleteUser = async () => {
    try {
      let response = await makeRequest('DELETE', `usuario/${id}`);
      if (response.status === 204) {
        alertSuccess('Usuario eliminado correctamente');
        history.push('/vista-usuarios');
      } else {
        alertError('Ups, algo salió chistosón, revisa tus datos');
      }
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      retrieveUser().then(cositas => {
        console.log(cositas);
        form.setFieldsValue({
          nombre: cositas.nombre,
          apellidos: cositas.apellidos,
          telefono: cositas.telefono,
          correo: cositas.correo,
          refnombre: cositas.contactoReferencia.nombre,
          reftelefono: cositas.contactoReferencia.telefono,
          observaciones: cositas.observaciones,
          rol: cositas.rol,
          nombreUsuario: cositas.nombreUsuario
        });
      });
    }
  }, []);
  let SubmitButton;
  let borrarUsuario;
  const onFinish = values => {
    console.log('Success:', values);
    const usuario = {
      contactoReferencia: {
        nombre: values.refnombre,
        telefono: values.reftelefono
      },
      rol: values.rol,
      nombre: values.nombre,
      apellidos: values.apellidos,
      telefono: values.telefono,
      correo: values.correo,
      nombreUsuario: values.nombreUsuario,
      pin: values.pin,
      observaciones: values.observaciones,
      contrasena: values.contrasena
    };
    if (id !== undefined) {
      console.log('update');
      console.log(usuario);
      updateUser(usuario);
    } else {
      console.log('upload');
      console.log(usuario);
      addUser(usuario);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (id === undefined) {
    SubmitButton = 'Crear usuario';
  } else {
    SubmitButton = 'Guardar cambios';
    borrarUsuario = (
      <Button type="primary" danger onClick={handleDeleteUser} className="boto">
        {' '}
        Eliminar Usuario
      </Button>
    );
  }

  return (
    <div className="MainWrapper">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
        onFinishFailed={onFinishFailed}
      >
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Datos Generales" key="1">
              <Link className="nav-text" to="/vista-usuarios">
                <Button
                  type="primary"
                  shape="circle"
                  danger
                  className="exitbuton"
                >
                  <Icon
                    path={mdiClose}
                    title="Cerrar"
                    size={0.9}
                    color="#ffffff"
                  />
                </Button>
              </Link>
              <div className="userDiv">
                <UserTextInput title="Nombre" name="nombre" />
                <UserTextInput title="Apellidos" name="apellidos" />
                <UserTextInput
                  title="Correo Electrónico"
                  name="correo"
                  extra="mail"
                />
                <UserTextInput title="Teléfono" name="telefono" />
              </div>
              <h2 className="userTitle">Contacto Secundario</h2>
              <div className="userDiv">
                <UserTextInput title="Nombre Completo" name="refnombre" />
                <UserTextInput title="Ref Teléfono" name="reftelefono" />
              </div>
              <h2 className="userTitle">Observaciones</h2>
              <div className="userDiv">
                <div className="UserTextInput">
                  <Form.Item name={'observaciones'}>
                    <Input.TextArea />
                  </Form.Item>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Credenciales" key="2">
              <Link className="nav-text" to="/vista-usuarios">
                <Button
                  type="primary"
                  shape="circle"
                  danger
                  className="exitbuton"
                >
                  <Icon
                    path={mdiClose}
                    title="Eliminar"
                    size={0.9}
                    color="#ffffff"
                  />
                </Button>
              </Link>
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
                      message: 'Favor de introducir su contraseña'
                    }
                  ]}
                />
                <UserTextInput
                  title="Confirmar Contraseña"
                  name="confcontrasena"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su contraseña'
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('contrasena') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('Las contraseñas no coinciden');
                      }
                    })
                  ]}
                />
                <UserTextInput
                  title="PIN"
                  name="pin"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su PIN'
                    }
                  ]}
                />
                <UserTextInput
                  title="Confirmar PIN"
                  name="confpin"
                  extra="pasword"
                  reglas={[
                    {
                      required: true,
                      message: 'Favor de introducir su PIN'
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue('pin') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject('Los PIN no coinciden');
                      }
                    })
                  ]}
                />
              </div>
            </TabPane>
          </Tabs>
          <div className="buttonWrapper">
            {borrarUsuario}
            <Button type="primary" htmlType="submit" className="boto">
              {SubmitButton}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default UserEdit;

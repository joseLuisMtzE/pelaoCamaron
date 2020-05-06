import { Form, Input, Button, Card } from 'antd';
import React from 'react';
import Logo from '../assets/logo.png';
import { makeRequest } from '../shared/ApiWrapper';
import { errorAlert } from '../shared/Alerts';
import { useHistory } from 'react-router-dom';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

// const LSKEY = 'users';

const FormLogin = () => {
  let history = useHistory();
  const [form] = Form.useForm();

  form.setFieldsValue({ correo: 'jsolis@gmail.mx', contrasena: '321321' });

  const onFinish = async values => {
    // localStorage.setItem(LSKEY, JSON.stringify(values));
    console.log('Success:', values);
    try {
      let response = await makeRequest('POST', 'usuario/login', values);
      console.log(response);
      if (response.status === 200) {
        let data = response.data;
        localStorage.setItem('token', data && data.token);
        history.push('/mesas');
      } else {
        errorAlert('Error', 'Algo salió mal');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="login-container">
        <div className="centerContent" size="small">
          <img className="imgLogo" src={Logo} alt="logo" width="300px" />
        </div>
        <div className="centerContent">
          <Card className="login-form-content">
            <Form
              {...layout}
              form={form}
              name="basic"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Usuario"
                name="correo"
                rules={[
                  {
                    required: true,
                    message: 'Introduce tu nombre de usuario'
                  }
                ]}
              >
                <Input className="inputs" />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="contrasena"
                rules={[
                  {
                    required: true,
                    message: 'Introduce tu contraseña'
                  }
                ]}
              >
                <Input.Password className="inputs" />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button
                  style={{ display: 'flex' }}
                  className="buttons"
                  type="primary"
                  htmlType="submit"
                >
                  Entrar
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FormLogin;

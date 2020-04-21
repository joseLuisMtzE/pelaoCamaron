import { Form, Input, Button, Card } from 'antd';
import React from 'react';
import Logo from '../assets/logo.png';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LSKEY = 'users';

const FormLogin = () => {
  const onFinish = (values) => {
    localStorage.setItem(LSKEY, JSON.stringify(values));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="login-container" >
        <div className="centerContent" size="small">
          <img className="imgLogo" src={Logo} alt="logo" width="300px" />
        </div>
        <div className="centerContent"  >
          <Card className="login-form-content">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Usuario"
                name="nombreUsuario"
                rules={[
                  {
                    required: true,
                    message: 'Introduce tu nombre de usuario',
                  },
                ]}
              >
                <Input className="inputs" />
              </Form.Item>

              <Form.Item
                label="Contraseña"
                name="contraseña"
                rules={[
                  {
                    required: true,
                    message: 'Introduce tu contraseña',
                  },
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

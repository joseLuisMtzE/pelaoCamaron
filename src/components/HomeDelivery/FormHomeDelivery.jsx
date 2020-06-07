import { Form, Input, Button, InputNumber } from 'antd';
import React from 'react';

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

const LSKEY = 'address-home-delivery';

const FormHomeDelivery = () => {
  const onFinish = (values) => {
    localStorage.setItem(LSKEY, JSON.stringify(values));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <Form
      className="form-home-delivery"
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nombre"
        name="nombreCliente"
        rules={[
          {
            required: true,
            message: 'Introduzca nombre',
          },
        ]}
      >
        <Input className="inputs" />
      </Form.Item>

      <Form.Item
        label="Telefono"
        name="telefono"
        rules={[
          {
            required: true,
            message: 'Introduzca el telefono',
          },
        ]}
      >
        <Input className="inputs" />
      </Form.Item>
      <Form.Item
        label="Calle"
        name="calle"
        rules={[
          {
            required: true,
            message: 'Introduzca la calle',
          },
        ]}
      >
        <Input className="inputs" />
      </Form.Item>
      <Form.Item
        label="Número Exterior"
        name="numeroExterior"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber className="inputs" />
      </Form.Item>
      <Form.Item
        label="Número Interior"
        name="numeroInterior"
        rules={[
          {
            required: false,
            message: 'Introduzca el numero interior',
          },
        ]}
      >
        <InputNumber className="inputs" />
      </Form.Item>
      <Form.Item
        label="Colonia"
        name="colonia"
        rules={[
          {
            required: true,
            message: 'Introduzca la colonia',
          },
        ]}
      >
        <Input className="inputs" />
      </Form.Item>
      <Form.Item
        label="Referencias"
        name="referencia"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
          label="Pagara con..."
          name="pagaraCon"
          rules={[
            {
              required: true,
              message: 'Introduzca con cuanto se pagara la orden',
            },
          ]}
        >
          <InputNumber className="inputs" />
        </Form.Item>
        <Form.Item
          label="Cambio"
          name="cambio"
          rules={[
            {
              required: true,
              message: 'Introduzca el cambio',
            },
          ]}
        >
          <InputNumber className="inputs" />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button className="buttons" type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>
    </Form>
        <div className="footer-home-delivery" >
      </div>
</>
);
};

export default FormHomeDelivery;

import React, { useEffect } from 'react';
import * as Numeral from 'numeral';
import { Form, Button, Select, Input } from 'antd';

const CloseOrder = props => {
  const { loading, total, cambio, onFinishForm } = props;
  const { Option } = Select;
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ porcentajeDescuento: '0' });
  });

  const onFinish = values => {
    console.log('Success:', values);
    onFinishForm(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name="paymentInfo"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          label="Forma de pago"
          name="tipoPago"
          rules={[{ required: true, message: 'Elije una forma de pago!' }]}
        >
          <Select placeholder="Selecciona un método de pago">
            <Option value="Efectivo">Efectivo</Option>
            <Option value="Tarjeta">Tarjeta</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Pagó con:"
          name="pagoCon"
          rules={[
            {
              required: true,
              message: 'Ingresa la cantidad con la que te pagó el cliente!'
            }
          ]}
        >
          <Input
            placeholder="Cantidad con la que pagó el cliente"
            prefix="$"
            suffix="MXN"
          />
        </Form.Item>
        <Form.Item label="Descuento:" name="porcentajeDescuento">
          <Input placeholder="Cantidad con la que pagó el cliente" suffix="%" />
        </Form.Item>
        <h5>Total: {Numeral(total).format('$0,0.00')}</h5>
        <h5>Cambio: {Numeral(cambio).format('$0,0.00')}</h5>

        <Button type="primary" htmlType="submit" loading={loading}>
          Pagar
        </Button>
      </Form>
    </>
  );
};

export default CloseOrder;

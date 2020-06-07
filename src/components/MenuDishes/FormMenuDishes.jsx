import React from 'react';
import { Form, Input, Button } from 'antd';

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

const LSKEY = 'menu-dishes';

const FormMenuDishes = ({ onOk }) => {
  const onFinish = (values) => {
    localStorage.setItem(LSKEY, JSON.stringify(values));
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  /*
<form action="">
                    <label htmlFor="">Nombre</label>
                    <Input type="text"/>
                    <label htmlFor="">Categoría</label>
                    <Input type="text"/>
                    <label htmlFor="">Area de cocina</label>
                    <Input type="text"/>
                    <label htmlFor="">Precio con iva</label>
                    <Input type="text"/>
                    <label htmlFor="">Precio sin iva</label>
                    <Input type="text"/>
                    <label htmlFor="">Gramos</label>
                    <Input type="text"/>
                    <label htmlFor="">Descripción</label>
                    <Input type="text"/>
                    <label htmlFor="">Tiempo de preparación</label>
                    <CascaderTime/>
                    <label htmlFor="">Imagen</label>
                    <Input type="file" capture="user" accept="image/*"/>
                    <label htmlFor="">Impuesto</label>
                    <Input type="text"/>
                </form>
*/

  return (
    <>
      <div className="centerContent">
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
            label="Nombre"
            name="nombre"
            rules={[
              {
                required: true,
                message: 'Introduce el nombre del platillo',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Categoria"
            name="categoria"
            rules={[
              {
                required: true,
                message: 'Introduce la categoria',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Area"
            name="area"
            rules={[
              {
                required: true,
                message: 'Introduce el area al que pertenece',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Precio con IVA"
            name="precioConIva"
            rules={[
              {
                required: true,
                message: 'Introduce el precio con IVA',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Precio sin IVA"
            name="precioSinIva"
            rules={[
              {
                required: true,
                message: 'Introduce el precio sin IVA',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Peso"
            name="peso"
            rules={[
              {
                required: true,
                message: 'Introduce el peso',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Descripcion"
            name="descripcion"
            rules={[
              {
                required: true,
                message: 'Introduce la descripcion del platillo',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Tiempo de preparacion"
            name="tiempoPreparacion"
            rules={[
              {
                required: true,
                message: 'Introduce el tiempo de preparacion',
              },
            ]}
          >
            <Input className="inputs" />
          </Form.Item>

          <Form.Item
            label="Imagen"
            name="imagen"
            rules={[
              {
                required: true,
                message: 'Sube una imagen del platillo',
              },
            ]}
          >
            <Input type="file" accept="image/*" className="inputs" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button
              style={{ display: 'flex' }}
              className="buttons"
              type="primary"
              htmlType="submit"
              onClick={onOk}
            >
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormMenuDishes;

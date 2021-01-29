import React, { useState, useEffect, useContext } from 'react';
import { Form, Input, Button, Cascader, InputNumber } from 'antd';
import { DishesContext } from './MenuDishesContext';

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

const FormMenuDishes = ({ onOk }) => {
  const { addDishesRequest, retrieveCategories, retrieveAreas } = useContext(
    DishesContext
  );

  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

  const initialize = async () => {
    const initCategories = await retrieveCategories();
    setCategories(initCategories);
    const initAreas = await retrieveAreas();
    setAreas(initAreas);
  };
  useEffect(() => {
    initialize();
  }, []);

  const categoryOptions = categories.map(category => {
    return {
      value: category._id,
      label: category.nombre
    };
  });

  const areaOptions = areas.map(area => {
    return {
      value: area._id,
      label: area.nombre
    };
  });

  //Calcular iva
  const [precioIva, setPrecioIva] = useState(0);

  /*function calcIVA(value){
    var conIva= value+value*.16;
    console.log(conIva)
     setPrecioIva(conIva)
      
    //console.log(document.getElementById('conIva').value.target)
  }*/

  //console.log(categoryOptions)

  const onFinish = values => {
    console.log('Datos Correctos...');
    //localStorage.setItem(LSKEY, JSON.stringify(values));
    addDishesRequest(values);
    setTimeout(() => {
      onOk();
    }, 3000);
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Datos Incorrectos...');
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className="centerContent">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true
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
                message: 'Introduce el nombre del platillo'
              }
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
                message: 'Introduce la categoria'
              }
            ]}
          >
            <Cascader options={categoryOptions} onChange={''} placeholder="" />
          </Form.Item>
          <Form.Item
            label="Area"
            name="area"
            rules={[
              {
                required: true,
                message: 'Introduce el area al que pertenece'
              }
            ]}
          >
            <Cascader options={areaOptions} placeholder={''} />
          </Form.Item>
          <Form.Item
            label="Precio sin IVA"
            name="precioSinIva"
            rules={[
              {
                required: true,
                message: 'Introduce el precio sin IVA'
              }
            ]}
          >
            <InputNumber
              className="inputs"
              id="sinIva"
              onChange={(value) => setPrecioIva(value + value * 0.16)}
              style={{ float: 'left' }}
            />
          </Form.Item>
          <Form.Item label="Precio con IVA" name="precioConIva">
            <h4 style={{ float: 'left' }}>{precioIva}</h4>
          </Form.Item>
          <Form.Item
            label="Peso (gramos)"
            name="peso"
            rules={[
              {
                required: true,
                message: 'Introduce el peso'
              }
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
                message: 'Introduce la descripcion del platillo'
              }
            ]}
          >
            <Input className="inputs" />
          </Form.Item>
          <Form.Item
            label="Tiempo de preparación (minutos)"
            name="tiempoPreparación"
            rules={[
              {
                required: true,
                message: 'Introduce el tiempo de preparacion'
              }
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
                message: 'Sube una imagen del platillo'
              }
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
              /*onClick={onOk}*/
            >
              Agregar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormMenuDishes;

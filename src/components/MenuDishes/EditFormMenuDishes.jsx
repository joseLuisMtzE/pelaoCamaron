import React, { useState, useEffect,useContext } from 'react';
import {Form, Input, Button,Cascader } from 'antd';
import url from '../../constants/api'
import axios from 'axios'
import {DishesContext} from './MenuDishesContext'


const api = axios.create({
  baseURL:url.apiEndPoint
})


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




//const LSKEY = 'menu-dishes';
//const token='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODgxMjg2NzIsImV4cCI6MTU4ODE1NzQ3Mn0.nHKbrsDXwqkroyXTRqS6rMxg4pfF3L74WDy4SPIKpxY'

const EditFormMenuDishes = ({onOk, nombre, categorias, descripcion, imagen, precioSinIva,precioConIva,peso,tiempoPreparación, categoria, area}) => {
  const {retrieveFormMenuDishes,addDishesRequest, retrieveCategories,retrieveAreas}=useContext(DishesContext)
  console.log('')
  const [dishes,setDishes]=useState([])
  const [categories, setCategories] = useState([]);
  const [areas,setAreas]=useState([])

  const [form]=Form.useForm();
  
  const initialize= async () =>{
    const initDishes= await retrieveFormMenuDishes()
    setDishes(initDishes)
    
    const initCategories=await retrieveCategories();
    setCategories(initCategories)
    const initAreas=await retrieveAreas();
    setAreas(initAreas)
  }
  console.log(dishes)
  useEffect(() => {
    initialize();
    form.setFieldsValue({
      nombre:nombre,
      precioConIva:precioConIva,
      precioSinIva: precioSinIva, 
      peso:peso,
      descripcion:descripcion,
      tiempoPreparación:tiempoPreparación,
      imagen:{imagen},
      categoria:categoryOptionsxd[0].label,
      area:areaOptionsxd[0].label
      
    })
  console.log(categoria,area)    
  }, []);
               
  //console.log(dishes.nombre)

const categoryOptionsxd=  [{
      value:categoria._id,
      label:categoria.nombre
}  ]
const areaOptionsxd=  [{
  value:area._id,
  label:area.nombre
}  ]

//console.log(categoryOptions,areaOptions)
const categoriesOptions= categories.map((category) => {
  return{
    value:category._id,
    label:category.nombre
  }
}  )
const areaOptions= areas.map((area) => {
  return{
    value:area._id,
    label:area.nombre
  }
}  )

console.log(categoryOptionsxd[0].value)
//console.log(categoryOptions)

  const onFinish = (values) => {
    addDishesRequest(values)
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

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
        form={form}
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
          
          <Input className="inputs"/> 
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
          
         <Cascader options={categoriesOptions} defaultValue={[categoryOptionsxd[0].value]} placeholder="" />
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
          <Cascader options={areaOptions} defaultValue={areaOptionsxd[0].value} placeholder={''}/>
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
          label="Peso (gr)"
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
          label="Tiempo de preparación (Min)"
          name="tiempoPreparación"
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
          <img src='https://jaliscocina.com/wp-content/uploads/2019/04/taco-de-sal-jcn.jpg' alt={nombre} style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '20px',
            borderRadius: '5px',
            zIndex: 0,
          }}/>
          <Input type="file" accept="image/*" className="inputs" />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button
            style={{ display: 'flex' }}
            className="buttons centerContent"
            type="primary"
            htmlType="submit"
            onClick={onOk}
          >
            Confirmar
          </Button>
        </Form.Item>
      </Form>
      </div>
    </>
  );
};

export default EditFormMenuDishes;



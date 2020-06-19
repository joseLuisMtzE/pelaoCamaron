import { Form, Input, Button, InputNumber } from 'antd';
import React,{useEffect} from 'react';
// import { Link } from 'react-router-dom';
//import Domicilio from '../ticket/Domicilio';
import { makeRequest } from '../../../shared/ApiWrapper';
import { alertError } from '../../../shared/Alert';
import { CodepenOutlined } from '@ant-design/icons';


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

const LSKEY = 'address-home-delivery';

const EditFormHomeDelivery = ({ props }) => {
  const idMesa=localStorage.getItem('mesaID')
  const [form] = Form.useForm();
  console.log(props)
  const editarDomicilio = async (estado,values) => {
    //console.log(estado,values)
    try {
      let response = await makeRequest('PUT', `ordenes/${idMesa}`, {
        estado: estado,
        domicilio: {
          calle: values.calle,
          colonia: values.colonia,
          nombreCliente: values.nombreCliente,
          numeroExterior: values.numeroExterior,
          numeroInterior: values.numeroInterior,
          pagaraCon: values.pagaraCon,
          referencia: values.referencia,
          telefono: values.telefono
        }
      });

      if (response.status === 201) {
        console.log('Domicilio actualizado correctamente');
       // window.location.href = 'http://localhost:3000/agregar-platillos/' + response.data.data._id;
      } else {
        // window.location.href = '/mesas';
        alertError('Hubo un error al actualizar el domicilio');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
      // window.location.href = '/mesas';
      alertError('Hubo un error al actualizar el domicilio');
    }
  };

  useEffect(() => {
    //llenar inputs con informacion original
    init()
    // console.log(categoria, area);
  }, []);
  
  const getDataHomeDelivery = async (id) => {
    try {
      let response = await makeRequest('GET', 'mesas/'+id+'/ordenes');
      let data = response.data.data;
      //console.log(data)
      //console.log(data)
      return data;
    } catch (err) {
      console.log(err);
    }
  };


  function init(){
    getDataHomeDelivery(idMesa).then((data)=>{
      console.log(data[0].estado) //-------  OBTENER ESTADO DE MESA
      const values=data[0].domicilio
      if(values){
        console.log('GET CORRECTO, ESCRIBIENDO VALUES EN INPUTS...');

      }
    
      form.setFieldsValue({
        nombreCliente: values.nombreCliente,
        telefono: values.telefono,
        calle: values.calle,
        numeroExterior: values.numeroExterior,
        numeroInterior: values.numeroInterior,
        colonia: values.colonia,
        referencia: values.referencia,
        pagaraCon: values.pagaraCon
      });
      
    })
    
  }
  



  const domicilio = JSON.parse(localStorage.getItem('domicilio'));
  console.log(domicilio.tipoOrden);

  const onFinish = values => {
    getDataHomeDelivery(idMesa).then((data)=>{
      var estado=data[0].estado; //-------  OBTENER ESTADO DE MESA
      editarDomicilio(estado,values);
    })
    
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        className="form-home-delivery"
        {...layout}
        name="basic"
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Form.Item
          label="Nombre"
          name="nombreCliente"
          rules={[
            {
              required: true,
              message: 'Introduzca nombre'
            }
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
              message: 'Introduzca el telefono'
            }
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
              message: 'Introduzca la calle'
            }
          ]}
        >
          <Input className="inputs" />
        </Form.Item>
        <Form.Item
          label="Número Exterior"
          name="numeroExterior"
          rules={[
            {
              required: true
            }
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
              message: 'Introduzca el numero interior'
            }
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
              message: 'Introduzca la colonia'
            }
          ]}
        >
          <Input className="inputs" />
        </Form.Item>
        <Form.Item
          label="Referencias"
          name="referencia"
          rules={[
            {
              required: false
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
        label="Pagara con" 
        name="pagaraCon"
        rules={[
          {
            required: true,
            message: 'Introduzca la colonia'
          }
        ]}
        >
          <InputNumber className="inputs" />
        </Form.Item>
        {/*<Form.Item
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
        </Form.Item>*/}

        <Form.Item {...tailLayout}>
          <Button className="buttons" type="primary" htmlType="submit">
            Confirmar
          </Button>
        </Form.Item>
      </Form>
      <div className="footer-home-delivery"></div>
    </>
  );
};

export default EditFormHomeDelivery;

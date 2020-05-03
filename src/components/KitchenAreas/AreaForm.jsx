import React, {useContext, useState,useEffect} from 'react'
import {AreaListContext} from './AreaListContext';
import { Form, Input } from 'antd';
import {alertError} from '../../shared/Alert';

const AreaForm = ({onOk}) => {

    const {addArea, editItem, editArea,areas} = useContext(AreaListContext);

    const [name, setName] = useState('');

    //Usar el hook del form para obtener el current form
    const [form] = Form.useForm();

    //validacion para que no existan repetidos
    function validationRepeat(){
        //var validation=false;
         var item=areas.find(area =>area.nombre === name);
         if( item===undefined){
            handleSubmit();
            // console.log('no esta repetido');
         }else {
             alertError('No esta permitido repetir áreas de cocina');
           //  console.log('si esta repetido');
         }
     }

    //se va guardando el estado con el cambio en el input
    const handleChange= e => {
        setName(e.target.value);
    };

    //cuando se ingresa el area 
    const handleSubmit = e => {
        //e.preventDefault();
        if(editItem===null){
            addArea(name);
            setName("");
            form.setFieldsValue({nameArea:''})
        }else{
            editArea(name,editItem._id);
        }
        onOk();
    };

    useEffect(()=>{    
        if(editItem !== null){
            setName(editItem.nombre);
            form.setFieldsValue({nameArea:editItem.nombre});
        } else {
          setName("");
          form.setFieldsValue({nameArea:''})
        }
    },[editItem]);


    return (
        <Form
        name="areasForm"
        className="formKitchen"
       onFinish={validationRepeat}
        initialValues={{ remember: true }}
        form={form}
        >
        <Form.Item
        label="Nombre:"
        name="nameArea"
        rules={[{ required: true, message: 'Por favor ingresa un nombre',whitespace: true,}]}
      >
      <Input 
      type='text'
      onChange={handleChange}
      value={name}
        />
      </Form.Item>

      <Form.Item>
      <button  className="add-area-btn" type='submit'>
       {editItem !==null ? 'Editar' : 'Añadir'}
      </button>
      </Form.Item>
      </Form>
    )
}

export default AreaForm; 

import React, {useContext, useState,useEffect} from 'react';
import {CategoryListContext} from './CategoryListContext';
import { Form, Input } from 'antd';
import {alertError} from '../../shared/Alert';

const CategoryForm = ({onOk}) => {
    const {addCategory, editItem, editCategory,categories} = useContext(CategoryListContext);

    const [name, setName] = useState('');

     //Usar el hook del form para obtener el current form
     const [form] = Form.useForm();


    //validacion para que no existan repetidos
     function validationRepeat(){
        //var validation=false;
         var item=categories.find(category =>category.nombre === name);
         if( item===undefined){
            handleSubmit();
            // console.log('no esta repetido');
         }else {
             alertError('No esta permitido repetir categorias');
           //  console.log('si esta repetido');
         }
     }

    //se va guardando el estado con el cambio en el input
    const handleChange= e => {
        setName(e.target.value);
    };

    //cuando se ingresa la categoria
    const handleSubmit = e => {
      //  e.preventDefault();
        if(editItem===null){
            addCategory(name);
            setName("");
            form.setFieldsValue({nameCategory:''});
        }else{
            editCategory(name,editItem._id);
        }
        onOk();
    };

    useEffect(()=>{
        if(editItem !== null){
            setName(editItem.nombre);
            form.setFieldsValue({nameCategory:editItem.nombre})
        } else { 
            setName("");
            form.setFieldsValue({nameCategory:''});
        }
    },[editItem]);

    /*
    <form onSubmit={handleSubmit} className="formKitchen">
            <input
              type="text"
              onChange={handleChange}
              value={name}
              maxLength="20"
              id="input-categories"
              className="area-input"
              placeholder="Añadir Categorias..."
              required/>
              <div className="buttonsKitchen">
                  <button  className="add-area-btn" >
                  {editItem !==null ? 'Editar' : 'Añadir'}
                  </button>
              </div>
        </form>
        */

    return (

        <Form
        name="categoriesForm"
        className="formKitchen"
       onFinish={validationRepeat}
        initialValues={{ remember: true }}
        form={form}
        >
        <Form.Item
        label="Nombre:"
        name="nameCategory"
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
 
export default CategoryForm;
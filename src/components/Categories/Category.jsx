import React,{useContext}  from 'react';
import {CategoryListContext} from './CategoryListContext';
import Swal from 'sweetalert2';
//import {Button} from 'antd';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { mdiLeadPencil } from '@mdi/js';


const Category = ({category}) => {

     //para saber si estas seguro de borrar 
     function alert(){

        Swal.fire({
          title: '¿Estás seguro de eliminarlo?',
          text: "No podras revertir está acción!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si borralo!',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Borrado!',
              'La categoria ha sido borrada',
              'success'
            )
            //console.log(category)
            removeCategory(category._id)
          }
        })
        
      }
  
  
      const  {removeCategory, findItem}=useContext(CategoryListContext);

    return (
        <li className="list-itemKitchen">
            <span>{category.nombre}</span>
            <div>
                <button id="delete-categories" type="primary" shape="round" onClick={()=> alert()} 
                className="btn-delete-kitchen">
                <Icon path={mdiDelete}
                title="Eliminar"
                size={.9}
                color="#FFF"
                /> 
                </button>
                <button onClick={()=>{findItem(category._id)}} id="edit-categories" type="primary" shape="round"
                className="btn-edit-kitchen">
                <Icon path={mdiLeadPencil}
                title="Editar"
                size={.9}
                color="#FFF"
                /> 
                </button>
            </div>
        </li>
      );
}
 
export default Category;
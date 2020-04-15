import React,{useContext}  from 'react';
import {CategoryListContext} from './CategoryListContext';
import Swal from 'sweetalert2';
import {Button} from 'antd';

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
            removeCategory(category.id)
          }
        })
        
      }
  
  
      const  {removeCategory, findItem}=useContext(CategoryListContext);

    return (
        <li className="list-itemKitchen">
            <span>{category.name}</span>
            <div>
                <Button id="delete-categories" type="primary" shape="round" onClick={()=> alert()} 
                className="btn-delete-kitchen">
                 Borrar
                </Button>
                <Button onClick={()=>findItem(category.id)} id="edit-categories" type="primary" shape="round"
                className="btn-edit-kitchen">
                Editar
                </Button>
            </div>
        </li>
      );
}
 
export default Category;
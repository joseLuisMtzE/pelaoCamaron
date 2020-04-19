import React,{useContext} from 'react'
import {AreaListContext} from './AreaListContext';
import Swal from 'sweetalert2';
import { Button } from 'antd';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { mdiLeadPencil } from '@mdi/js';


const Area = ({area}) => {
   
     
    //para saber si estas seguro de borrar el area
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
            'La area de cocina ha sido borrada',
            'success'
          )
          removeArea(area.id)
        }
      })
      
    }



    const  {removeArea, findItem}=useContext(AreaListContext);

    return (
        <li className="list-itemKitchen">
            <span>{area.name}</span>
            <div>
                <Button id="delete-kitchenArea" type="primary" shape="round" onClick={()=> alert()} 
                className="btn-delete-kitchen">
                <Icon path={mdiDelete}
                title="Basura"
                size={.9}
                color="#FFF"
                /> 
                </Button>
                <Button onClick={()=>findItem(area.id)} id="edit-kitchenArea" type="primary" shape="round"
                className="btn-edit-kitchen">
                <Icon path={mdiLeadPencil}
                title="Lapiz"
                size={.9}
                color="#FFF"
                /> 
                </Button>
            </div>
        </li>
    )
}

export default Area

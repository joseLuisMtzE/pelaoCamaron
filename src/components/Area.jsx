import React,{useContext} from 'react'
import {AreaListContext} from './AreaListContext';
import Swal from 'sweetalert2';
import { Button } from 'antd';


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
            <span>{area.title}</span>
            <div>
                <Button id="delete-kitchenArea" type="primary" shape="round" onClick={()=> alert()} 
                className="btn-delete area-btn">
                 Borrar
                </Button>
                <Button onClick={()=>findItem(area.id)} id="edit-kitchenArea" type="primary" shape="round"
                className="btn-edit area-btn">
                Editar
                </Button>
            </div>
        </li>
    )
}

export default Area

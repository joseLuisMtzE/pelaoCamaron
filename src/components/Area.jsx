import React,{useContext} from 'react'
import {AreaListContext} from './AreaListContext';
import Swal from 'sweetalert2';
import { Button } from 'antd';


const Area = ({area}) => {
   
     
    //para saber si estas seguro de borrar el area
    function alert(){

      //sweetAlert
      const swalWithBootstrapButtons = Swal.mixin({
       customClass: {
       confirmButton: 'btn btn-success',
       cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro de eliminarlo?',
            text: "No podras revertir esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
              swalWithBootstrapButtons.fire(
                'Borrado!',
                'La area de cocina ha sido borrada correctamente',
                'success'
              )
              removeArea(area.id)
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu area de cocina esta a salvo',
                'error'
              )
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

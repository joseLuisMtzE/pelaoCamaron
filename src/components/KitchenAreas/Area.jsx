import React, { useContext } from 'react';
import { AreaListContext } from './AreaListContext';
import { getRol } from '../../shared/ApiWrapper';
import Swal from 'sweetalert2';
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import { mdiLeadPencil } from '@mdi/js';

const Area = ({ area }) => {
  //para saber si estas seguro de borrar el area
  function alert() {
    Swal.fire({
      title: '¿Estás seguro de eliminarlo?',
      text: 'No podras revertir está acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si borralo!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        /*Swal.fire(
            'Borrado!',
            'La area de cocina ha sido borrada',
            'success'
          )*/
        removeArea(area._id);
      }
    });
  }

  const { removeArea, findItem } = useContext(AreaListContext);

  return (
    <li className="list-itemKitchen">
      <span>{area.nombre}</span>
      {getRol() === 'Dueño' || getRol() === 'Caja' ? (
        <div>
          <button
            id="delete-kitchenArea"
            type="primary"
            shape="round"
            onClick={() => alert()}
            className="btn-delete-kitchen"
          >
            <Icon path={mdiDelete} title="Eliminar" size={0.9} color="#FFF" />
          </button>
          <button
            onClick={() => findItem(area._id)}
            id="edit-kitchenArea"
            type="primary"
            shape="round"
            className="btn-edit-kitchen"
          >
            <Icon path={mdiLeadPencil} title="Editar" size={0.9} color="#FFF" />
          </button>
        </div>
      ) : null}
    </li>
  );
};

export default Area;

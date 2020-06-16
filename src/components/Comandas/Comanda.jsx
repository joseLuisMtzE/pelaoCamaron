import React from 'react';
import camarones from '../../assets/camarones.jpg';
import { Tag, Button } from 'antd';
import Swal from 'sweetalert2';
import { makeRequest } from '../../shared/ApiWrapper';

function Comanda({ comanda, noMesa, mostrar }) {
  noMesa = noMesa || comanda.orden.mesa.noMesa;
  console.log('MARIANA LO JODIO, ', comanda, noMesa);

  /*ACTUALIZAR COMANDA */
  const actualizarComanda = async () => {
    try {
      let response = await makeRequest('PUT', `comandas/${comanda._id}`, {
        platillo: comanda.platillo._id,
        cantidad: comanda.cantidad,
        estado: 'Cerrada',
        observaciones: comanda.observaciones,
        orden: comanda.orden._id
      });
      let data = response.data.data;
      window.location.reload();
      ////console.log('data', data);
      return data;
    } catch (err) {
      //console.log(err);
    }
  };

  function alert() {
    Swal.fire({
      title: '¿Estás seguro cerrarla?',
      text: '¡No podras revertir está acción!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡ciérrala!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        console.log('Funcionaaa');
        actualizarComanda();
      }
    });
  }
  return (
    <div className="card-comanda">
      <div className="card-containr-comanda">
        <div className="center">
          <img className="imgRedonda" src={camarones} alt="Camarones"></img>
        </div>
        <h1 className="titulo-orden">{comanda.platillo.nombre}</h1>
        <br></br>
        {comanda.estado === 'Cerrada' ? (
          <p className="texto-orden">
            <td>
              <Tag color="success">{comanda.estado}</Tag>
            </td>
          </p>
        ) : comanda.estado === 'En proceso' ? (
          <td>
            <p className="texto-orden">
              <Tag color="warning">{comanda.estado}</Tag>
            </p>
          </td>
        ) : (
          <p className="texto-orden">
            <td>
              <Tag color="error">{comanda.estado}</Tag>
            </td>
          </p>
        )}

        <br></br>
        <p className="texto-orden">
          <b>Cantidad:</b> {comanda.cantidad}
        </p>
        <br></br>
        <p className="texto-orden">
          <b>Mesa:</b> {noMesa}
        </p>
        <br></br>
        <p className="texto-orden">
          <b>fecha:</b> {comanda.fecha}
        </p>
        <br></br>
        <p className="texto-orden">
          <b>Observaciones:</b> {comanda.observaciones}
        </p>
        {(mostrar &&
          (comanda.estado === 'En proceso' ? (
            <div className="center">
              <Button
                style={{
                  textAlign: 'center',
                  width: 120,
                  height: 50,
                  boxShadow: '0px 3px 5px 0px grey',
                  margin: '1rem'
                }}
                id="Button-print"
                type="danger"
                htmlType="button"
                size="large"
                onClick={() => alert()}
              >
                Cerrar
              </Button>
            </div>
          ) : null)) ||
          null}
      </div>
    </div>
  );
}
export default Comanda;

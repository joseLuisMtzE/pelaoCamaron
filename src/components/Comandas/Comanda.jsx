import React from 'react';
import camarones from '../../assets/camarones.jpg';
import { Tag } from 'antd';

function Comanda({ comanda }) {
  return (
    <div>
      <div className="center">
        <img className="imgRedonda" src={camarones} alt="Camarones"></img>
      </div>
      <h1 className="titulo-orden">{comanda.platillo.nombre}</h1>
      <br></br>
      <p className="texto-orden">
        {comanda.estado === 'Cerrada' ? (
          <td>
            <Tag color="success">{comanda.estado}</Tag>
          </td>
        ) : comanda.estado === 'En proceso' ? (
          <td>
            <Tag color="warning">{comanda.estado}</Tag>
          </td>
        ) : (
          <td>
            <Tag color="error">{comanda.estado}</Tag>
          </td>
        )}
      </p>
      <br></br>
      <p className="texto-orden">
        <b>Cantidad:</b> {comanda.cantidad}
      </p>
      <br></br>
      <p className="texto-orden">
        <b>Mesa:</b> {comanda.orden.mesa.noMesa}
      </p>
      <br></br>
      <p className="texto-orden">
        <b>Observaciones:</b> {comanda.observaciones}
      </p>
    </div>
  );
}
export default Comanda;

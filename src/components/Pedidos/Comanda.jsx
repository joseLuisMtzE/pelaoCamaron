import React from 'react';
import camarones from '../../assets/camarones.jpg';

function Comanda({ comanda }) {
  return (
    <div>
      <div style={{ 'text-align': 'center' }}>
        <img className="imgRedonda" src={camarones} alt="Camarones"></img>
      </div>
      <h1 className="titulo-orden">{comanda.platillo.nombre}</h1>
      <br></br>
      <p className="texto-orden">Estado: {comanda.estado}</p>
      <br></br>
      <p className="texto-orden">Cantidad: {comanda.cantidad}</p>
      <br></br>
      <p className="texto-orden">Mesa: {comanda.orden.mesa}</p>
      <br></br>
      <p className="texto-orden">Observaciones: {comanda.observaciones}</p>
    </div>
  );
}
export default Comanda;

import React, { useState } from 'react';

const Domicilio = (props) => {
  const domicilio = props.domicilio;
  console.log(domicilio ? true : false);

  return (
    <div>
      {(domicilio && (
        <div className="Container-ticket">
          <h4> DOMILIO </h4>
          <p>CLIENTE: {domicilio.nombreCliente}</p>
          <p> TELÉFONO: {domicilio.telefono}</p>
          <p> CALLE: {domicilio.calle}</p>
          <p>NUMERO EXTERIOR: {domicilio.numeroExterior}</p>
          <p> NUMERO INTERIOR: {domicilio.numeroInterior}</p>
          <p> COLONIA: {domicilio.colonia}</p>
          <p> REFERENCIAS: {domicilio.referencia}</p>
          <p> PAGARÁ CON: ${domicilio.pagaraCon}</p>
          <p> CAMBIO: {domicilio.cambio}</p>
          <br></br>
        </div>
      )) ||
        ''}
    </div>
  );
};

export default Domicilio;

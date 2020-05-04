import React, { useState } from 'react';

const Domicilio = (props) => {
  const domicilio = props.domicilio;
  console.log(domicilio ? true : false);

  return (
    <div>
      {(domicilio && (
        <div className="Container-ticket">
          <h4> DOMICILIO </h4>
          <span className="Space-span">
            {' '}
            CLIENTE: {domicilio.nombreCliente}
          </span>
          <span className="Space-span"> TELÉFONO: {domicilio.telefono}</span>
          <span className="Space-span"> CALLE: {domicilio.calle}</span>
          <span className="Space-span">
            {' '}
            NUMERO EXTERIOR: {domicilio.numeroExterior}
          </span>
          <span className="Space-span">
            {' '}
            NUMERO INTERIOR: {domicilio.numeroInterior}
          </span>
          <span className="Space-span"> COLONIA: {domicilio.colonia}</span>
          <span className="Space-span">
            {' '}
            REFERENCIAS: {domicilio.referencia}
          </span>
          <span className="Space-span">
            {' '}
            PAGARÁ CON: ${domicilio.pagaraCon}
          </span>
          <span className="Space-span"> CAMBIO: {domicilio.cambio}</span>

          <br></br>
        </div>
      )) ||
        ''}
    </div>
  );
};

export default Domicilio;

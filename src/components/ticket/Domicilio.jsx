import React from 'react';

const Domicilio = (props) => {
  let domicilio = false;

  if (props.domicilio) {
    domicilio = true;
  } else {
    return '';
  }

  return (
    <div>
      {(domicilio && (
        <div className="Container-ticket">
          <strong className="Space-span"> DOMICILIO </strong>
          <span className="Space-span">
            {' '}
            CLIENTE: {props.domicilio && props.domicilio.nombreCliente}
          </span>
          <span className="Space-span"> TELÉFONO: {}</span>
          <span className="Space-span">
            {' '}
            CALLE: {props.domicilio && props.domicilio.calle}
          </span>
          <span className="Space-span">
            {' '}
            NUMERO EXTERIOR: {props.domicilio && props.domicilio.numeroExterior}
          </span>
          <span className="Space-span">
            {' '}
            NUMERO INTERIOR: {props.domicilio && props.domicilio.numeroInterior}
          </span>
          <span className="Space-span">
            {' '}
            COLONIA: {props.domicilio && props.domicilio.colonia}
          </span>
          <span className="Space-span">
            {' '}
            REFERENCIAS: {props.domicilio && props.domicilio.referencia}
          </span>
          <span className="Space-span">
            {' '}
            PAGARÁ CON: ${props.domicilio && props.domicilio.pagaraCon}
          </span>
          <span className="Space-span">
            {' '}
            CAMBIO: {props.domicilio && props.domicilio.cambio}
          </span>

          <br></br>
        </div>
      )) ||
        ''}
    </div>
  );
};

export default Domicilio;

import React from 'react';

const infoVariables = (props) => {
  //const infoVariable = ({ folio, fecha, mesa } = props);
  const pago = props.pago;
  return (
    <div className="Container-ticket">
      <br></br>
      <span className="Space-span">FOLIO TICKET #{pago.cambio}</span>
      <span className="Space-span">RESPONSABLE: {}</span>
      <span className="Space-span">
        MESA: {} PERSONAS: {} GENERAL
      </span>
      <span className="Space-span">FECHA REIMPRESIÓN {}</span>
      <span className="Space-span">FECHA VENTA {}</span>
      <br></br>
    </div>
  );
};
export default infoVariables;

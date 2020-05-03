import React from 'react';

const infoVariables = (props) => {
  //const infoVariable = ({ folio, fecha, mesa } = props);
  const pago = props.pago;
  return (
    <div className="Container-ticket">
      <br></br>
      <h4 className="Center">FOLIO TICKET #{pago.cambio} </h4>
      <p>RESPONSABLE: {}</p>
      <p>
        MESA: {} PERSONAS: {} GENERAL
      </p>
      <p> FECHA REIMPRESIÓN {}</p>
      <p>FECHA VENTA {}</p>
      <br></br>
    </div>
  );
};
export default infoVariables;

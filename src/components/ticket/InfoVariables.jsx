import React from 'react';

const infoVariables = (props) => {
  const info = props.infoVariable;
  return (
    <div className="Container-ticket">
      <br></br>
      <h4 className="Center">FOLIO TICKET #{info.folio} </h4>
      <p>RESPONSABLE: {info.nombreUsuario}</p>
      <p>
        MESA: {info.mesa} PERSONAS: {info.numPersonas} GENERAL
      </p>
      <p> FECHA REIMPRESIÓN {info.fechaReimpresion}</p>
      <p>FECHA VENTA {info.fecha}</p>
      <br></br>
    </div>
  );
};
export default infoVariables;

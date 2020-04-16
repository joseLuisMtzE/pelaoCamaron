import React from 'react';

const infoVariables=(props)=>{
    
    const info=props.infoVariable;
    return(
        <div className="Container-ticket">
        <h2>FOLIO TICKET #{info.folio} </h2>
        <br></br>
        RESPONSABLE: {info.nombreUsuario}
        <br/>CAJA #{info.numCaja} MESA: {info.mesa}  PERSONAS: {info.numPersonas}  GENERAL
        <br/>FECHA REIMPRESIÓN {info.fechaReimpresion}
        <br/>FECHA VENTA {info.fecha}        
        </div>
    );
}
export default infoVariables;
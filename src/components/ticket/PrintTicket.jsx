import React from 'react';
const PrintTicket = () => {
  return (
    <div id="Button-print" className="Container-ticket">
      <hr></hr>
      <span className="Space-span">¡GRACIAS POR SU VISITA!</span>
      <span className="Space-span">ESTE DOCUMENTO NO TIENE VALOR FISCAL</span>
      <button onClick={window.print}>imprimir</button>
      <br></br>
      <br></br>
    </div>
  );
};
export default PrintTicket;

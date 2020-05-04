import React from 'react';
const PrintTicket = () => {
  return (
    <div id="Button-print" className="Container-ticket">
      <button onClick={window.print}>imprimir</button>
    </div>
  );
};
export default PrintTicket;

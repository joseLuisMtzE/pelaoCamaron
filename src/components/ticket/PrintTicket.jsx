import React from 'react';
const PrintTicket = () => {
  return (
    <div className="Container-ticket">
      <button onClick={window.print}>imprimir</button>
    </div>
  );
};
export default PrintTicket;

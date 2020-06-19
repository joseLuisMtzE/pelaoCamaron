import React from 'react';

const ComandasTicket = ({ comanda }) => {
  return comanda.estado === 'Cerrada' ? (
    <tr key={comanda._id}>
      <td className="Tabla-tds-comandas">{comanda.cantidad}</td>

      <td className="Tabla-tds-comandas">{comanda.platillo.nombre}</td>
      <td className="Tabla-tds-comandas">
        ${comanda.platillo.precioConIva.toFixed(2)}
      </td>
      <td className="Tabla-tds-comandas">
        ${(comanda.cantidad * comanda.platillo.precioConIva).toFixed(2)}
      </td>
    </tr>
  ) : null;
};
export default ComandasTicket;

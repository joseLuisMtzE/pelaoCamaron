import React from 'react';

const TablaProductos = props => {
  const comandas = props.comandas;
  console.log('COMANDAS', comandas);
  return (
    <div className="Container-ticket">
      <hr></hr>
      <table id="tableProductos">
        <thead>
          <tr>
            <th>CANTIDAD</th>
            <th>PLATILLO</th>
            <th>PRECIO</th>
            <th>IMPORTE</th>
          </tr>
        </thead>

        <tbody>
          {comandas &&
            comandas.map(comanda => {
              return (
                <tr key={comanda.id}>
                  <td>{comanda.cantidad}</td>
                  <td>{comanda.nombre}</td>
                  <td>${comanda.precioUnitario}</td>
                  <td>${comanda.total}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;

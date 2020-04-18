import React, { useState } from 'react';

const MapExample = (props) => {
  const producto = props.TablaProductos;
  const producto2 = {
    cantidad: 25,
    platillo: 'Camarones',
    total: 45,
    importe: 600
  };

  console.log(producto);

  //const listItems = productos.map((producto) => <li>{producto}</li>);
  return (
    <div className="Container-ticket">
      <table>
        <thead>
          <tr>
            <th>CANTIDAD</th>
            <th>PLATILLO</th>
            <th>PRECIO</th>
            <th>IMPORTE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{producto}</td>
            <td>{}</td>
            <td>${}</td>
            <td>${}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MapExample;

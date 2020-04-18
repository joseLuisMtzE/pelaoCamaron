import React from 'react';

const TablaProductos = (props) => {
  const producto = props.TablaProductos;
  
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
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>${}</td>
            <td>${}</td>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>${}</td>
            <td>${}</td>
          </tr>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>${}</td>
            <td>${}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;

import React, { useEffect, useState } from 'react';

const TablaProductos = (props) => {
  const { comandas } = props;
  //console.log('Tabla productos', props);

  /* >tbody> y >tr> tipo pago
   {comandas &&
            comandas.map((comanda) => {
              return (
                <tr key={comanda._id}>
                  <td>{comanda.cantidad}</td>
                  <td>{}</td>
                  <td>${}</td>
                  <td>${}</td>
                </tr>
              );
            })}*/

  /*console.log(
    'comandas cantidd',
    comandas.comandas && props.comandas.comandas[0].cantidad
  );*/

  //console.log(comandas.comandas && props.comandas.comandas[0]);
  //console.log('comandas Pago', comandas.pago && props.comandas.pago);
  return (
    <div className="Container-ticket">
      <hr></hr>
      <table className="Table-ticket" id="tableProductos">
        <thead>
          <tr>
            <th>CANTIDAD</th>
            <th>PLATILLO</th>
            <th>PRECIO</th>
            <th>IMPORTE</th>
          </tr>
        </thead>

        <tbody>
          {comandas.comandas &&
            props.comandas.comandas.map((comanda) => {
              return (
                <tr key={comanda._id}>
                  <td>{comanda.cantidad}</td>
                  <td>{comanda.platillo}</td>
                  <td>${}</td>
                  <td>${}</td>
                </tr>
              );
            })}
          <tr className="datos-pago">
            <td colSpan={3}>TIPO DE PAGO</td>
            <td>{comandas.pago && props.comandas.pago.tipoPago}</td>
          </tr>
          <tr>
            <td colSpan={3}>% DE DESCUENTO</td>
            <td>{comandas.pago && props.comandas.pago.porcentajeDescuento}%</td>
          </tr>
          <tr>
            <td colSpan={3}>DESCUENTO</td>
            <td>${comandas.pago && props.comandas.pago.cantidadDescuento}</td>
          </tr>
          <tr>
            <td colSpan={3}>PAGO CON</td>
            <td>${comandas.pago && props.comandas.pago.pagoCon}</td>
          </tr>
          <tr>
            <td colSpan={3}>CAMBIO</td>
            <td>${comandas.pago && props.comandas.pago.cambio}</td>
          </tr>
          <tr>
            <td colSpan={3}>SUB-TOTAL</td>
            <td>${comandas.pago && props.comandas.pago.subTotal}</td>
          </tr>
          <tr>
            <td colSpan={3}>
              <h2>TOTAL: </h2>
            </td>
            <td>
              <h2>${comandas.pago && props.comandas.pago.precioTotal}</h2>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;

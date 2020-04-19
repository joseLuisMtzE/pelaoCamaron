import React from 'react';

const TablaProductos = (props) => {
  const comandas = props.comandas;
  const platillos = props.platillos;
  const pago = props.pago;

  console.log('COMANDAS', comandas);
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
          {comandas &&
            comandas.map((comanda) => {
              return (
                <tr key={comanda.id}>
                  <td>{comanda.cantidad}</td>
                  <td>{comanda.usuario}</td>
                  <td>${platillos.precioSinIva}</td>
                  <td>${platillos.precioConIva}</td>
                </tr>
              );
            })}
          <tr className="datos-pago">
            <td colSpan={3}>TIPO DE PAGO</td>
            <td>{pago.tipoPago[0]}</td>
          </tr>
          <tr>
            <td colSpan={3}>% DE DESCUENTO</td>
            <td>{pago.porcentajeDescuento}%</td>
          </tr>
          <tr>
            <td colSpan={3}>DESCUENTO</td>
            <td>${pago.cantidadDescuento}</td>
          </tr>
          <tr>
            <td colSpan={3}>PAGO CON</td>
            <td>${pago.pagoCon}</td>
          </tr>
          <tr>
            <td colSpan={3}>CAMBIO</td>
            <td>${pago.cambio}</td>
          </tr>
          <tr>
            <td colSpan={3}>SUB-TOTAL</td>
            <td>${pago.subTotal}</td>
          </tr>
          <tr>
            <td colSpan={3}>TOTAL</td>
            <td>${pago.precioTotal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;

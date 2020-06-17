import React from 'react';

const TablaProductos = props => {
  //Variables
  const { comandas } = props;
  let enProceso = false,
    subtotal = 0,
    iva = 16,
    impuestos = 0,
    precioTotal = 0,
    descuentoPorcentaje =
      comandas.comandas && comandas.pago.porcentajeDescuento,
    descuentoCantidad = 0,
    TOTAL = comandas.pago && comandas.pago.precioTotal;
  //TOTAL = TOTAL.toFixed(2);

  //Para el renderizado condicional
  if (comandas.estado === 'En proceso') {
    enProceso = true;
  } else {
    enProceso = false;
  }

  //Para obtejer subtotal, impuestos y precioTotal
  comandas.comandas &&
    props.comandas.comandas.forEach(comanda => {
      subtotal += comanda.cantidad * comanda.platillo.precioSinIva;
      impuestos +=
        ((comanda.platillo.precioSinIva * iva) / 100) * comanda.cantidad;
      precioTotal += comanda.cantidad * comanda.platillo.precioConIva;
    });
  //Calcular descuento
  descuentoCantidad = (precioTotal * descuentoPorcentaje) / 100;
  precioTotal = precioTotal - descuentoCantidad;
  precioTotal = precioTotal.toFixed(2);

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
            props.comandas.comandas.map(comanda => {
              return (
                <tr key={comanda._id}>
                  <td className="Tabla-tds-comandas">{comanda.cantidad}</td>

                  <td className="Tabla-tds-comandas">
                    {comanda.platillo.nombre}
                  </td>
                  <td className="Tabla-tds-comandas">
                    ${comanda.platillo.precioConIva.toFixed(2)}
                  </td>
                  <td className="Tabla-tds-comandas">
                    $
                    {(comanda.cantidad * comanda.platillo.precioConIva).toFixed(
                      2
                    )}
                  </td>
                </tr>
              );
            })}

          <tr className="datos-pago">
            <td colSpan={3}>% DE DESCUENTO</td>
            <td>{comandas.pago && comandas.pago.porcentajeDescuento}%</td>
          </tr>
          {!enProceso && (
            <>
              {comandas.length !== 0 ? (
                <tr>
                  <td colSpan={3}>DESCUENTO</td>
                  <td>
                    $
                    {(comandas.pago && comandas.pago.cantidadDescuento).toFixed(
                      2
                    )}
                  </td>
                </tr>
              ) : null}
              <tr>
                <td colSpan={3}>TIPO DE PAGO</td>
                <td>{comandas.pago && comandas.pago.tipoPago}</td>
              </tr>
              <tr>
                <td colSpan={3}>PAGO CON</td>
                <td>${comandas.pago && comandas.pago.pagoCon}</td>
              </tr>
              <tr>
                <td colSpan={3}>CAMBIO</td>
                <td>${comandas.pago && comandas.pago.cambio}</td>
              </tr>
              <tr>
                <td colSpan={3}>IMPUESTOS</td>
                <td>${impuestos.toFixed(2)}</td>
              </tr>
            </>
          )}
          <tr>
            <td colSpan={3}>SUB-TOTAL</td>
            <td>${comandas.pago && comandas.pago.subTotal}</td>
          </tr>

          {comandas.length !== 0 ? (
            <tr>
              <td colSpan={3}>
                <h2>TOTAL: </h2>
              </td>
              <td>
                <h2>${TOTAL.toFixed(2)}</h2>
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};
export default TablaProductos;

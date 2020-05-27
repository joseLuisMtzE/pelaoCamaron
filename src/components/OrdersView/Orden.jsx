import React from 'react';
import { Tag } from 'antd';
import { Modal } from 'antd';

function Orden({ orden, ordenes }) {
  var fecha = '';

  {
    ordenes.map &&
      ordenes.map((orden) => {
        fecha = new Date(orden.fecha);
      });
  }
  console.log(
    'ordenes',
    orden.comandas[0] &&
      orden.comandas[0].platillo &&
      orden.comandas[0].platillo.nombre
  );

  //Modal
  function info() {
    Modal.info({
      title: 'Detalles de la orden',
      content: (
        <div key={orden.id}>
          <h2 style={{ 'text-align': 'center' }}>IDs</h2>
          <p>ID: {orden._id}</p>
          <p>Orden: {orden.id}</p>
          <hr></hr>
          <h2 style={{ 'text-align': 'center' }}>Datos orden</h2>
          <p>Tipo orden: {orden.tipoOrden}</p>
          <p>Fecha: {orden.fecha}</p>
          <p>Estado: {orden.estado}</p>
          {orden.comandas.map &&
            orden.comandas.map.platillo &&
            orden.comandas.map.platillo((orden) => {
              return (
                <div>
                  <p>Nombre:{orden.nombre}</p>
                  <p>Precio con IVA: </p>
                </div>
              );
            })}
          <p>Mesa: {orden.mesa.noMesa}</p>
          <p>N personas: {orden.numPersonas}</p>

          <p>Descuento: {orden.pago.porcentajeDescuento}%</p>
          <p>Cantidad descuento: ${orden.pago.cantidadDescuento}</p>
          <p>Subtotal: ${orden.pago.subTotal}</p>
          <p>Total: ${orden.pago.precioTotal}</p>
          <p>Observaciones: {orden.observaciones}</p>
        </div>
      ),
      onOk() {},
    });
  }

  //Folio, idUsuario

  /*{`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.toLocaleString(
          'en-US',
          { hour: 'numeric', minute: 'numeric', hour12: true }
        )}`} */

  return (
    <tr className="tr-white" key={orden.id}>
      <td className="Tabla-tds-ordenes">{orden.id}</td>
      <td className="Tabla-tds-ordenes">{orden.tipoOrden}</td>
      <td className="Tabla-tds-ordenes">{orden.mesa.noMesa}</td>
      <td className="Tabla-tds-ordenes">{orden.fecha}</td>

      {orden.estado == 'Cerrada' ? (
        <td className="Tabla-tds-ordenes">
          <Tag color="warning">{orden.estado}</Tag>
        </td>
      ) : orden.estado == 'En proceso' ? (
        <td className="Tabla-tds-ordenes">
          <Tag color="processing">{orden.estado}</Tag>
        </td>
      ) : (
        <td className="Tabla-tds-ordenes">
          <Tag color="error">{orden.estado}</Tag>
        </td>
      )}
      <td className="Tabla-tds-ordenes">
        <Tag onClick={info} color="gray">
          ver detalles
        </Tag>
      </td>
    </tr>
  );
}
export default Orden;

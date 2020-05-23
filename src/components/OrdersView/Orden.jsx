import React from 'react';
import { Tag } from 'antd';

import { Modal } from 'antd';

function Orden({ orden, fecha }) {
  console.log('orden', orden.id);
  //Modal
  function info() {
    Modal.info({
      title: 'Detalles de la orden',
      content: (
        <div key={orden.id}>
          <p>ID: {orden.id}</p>
          <p>Mesa: {orden.mesa.noMesa}</p>
          <p>N personas: {orden.numPersonas}</p>
          <p>Fecha: {orden.fecha}</p>
          <p>Estado: {orden.estado}</p>
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

  return (
    <tr className="tr-white" key={orden.id}>
      <td className="Tabla-tds-ordenes">{orden.id}</td>
      <td className="Tabla-tds-ordenes">{orden.tipoOrden}</td>
      <td className="Tabla-tds-ordenes">{orden.mesa.noMesa}</td>
      <td className="Tabla-tds-ordenes">
        {' '}
        {`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.toLocaleString(
          'en-US',
          { hour: 'numeric', minute: 'numeric', hour12: true }
        )}`}
      </td>

      {orden.estado == 'Cerrada' ? (
        <td className="Tabla-tds-ordenes">
          <Tag color="warning">{orden.estado}</Tag>
          <br></br>
          <Tag onClick={info} color="gray">
            ver detalles
          </Tag>
        </td>
      ) : orden.estado == 'En proceso' ? (
        <td className="Tabla-tds-ordenes">
          <Tag color="processing">{orden.estado}</Tag>
          <br></br>
          <Tag onClick={info} color="gray">
            ver detalles
          </Tag>
        </td>
      ) : (
        <td className="Tabla-tds-ordenes">
          <Tag color="error">{orden.estado}</Tag>
          <br></br>
          <Tag onClick={info} color="gray">
            ver detalles
          </Tag>
        </td>
      )}
    </tr>
  );
}
export default Orden;

import React from 'react';
import { Tag } from 'antd';
import { Modal } from 'antd';
import Comanda from '../Comandas/Comanda';

function Orden({ orden }) {
  //Modal
  function info() {
    Modal.confirm({
      title: 'Detalles de la orden',
      content: (
        <div className="left" key={orden.id}>
          <h2 className="center">IDs</h2>
          <p>
            <b>Orden ID: </b> {orden._id}
          </p>
          <p>
            <b>Folio:</b> {orden.folio}
          </p>
          <hr></hr>
          <h2 className="center">Datos orden</h2>
          <p>
            <b>Tipo orden:</b> {orden.tipoOrden}
          </p>
          <p>
            <b>Fecha:</b> {orden.fecha}
          </p>
          <p>
            <b>Estado:</b> {orden.estado}
          </p>
          <p>
            <b>Mesa:</b> {orden.mesa.noMesa}
          </p>
          <p>
            <b>N personas:</b> {orden.numPersonas}
          </p>
          <hr></hr>
          <h2 className="center">Datos pago</h2>
          <p>
            <b>Subtotal: $</b>
            {orden.pago && orden.pago.subTotal}
          </p>
          <p>
            <b>Total: $</b>
            {orden.pago && orden.pago.precioTotal}
          </p>
          {orden.estado === 'Cerrada' && (
            <>
              <p>
                <b>Tipo pago:</b> {orden.pago && orden.pago.tipoPago}
              </p>
              <p>
                <b>Descuento:</b> {orden.pago && orden.pago.porcentajeDescuento}
                %
              </p>
              <p>
                <b>Cantidad descuento: $</b>
                {orden.pago && orden.pago.cantidadDescuento}
              </p>
              <p>
                <b>Pago con: $</b>
                {orden.pago && orden.pago.pagoCon}
              </p>
              <p>
                <b>Cambio: $</b>
                {orden.pago && orden.pago.cambio}
              </p>
            </>
          )}
          <hr></hr>
          <h2 className="center">Comandas</h2>
          <div className="center">
            {orden &&
              orden.comandas &&
              orden.comandas.map((comanda) => (
                <Comanda
                  comanda={comanda}
                  key={comanda.id}
                  noMesa={orden.mesa.noMesa}
                />
              ))}
          </div>
          {orden && orden.comandas && orden.comandas.length === 0 && (
            <p className="center">Esta orden no tiene comandas</p>
          )}
        </div>
      ),
      width: window.innerWidth * 0.7,

      onOk() {},
    });
  }

  return (
    <tr className="tr-white" key={orden.id}>
      <td>{orden.folio}</td>
      <td>{orden.tipoOrden}</td>
      <td>{orden.mesa.noMesa}</td>
      <td>{orden.fecha}</td>

      {orden.estado === 'Cerrada' ? (
        <td>
          <Tag color="success">{orden.estado}</Tag>
        </td>
      ) : orden.estado === 'En proceso' ? (
        <td>
          <Tag color="warning">{orden.estado}</Tag>
        </td>
      ) : (
        <td>
          <Tag color="error">{orden.estado}</Tag>
        </td>
      )}
      <td>
        <Tag onClick={info} color="gray">
          ver detalles
        </Tag>
      </td>
    </tr>
  );
}
export default Orden;

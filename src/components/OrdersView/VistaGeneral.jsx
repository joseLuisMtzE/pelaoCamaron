import React from 'react';
import Orden from './Orden';
import { Row, Col } from 'antd';

const VistaGeneral = (props) => {
  const { ordenes } = props;
  let renderizarTabla = true;

  if (ordenes.lenght === 0) {
    renderizarTabla = false;
  } else {
    renderizarTabla = true;
  }

  //console.log('ordenes', ordenes);

  /*idOrden, idMesa, N de personas
Fecha, Estado, TipoDescuento, Descuento 
Cantidad descuento, Subtotal, Total
Observaciones */

  return (
    <Row>
      <Col xs={24}>
        <div className="wrapper">
          {(renderizarTabla && (
            <Col md={20} offset={2}>
              <div className="Contenedor-Tabla-VistaGeneral-Ordenes">
                <table className="Tabla-VistaGeneral-Ordenes">
                  <thead>
                    <tr>
                      <th>Folio</th>
                      <th>Tipo</th>
                      <th>Mesa</th>
                      <th>Fecha</th>
                      <th>Estado</th>
                      <th>Detalles</th>
                    </tr>
                  </thead>

                  <tbody>
                    {ordenes.map &&
                      ordenes.map((orden) => (
                        <Orden orden={orden} ordenes={ordenes} />
                      ))}
                  </tbody>
                </table>
              </div>
            </Col>
          )) || (
            <div>
              <h1 className="Texto-condicional">
                Por ahora no hay ninguna orden.
              </h1>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default VistaGeneral;

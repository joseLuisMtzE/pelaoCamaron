import React from 'react';
import { Tag } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

const VistaGeneral = (props) => {
  const { ordenes } = props;
  let renderizarTabla = true;
  var fecha = '',
    estado = 0;
  console.log(ordenes);

  if (ordenes.lenght == 0) {
    renderizarTabla = false;
  } else {
    renderizarTabla = true;
  }
  {
    ordenes.map &&
      ordenes.map((orden) => {
        fecha = new Date(orden.fecha);
        if (orden.estado == 'En proceso') {
          estado = true;
        } else if (orden.estado == 'Cerrada') {
          estado = false;
        }
        console.log(estado, orden.estado);
      });
  }

  console.log(ordenes.estado);

  //Para el renderizado condicional

  /*<div>
        <h1 className="Texto-condicional">Por ahora no hay ninguna orden.</h1>
      </div> */
  return (
    <div>
      {(renderizarTabla && (
        <div>
          <div className="TablaOrdenes">
            <table className="Tabla-VistaGeneral-Ordenes" id="tableProductos">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo</th>
                  <th>Mesa</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                {ordenes.map &&
                  ordenes.map((orden) => {
                    return (
                      <tr key={ordenes}>
                        <td className="Tabla-tds-ordenes">{orden.id}</td>
                        <td className="Tabla-tds-ordenes">{orden.tipoOrden}</td>
                        <td className="Tabla-tds-ordenes">
                          {orden.mesa.noMesa}
                        </td>
                        <td className="Tabla-tds-ordenes">
                          {' '}
                          {`${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} ${fecha.toLocaleString(
                            'en-US',
                            { hour: 'numeric', minute: 'numeric', hour12: true }
                          )}`}
                        </td>
                        <td className="Tabla-tds-ordenes">{'estado'}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )) || (
        <div>
          <h1 className="Texto-condicional">Por ahora no hay ninguna orden.</h1>
        </div>
      )}
    </div>
  );
};
export default VistaGeneral;

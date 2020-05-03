import React, { useEffect, useState } from 'react';
import axios from 'axios';
import url from '../../constants/api';

const api = axios.create({
  baseURL: url.apiEndPoint,
});

const TablaProductos = (props) => {
  const comandas = props.comandas;
  //const pago = props.pago;

  const recuperarOrdenes = async () => {
    try {
      let response = await api.get('ordenes');
      let data = response.data.data[0].comandas;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const recuperarPlatillos = async () => {
    try {
      let response = await api.get('platillos');
      let dataPlatillos = response.data.data;
      return dataPlatillos;
    } catch (err) {
      console.log(err);
    }
  };

  const recuperarPago = async () => {
    try {
      let response = await api.post('ordenes/5e9cabc750dbea0017aa9e8f/ticket');
      let dataPago = response.data.data[0].pago;
      return dataPago;
    } catch (err) {
      console.log(err);
    }
  };

  const inicializarState = async () => {
    const stateOrdenes = await recuperarOrdenes();
    setOrdenes(stateOrdenes);
    console.log('ordenes', stateOrdenes);
    // const Stateinicial = JSON.parse(localStorage.getItem("categories")) || [];

    const statePlatillos = await recuperarPlatillos();
    setPlatillos(statePlatillos);
    console.log('platillos', statePlatillos);

    const statePago = await recuperarPago();
    setPago(statePago);
    console.log('pago', statePago);
  };
  useEffect(() => {
    inicializarState();
  }, []);

  const [ordenes, setOrdenes] = useState([]);
  const [platillos, setPlatillos] = useState([]);
  const [pago, setPago] = useState([]);

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
          {platillos &&
            platillos.map((platillo, index) => {
              return (
                <tr key={platillo._id}>
                  <td>{platillo.peso}</td>
                  <td>{platillo.nombre}</td>
                  <td>${platillo.precioSinIva}</td>
                  <td>${platillo.precioConIva}</td>
                </tr>
              );
            })}
          <tr className="datos-pago">
            <td colSpan={3}>TIPO DE PAGO</td>
            <td>{}</td>
          </tr>
          <tr>
            <td colSpan={3}>% DE DESCUENTO</td>
            <td>{}%</td>
          </tr>
          <tr>
            <td colSpan={3}>DESCUENTO</td>
            <td>${}</td>
          </tr>
          <tr>
            <td colSpan={3}>PAGO CON</td>
            <td>${}</td>
          </tr>
          <tr>
            <td colSpan={3}>CAMBIO</td>
            <td>${}</td>
          </tr>
          <tr>
            <td colSpan={3}>SUB-TOTAL</td>
            <td>${}</td>
          </tr>
          <tr>
            <td colSpan={3}>TOTAL</td>
            <td>${}</td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <br></br>
    </div>
  );
};
export default TablaProductos;

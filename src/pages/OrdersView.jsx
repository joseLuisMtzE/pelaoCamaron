import React, { useState, useEffect } from 'react';
import VistaGeneral from '../components/OrdersView/VistaGeneral';
import { makeRequest } from '../shared/ApiWrapper';

function OrdersView(props) {
  const [orden, setOrden] = useState({});
  //const id = props.match.params.id;
  //console.log(domicilio ? true : false);
  const recuperarOrdenes = async () => {
    try {
      let response = await makeRequest('GET', 'ordenes');
      let data = response.data.data;
      //console.log('data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const inicializarState = async () => {
    const orden = await recuperarOrdenes();
    setOrden(orden);
  };
  useEffect(() => {
    inicializarState();
  }, []);

  return (
    <>
      <VistaGeneral ordenes={orden} />
    </>
  );
}

export default OrdersView;

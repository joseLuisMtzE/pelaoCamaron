import React, { useState, useEffect } from 'react';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Domicilio from '../components/ticket/Domicilio';
import ConvNumLet from '../components/ticket/ConvNumLet';
import PrintTicket from '../components/ticket/PrintTicket';
import { makeRequest } from '../shared/ApiWrapper';

function Ticket(props) {
  const [orden, setOrden] = useState({});
  const id = props.match.params.id;
  //console.log(domicilio ? true : false);
  const recuperarOrdenes = async () => {
    try {
      let response = await makeRequest('GET', `ordenes/${id}`);
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
      <InfoVariables info={orden} />
      <Domicilio domicilio={orden.domicilio} />
      <TablaProductos comandas={orden} />
      <ConvNumLet pago={orden.pago} />
      <PrintTicket />
    </>
  );
}

export default Ticket;

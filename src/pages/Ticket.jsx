import React, { useState, useEffect, Fragment } from 'react';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Domicilio from '../components/ticket/Domicilio';
import ConvertidorNumLetras from '../components/ticket/ConvertidorNumLetras';
import PrintTicket from '../components/ticket/PrintTicket';
import { makeRequest } from '../shared/ApiWrapper';

function Ticket(props) {
  const [orden, setOrden] = useState([]);
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
    <Fragment>
      <InfoVariables info={orden} />
      <Domicilio domicilio={orden.domicilio} />
      <TablaProductos comandas={orden} />
      <ConvertidorNumLetras comandas={orden} />
      <PrintTicket />
    </Fragment>
  );
}

export default Ticket;

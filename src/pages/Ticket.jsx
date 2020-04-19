import React from 'react';
import InfoEstatica from '../components/ticket/InfoEstatica';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Pago from '../components/ticket/Pago';
import data from '../components/ticket/prueba.json';
import dataFinal from '../assets/jsonFinal.json';

function ticket() {
  const infoVariable = {
    folio: dataFinal.folio,
    responsable: dataFinal.comandas.usuario,
    mesa: dataFinal.mesa,
    personas: dataFinal.numPersonas,
    fecha: dataFinal.fecha,
  };
  return (
    <>
      <InfoEstatica />
      <InfoVariables infoVariable={data.infoVariable} />
      <TablaProductos
        comandas={dataFinal.comandas}
        platillos={dataFinal.platillos}
        pago={dataFinal.pago}
      />
      <Pago Pago={dataFinal.pago} />
    </>
  );
}

export default ticket;

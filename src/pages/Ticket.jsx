import React from 'react';
import InfoEstatica from '../components/ticket/InfoEstatica';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Domicilio from '../components/ticket/Domicilio';
import ConvNumLet from '../components/ticket/ConvNumLet';
import PrintTicket from '../components/ticket/PrintTicket';
import dataFinal from '../assets/jsonFinal.json';

function ticket() {
  return (
    <>
      <InfoEstatica />
      <InfoVariables pago={dataFinal.pago} />
      <Domicilio domicilio={dataFinal.domicilio} RendDomicilio={false} />
      <TablaProductos
        comandas={dataFinal.comandas}
        platillos={dataFinal.platillos}
        pago={dataFinal.pago}
      />
      <ConvNumLet pago={dataFinal.pago} />
      <PrintTicket />
    </>
  );
}

export default ticket;

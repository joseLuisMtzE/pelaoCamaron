import React from 'react';
import MapExample from '../components/ticket/mapExample';
import InfoEstatica from '../components/ticket/InfoEstatica';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Pago from '../components/ticket/Pago';
import data from '../components/ticket/prueba.json';

function App() {
  return (
    <>
      <InfoEstatica />
      <InfoVariables infoVariable={data.InfoVariable} />
      <TablaProductos comandas={data.comandas} />
      <Pago Pago={data.Pago} />
      <MapExample mapExample={data.TablaProductos} />
    </>
  );
}

export default App;

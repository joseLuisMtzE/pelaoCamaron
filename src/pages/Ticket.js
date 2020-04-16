import React from 'react';
import InfoEstatica from '../components/ticket/InfoEstatica';
import InfoVariables from '../components/ticket/InfoVariables';
import TablaProductos from '../components/ticket/TablaProductos';
import Pago from '../components/ticket/Pago';
import ConversorNumLetras from '../components/ticket/ConversorNumLetras';
import data from '../components/ticket/prueba.json';

function App() {
  return (
    
      <>        
        <InfoEstatica />
        <InfoVariables infoVariable={data.InfoVariable}/>
        <TablaProductos TablaProductos={data.TablaProductos}/>
        <Pago Pago={data.Pago}/>    
        <ConversorNumLetras Pago={data.Pago}/>  
      </>
    
    
  );
}

export default App;

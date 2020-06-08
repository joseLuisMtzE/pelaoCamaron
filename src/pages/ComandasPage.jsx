import React, { useState, useEffect } from 'react';
import { makeRequest } from '../shared/ApiWrapper';
import Comandas from '../components/Comandas/Comandas';
import ComandasTodas from '../components/Comandas/ComandasTodas';

function ComandasPage(props) {
  const [comandas, setComanda] = useState({});
  const [areas, setArea] = useState([]);
  //const id = props.match.params.id;
  //console.log(domicilio ? true : false);
  const obtenerComandas = async () => {
    try {
      let response = await makeRequest('GET', 'comandas?estado=En proceso');
      let data = response.data.data;
      //console.log('data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //Obtener Areas
  const obtenerAreas = async () => {
    try {
      let response = await makeRequest('GET', 'areas');
      let data = response.data.data;
      console.log('data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const inicializarState = async () => {
    const comandas = await obtenerComandas();
    setComanda(comandas);
    const areas = await obtenerAreas();
    setArea(areas);
  };

  useEffect(() => {
    inicializarState();
  }, []);

  // useEffect(() => {
  //   socket.on('comandas', comandas => {
  //     setComanda(comandas);
  //     console.log(comandas);
  //     console.log(comandas);
  //     console.log(comandas.length);
  //   });
  // }, []);
  //console.log('areas', areas);

  // <VistaGeneral comandaes={comanda} />
  //   <Comandas comandas={comandas} areas={areas} />
  //setRoom={setRoom}
  return (
    <>
      {verTodas ? (
        <ComandasTodas areas={areas} />
      ) : (
        <Comandas
          comandas={comandas}
          areas={areas}
          setVerTodas={setVerTodas}
          room={room}
        />
      )}
    </>
  );
}

export default ComandasPage;

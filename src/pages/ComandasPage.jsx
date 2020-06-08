import React, { useState, useEffect } from 'react';
import { makeRequest } from '../shared/ApiWrapper';
import Comandas from '../components/Comandas/Comandas';
import ComandasTodas from '../components/Comandas/ComandasTodas';

function ComandasPage(props) {
  const [comandas, setComanda] = useState({});

  const [areas, setArea] = useState([]);

  const [verTodas, setVerTodas] = useState(false);

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
      //console.log('data', data);
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

  //console.log('areas', areas);

  return (
    <>
      {verTodas ? (
        <ComandasTodas areas={areas} />
      ) : (
        <Comandas comandas={comandas} areas={areas} />
      )}
    </>
  );
}

export default ComandasPage;

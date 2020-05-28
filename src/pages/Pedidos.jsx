import React, { useState, useEffect } from 'react';
import { makeRequest } from '../shared/ApiWrapper';
import Comandas from '../components/Pedidos/Comandas';
import '../styles/components/Pedidos.css';

function Pedidos(props) {
  const [comandas, setComanda] = useState({});
  const [areas, setArea] = useState({});
  //const id = props.match.params.id;
  //console.log(domicilio ? true : false);
  const obtenerComandas = async () => {
    try {
      let response = await makeRequest('GET', 'comandas');
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

  // <VistaGeneral comandaes={comanda} />

  return (
    <>
      <Comandas comandas={comandas} areas={areas} />
    </>
  );
}

export default Pedidos;

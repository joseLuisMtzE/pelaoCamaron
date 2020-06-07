import React, { useState, useEffect, Fragment } from 'react';
import { makeRequest } from '../shared/ApiWrapper';
import Comandas from '../components/Comandas/Comandas';
import ComandasTodas from '../components/Comandas/ComandasTodas';

import io from 'socket.io-client';

const socket = io('https://dev-socketio.herokuapp.com');

function ComandasPage(props) {
  const [comandas, setComanda] = useState([]);
  const [verTodas, setVerTodas] = useState(false);
  const [areas, setArea] = useState([]);
  const room = '5ed8686443cd831fb406472e';

  const socketJoinRoom = () => {
    socket.emit('joinRoom', room);
    //Todas las comandas
    socket.on('comandas', comandas => {
      console.log(comandas);
      console.log(comandas.length);
      comandas.forEach(comanda => {
        console.log(JSON.stringify(comanda));
      });
    });

    //Nueva comanda
    socket.on('nuevaComanda', comanda => {
      console.log('Nueva comanda creada!!');
      console.log(comanda);
      // outputMessage(JSON.stringify(comanda));
    });
  };

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
    socketJoinRoom();
    console.log('SAdfsaf');
    return function cleanup() {
      socket.disconnect();
      console.log('UNMOUNT OF PEDIDOS');
    };
  }, []);

  // useEffect(() => {
  //   socket.on('comandas', comandas => {
  //     setComanda(comandas);
  //     console.log(comandas);
  //     console.log(comandas);
  //     console.log(comandas.length);
  //   });
  // }, []);

  // <VistaGeneral comandaes={comanda} />
  //   <Comandas comandas={comandas} areas={areas} />
  return (
    <>
      {verTodas ? (
        <ComandasTodas areas={areas} />
      ) : (
        <Comandas comandas={comandas} areas={areas} setVerTodas={setVerTodas} />
      )}
    </>
  );
}

export default ComandasPage;

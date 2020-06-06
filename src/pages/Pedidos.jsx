import React, { useState, useEffect, Fragment } from 'react';
import { makeRequest } from '../shared/ApiWrapper';
import Comandas from '../components/Pedidos/Comandas';
import '../styles/components/Pedidos.css';
import io from "socket.io-client";

const socket= io('https://dev-socketio.herokuapp.com/api/v1/')


function Pedidos(props) {
  const [comandas, setComanda] = useState({});
  const [areas, setArea] = useState({});
  const room ="5ed8686443cd831fb406472e";

  const evento = () => {
    socket.emit("joinRoom",room);
  }


  //const id = props.match.params.id;
  //console.log(domicilio ? true : false);
  /*const obtenerComandas = async () => {
    try {
      let response = await makeRequest('GET', 'comandas');
      let data = response.data.data;
      //console.log('data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
*/


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
   // const comandas = await obtenerComandas();
    //setComanda(comandas);
    const areas = await obtenerAreas();
    setArea(areas);
  };
  useEffect(() => {
    inicializarState();
    evento();
  }, []);

  useEffect(()=>{
    socket.on("comandas", comandas =>{
      setComanda(comandas);
      console.log(comandas);
      console.log(comandas);
      console.log(comandas.length);
    })
  }, []);

  // <VistaGeneral comandaes={comanda} />
 //   <Comandas comandas={comandas} areas={areas} />
  return (
    <Fragment>
    <Comandas comandas={comandas} areas={areas} />
    </Fragment>
  );
}

export default Pedidos;

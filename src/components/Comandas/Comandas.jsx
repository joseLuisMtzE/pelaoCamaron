import React, { useState, useEffect } from 'react';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';

import io from 'socket.io-client';

const socket = io('http://127.0.0.1:3001');

const Comandas = ({ comandas, areas, setVerTodas }) => {
  const [comandasFiltradas, setComandasFiltradas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  let valorOpcion = '',
    labelOpcion = '';
  let options = [];
  const room = '5ed8686443cd831fb406472e';

  const socketJoinRoom = async room => {
    console.log('Joined called');
    socket.emit('joinRoom', room);
    //Todas las comandas
    socket.on('joinedToRoom', response => {
      console.log('Conectadado correctamente, datos recibidos: ', response);
    });

    //Escucar cuando se crea una nueva comanda
    socket.on('nuevaComanda', comanda => {
      console.log('Nueva comanda creada!!', comanda);
    });
  };

  const socketLeaveRoom = async room => {
    console.log('Leave called');
    socket.emit('leaveRoom', room);
    //Todas las comandas
    socket.on('leavedRoom', response => {
      console.log('Desconectado correctamente, datos recibidos: ', response);
    });
  };

  if (areas.length !== 0) {
    options = areas.map(area => ({
      value: area._id,
      label: area.nombre
    }));
  }

  function onChange(value, selectedOptions) {
    labelOpcion = selectedOptions[0].label;
    valorOpcion = value[0];
  }

  function handleModalOk() {
    // console.log('Se cambió el área a: ', labelOpcion);
    setSelectedArea(valorOpcion);
    let resultado = [...comandas].filter(
      comanda => comanda.platillo.area.nombre === labelOpcion
    );
    // console.log('resultado de comandas filtradas', resultado);
    setComandasFiltradas(resultado);
    //console.log('comandas Filtradas', comandasFiltradas);
  }

  //Modal
  function info() {
    Modal.info({
      title: 'Cambiar área',
      content: (
        <div>
          <br />
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Area..."
          />
        </div>
      ),
      onOk() {
        handleModalOk();
      }
    });
  }

  useEffect(() => {
    selectedArea && socketJoinRoom(selectedArea);
    console.log('SELECTED AREA HA CAMBIADO, ahora es:', selectedArea);
    return () => {
      console.log('PREV IS: ', selectedArea);
      selectedArea && socketLeaveRoom(selectedArea);
    };
  }, [selectedArea]);

  useEffect(() => {
    // console.log('MOUNTING OF COMANDAS COMPONENT');

    return function cleanup() {
      socket.disconnect();
      // console.log('UNMOUNT OF COMANDAS COMPONENT');
    };
  }, []);

  return (
    <div className="wrapper-comandas">
      <h1 className="tituloPedidos">COMANDAS</h1>
      <div className="center">
        <h4>Elige un área de cocina para que puedas ver las comandas</h4>
        <Button type="primary" icon={<FilterFilled />} default onClick={info}>
          Cambiar área
        </Button>
      </div>
      <div className="scrolling-wrapper">
        {comandasFiltradas &&
          comandasFiltradas.map(comanda => (
            <div className="card-comanda" key={comanda._id}>
              <div className="card-containr-comanda">
                <Comanda comanda={comanda} onChange={onChange} />
              </div>
            </div>
          ))}
      </div>
      <div className="botonVerMas">
        <Button
          style={{
            textAlign: 'center',
            width: 120,
            height: 50,
            boxShadow: '0px 3px 5px 0px grey'
          }}
          id="Button-print"
          type="primary"
          htmlType="button"
          size="large"
          onClick={() => setVerTodas(true)}
        >
          Ver todas
        </Button>
      </div>
    </div>
  );
};
export default Comandas;

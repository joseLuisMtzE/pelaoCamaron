import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';
import { Link } from 'react-router-dom';

import io from 'socket.io-client';

import notificationSound from '../../assets/newComandaSound.mp3';

const socket = io('http://127.0.0.1:3001');

//Audio for notification when nueva comanda gets created

const Comandas = ({ comandas, areas, setVerTodas }) => {
  const [comandasFiltradas, setComandasFiltradas] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [labelSelectedArea, setLabelSelectedArea] = useState('');

  const scrollingWrapper = useRef();

  let valorOpcion = '',
    labelOpcion = '',
    options = [],
    timeoutId;

  //Get the audio file
  let newComandaSound = new Audio(notificationSound);

  const socketJoinRoom = async room => {
    console.log('Joined called with room: ', room);
    socket.emit('joinRoom', room);
    //Todas las comandas
    socket.on('joinedToRoom', response => {
      console.log('Conectadado correctamente, datos recibidos: ', response);
    });

    //Escucar cuando se crea una nueva comanda
    socket.on('nuevaComanda', comanda => {
      let divScrollingWrapper = scrollingWrapper.current;

      console.log('Nueva comanda creada!!', comanda);

      //update the list of comandas
      setComandasFiltradas(comandas => [...comandas, comanda]);
      //scroll to the last item in comandas list
      divScrollingWrapper.scrollTo(divScrollingWrapper.scrollWidth, 0);
      //Add blink effect to the last children of comandas
      divScrollingWrapper.children[
        divScrollingWrapper.children.length - 1
      ].classList.add('blink');
      //once finished, remove the classs
      timeoutId = setTimeout(() => {
        divScrollingWrapper.children[
          divScrollingWrapper.children.length - 1
        ].classList.remove('blink');
      }, 10000);

      //Play a sound when a new comandas gets created
      newComandaSound.play();
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

  useEffect(() => {
    selectedArea && socketJoinRoom(selectedArea);
    console.log('SELECTED AREA HA CAMBIADO, ahora es:', selectedArea);
    return () => {
      console.log('PREV IS: ', selectedArea);
      selectedArea && socketLeaveRoom(selectedArea);
    };
  }, [selectedArea]);

  useEffect(() => {
    console.log('MOUNTING OF COMANDAS COMPONENT');
    return function cleanup() {
      socket.disconnect();
      clearInterval(timeoutId);
      console.log('UNMOUNT OF COMANDAS COMPONENT');
    };
  }, []);

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
    setLabelSelectedArea(labelOpcion);
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
  //console.log(areas);

  return (
    <div className="wrapper-comandas">
      <div>
        <h1 className="tituloPedidos">COMANDAS</h1>
        <div className="center">
          <h4>Elige un área de cocina para que puedas ver las comandas</h4>
          <Button type="primary" icon={<FilterFilled />} default onClick={info}>
            Cambiar área
          </Button>
        </div>
        {labelSelectedArea && (
          <div className="center">
            <h4 className="bold">Area seleccionada:</h4>
            <span className="normal-size">{labelSelectedArea}</span>
          </div>
        )}
        <div className="scrolling-wrapper" ref={scrollingWrapper}>
          {comandasFiltradas &&
            comandasFiltradas.map(comanda => (
              <Comanda comanda={comanda} onChange={onChange} />
            ))}
        </div>
        <div className="botonVerMas">
          <Link to="/comandas/todas">
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
            >
              Ver todas
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Comandas;

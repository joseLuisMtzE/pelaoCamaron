import React, { useState, useEffect } from 'react';
import { makeRequest } from '../../shared/ApiWrapper';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';

const ComandasTodas = ({ areas }) => {
  const [comandasTodas, setComandasTodas] = useState([]);
  let valorOpcion = '';
  let valorOpcionEstado = '';
  let options = [];
  let optionsEstado = [];
  const [comandasFiltradas, setComandasFiltradas] = useState([]);

  /****** OBTENER COMANDAS ******/
  //Obtener todas las comandas
  const obtenerComandasTodas = async () => {
    try {
      let response = await makeRequest('GET', 'comandas');
      let data = response.data.data;
      //console.log('data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  //Inicializar state
  const inicializarState = async () => {
    const comandasTodas = await obtenerComandasTodas();
    setComandasTodas(comandasTodas);
  };
  useEffect(() => {
    inicializarState();
  }, []);
  //console.log('areas', areas);

  /******FILTRAR POR ÁREA ******/

  if (areas.length !== 0) {
    options = areas.map((area) => ({
      value: area.nombre,
      label: area.nombre,
    }));
  }
  //console.log(options);

  function onChange(value) {
    valorOpcion = value[0];
    //console.log(value);
  }

  function handleModalOk() {
    console.log('ok', valorOpcion);
    let resultado = [...comandasTodas].filter(
      (comanda) => comanda.platillo.area.nombre === valorOpcion
    );
    console.log('resultado de comandas filtradas', resultado);
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
      },
    });
  }

  /******FILTRAR POR ESTADO ******/
  optionsEstado = [
    {
      value: 'En proceso',
      label: 'En proceso',
    },
    {
      value: 'Cerrada',
      label: 'Cerrada',
    },
    {
      value: 'Cancelada',
      label: 'Cancelada',
    },
  ];

  function onChangeEstado(value) {
    valorOpcionEstado = value[0];
    //console.log(value);
  }

  function handleModalOkEstado() {
    console.log('ok', valorOpcionEstado);
    let resultadoEstado = [...comandasTodas].filter(
      (comanda) => comanda.estado === valorOpcionEstado
    );
    console.log('resultadoEstado de comandas filtradas', resultadoEstado);
    setComandasFiltradas(resultadoEstado);
    //console.log('comandas Filtradas', comandasFiltradas);
  }

  function infoEstado() {
    Modal.info({
      title: 'Cambiar por estado',
      content: (
        <div>
          <br />
          <Cascader
            options={optionsEstado}
            onChange={onChangeEstado}
            placeholder="Estado..."
          />
        </div>
      ),
      onOk() {
        handleModalOkEstado();
      },
    });
  }

  return (
    <div className="wrapper-comandas">
      <h1 className="tituloPedidos"> TODAS LAS COMANDAS </h1>
      <div className="center">
        <Button type="primary" icon={<FilterFilled />} default onClick={info}>
          Cambiar área
        </Button>
      </div>
      <br></br>
      <div className="center">
        <Button
          type="primary"
          icon={<FilterFilled />}
          default
          onClick={infoEstado}
        >
          Cambiar estado
        </Button>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-wrapper">
          {comandasFiltradas &&
            comandasFiltradas.map((comanda) => (
              <div className="card-comanda">
                <div className="card-containr-comanda">
                  <Comanda comanda={comanda} onChange={onChange} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ComandasTodas;

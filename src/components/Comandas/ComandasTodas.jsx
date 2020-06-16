import React, { useState, useEffect } from 'react';
import { makeRequest } from '../../shared/ApiWrapper';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';

const ComandasTodas = () => {
  const [comandasTodas, setComandasTodas] = useState([]);
  const [areas, setArea] = useState([]);
  const [mesas, setMesas] = useState([]);
  const [comandasFiltradas, setComandasFiltradas] = useState([]);
  let valorOpcion = '';
  let valorOpcionEstado = '';
  let valorOpcionMesas = '';
  let options = [];
  let optionsEstado = [];
  let optionsMesas = [];

  /****** OBTENER COMANDAS ******/
  //Obtener todas las comandas
  const obtenerComandasTodas = async () => {
    try {
      let response = await makeRequest('GET', 'comandas?limit=1000000');
      let data = response.data.data;
      console.log('data', data);
      return data;
    } catch (err) {
      //console.log(err);
    }
  };
  /***** OBTENER TODAS LAS AREAS ******/
  //Obtener Areas
  const obtenerAreas = async () => {
    try {
      let response = await makeRequest('GET', 'areas');
      let data = response.data.data;
      ////console.log('data', data);
      return data;
    } catch (err) {
      //console.log(err);
    }
  };
  /*OBTENER MESAS */
  const obtenerMesas = async () => {
    try {
      let response = await makeRequest('GET', 'mesas?isActive=true');
      let data = response.data.data;
      ////console.log('data', data);
      return data;
    } catch (err) {
      //console.log(err);
    }
  };
  //Inicializar state
  const inicializarState = async () => {
    const comandasTodas = await obtenerComandasTodas();
    setComandasTodas(comandasTodas);
    const areas = await obtenerAreas();
    setArea(areas);
    const mesas = await obtenerMesas();
    setMesas(mesas);
  };
  useEffect(() => {
    inicializarState();
  }, []);
  //console.log('mesas', mesas);

  /******FILTRAR POR ÁREA ******/
  if (areas.length !== 0) {
    options = areas.map((area) => ({
      value: area.nombre,
      label: area.nombre,
    }));
  }
  ////console.log(options);
  function onChange(value) {
    valorOpcion = value[0];
    ////console.log(value);
  }

  function handleModalOk() {
    //console.log('ok', valorOpcion);
    let resultado = [...comandasTodas].filter(
      (comanda) => comanda.platillo.area.nombre === valorOpcion
    );
    //console.log('resultado de comandas filtradas', resultado);
    setComandasFiltradas(resultado);
    ////console.log('comandas Filtradas', comandasFiltradas);
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
    ////console.log(value);
  }

  function handleModalOkEstado() {
    //console.log('ok', valorOpcionEstado);
    let resultadoEstado = [...comandasTodas].filter(
      (comanda) => comanda.estado === valorOpcionEstado
    );
    //console.log('resultadoEstado de comandas filtradas', resultadoEstado);
    setComandasFiltradas(resultadoEstado);
    ////console.log('comandas Filtradas', comandasFiltradas);
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

  /******FILTRADO POR MESA ******/
  if (mesas.length !== 0) {
    optionsMesas = mesas.map((mesa) => ({
      value: mesa.noMesa,
      label: mesa.noMesa,
    }));
  }
  function onChangeMesas(value) {
    valorOpcionMesas = value[0];
    ////console.log(value);
  }
  function handleModalOkMesas() {
    //console.log('ok', valorOpcionMesas);
    let resultadoMesas = [...comandasTodas].filter(
      (comanda) => comanda.orden.mesa.noMesa === valorOpcionMesas
    );
    //console.log('resultadoEstado de comandas filtradas', resultadoEstado);
    setComandasFiltradas(resultadoMesas);
    ////console.log('comandas Filtradas', comandasFiltradas);*/
  }
  function infoMesas() {
    Modal.info({
      title: 'Cambiar por Mesas',
      content: (
        <div>
          <br />
          <Cascader
            options={optionsMesas}
            onChange={onChangeMesas}
            placeholder="Mesas..."
          />
        </div>
      ),
      onOk() {
        handleModalOkMesas();
      },
    });
  }

  return (
    <div className="wrapper-comandas">
      <h1 className="tituloPedidos"> TODAS LAS COMANDAS </h1>
      <div className="botonesFiltrado">
        <Button type="primary" icon={<FilterFilled />} default onClick={info}>
          Cambiar área
        </Button>
      </div>
      <div className="botonesFiltrado">
        <Button
          type="primary"
          icon={<FilterFilled />}
          default
          onClick={infoEstado}
        >
          Cambiar estado
        </Button>
      </div>
      <div className="botonesFiltrado">
        <Button
          type="primary"
          icon={<FilterFilled />}
          default
          onClick={infoMesas}
        >
          Cambiar mesas
        </Button>
      </div>
      <div className="scrolling-wrapper">
        <div className="scrolling-wrapper">
          {comandasFiltradas &&
            comandasFiltradas.map((comanda) => (
              <Comanda comanda={comanda} mostrar={true} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ComandasTodas;

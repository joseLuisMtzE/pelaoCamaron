import React, { useState } from 'react';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';

const Comandas = ({ comandas, areas, setVerTodas }) => {
  let valorOpcion = '';
  let options = [];
  console.log('Comandas', comandas);

  const [comandasFiltradas, setComandasFiltradas] = useState([]);

  /*useEffect(() => {
    //console.log('se actualizo areas');
    //opciones estado
    if (areas.length !== 0) {
      options = areas.map((area) => ({
        value: area.nombre,
        label: area.nombre,
      }));
    }
    //console.log(options);
  }, [areas]); */

  //console.log('se actualizo areas');
  //opciones estado
  // console.log(areas);
  if (areas.length !== 0) {
    options = areas.map(area => ({
      value: area.nombre,
      label: area.nombre
    }));
  }
  //console.log(options);

  function onChange(value) {
    valorOpcion = value[0];
    //console.log(value);
  }

  function handleModalOk() {
    console.log('ok', valorOpcion);
    let resultado = [...comandas].filter(
      comanda => comanda.platillo.area.nombre === valorOpcion
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
      }
    });
  }

  //console.log(areas);

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
            <div className="card-comanda">
              <div className="card-containr-comanda">
                <Comanda comanda={comanda} onChange={onChange} />
              </div>
            </div>
          ))}
      </div>
      <div className="botonVerMas">
        <Button
          style={{
            'text-align': 'center',
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

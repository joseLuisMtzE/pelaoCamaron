import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Cascader } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';
import { getRol } from '../../shared/ApiWrapper';

const Comandas = ({ comandas, areas, setVerTodas,room }) => {
  let valorOpcion = '';
  let options = [];
  let id='';
  //console.log(comandas);

  const [comandasFiltradas, setComandasFiltradas] = useState([]);

  //console.log('se actualizo areas');
  //opciones estado
  // console.log(areas);
  if (areas.length !== 0) {
    options = areas.map(area => ({
      value: area.nombre,
      label: area.nombre,
      id: area._id
    }));
  }
  //console.log(options);

  function onChange(value,area) {
    valorOpcion = value[0];
    id=area[0].id;
    //console.log(value);
  }

  function handleModalOk() {
    console.log('ok', valorOpcion);
    //setRoom(id);
    room=id;
    console.log('room',room);
    console.log('id',id);
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
      {getRol() === 'Dueño' ||
      getRol() === 'Mesero' ||
      getRol() === 'Cocina' ||
      getRol() === 'Caja' ? (
        <div>
          <h1 className="tituloPedidos">COMANDAS</h1>
          <div className="center">
            <h4>Elige un área de cocina para que puedas ver las comandas</h4>
            <Button
              type="primary"
              icon={<FilterFilled />}
              default
              onClick={info}
            >
              Cambiar área
            </Button>
          </div>
          <div className="scrolling-wrapper">
            {comandasFiltradas &&
              comandasFiltradas.map((comanda) => (
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
                  boxShadow: '0px 3px 5px 0px grey',
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
      ) : null}
    </div>
  );
};
export default Comandas;

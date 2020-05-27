import React from 'react';
import { Button } from 'antd';
import { Modal } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';
import { Cascader } from 'antd';

const Comandas = ({ comandas, areas }) => {
  var estadoCerrada = false;
  console.log(areas[0] && areas[0].nombre);

  //opciones estado

  const options = [
    areas.map &&
      areas.map((area) => ({
        value: area.nombre,
        label: area.nombre,
      })),
  ];

  function onChange(value) {
    console.log(value);
    if (value == 'En proceso') {
      estadoCerrada = false;
    } else {
      estadoCerrada = true;
    }
  }

  //Modal
  function info() {
    Modal.info({
      title: 'Filtrar por:',
      content: (
        <div>
          <p>Area:</p>
          <br />
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Area..."
          />
        </div>
      ),
      onOk() {},
    });
  }

  /*{comandas.map &&
          comandas.map((comanda) => (
            <div className="card-comanda">
              <div className="card-containr-comanda">
                {' '}
                <Comanda comanda={comanda} onChange={onChange} />
              </div>
            </div>
          ))} */

  return (
    <div className="wrapper">
      <h1 className="tituloPedidos">
        COMANDAS{' '}
        <Button
          type="link"
          shape="circle"
          icon={<FilterFilled />}
          default
          onClick={info}
        ></Button>
      </h1>
      <div className="scrolling-wrapper">
        {comandas.map &&
          comandas.map((comanda) => (
            <div className="card-comanda">
              {comanda.estado == 'En proceso' ? (
                <div className="card-containr-comanda">
                  {' '}
                  <Comanda comanda={comanda} onChange={onChange} />
                </div>
              ) : null}
            </div>
          ))}
      </div>
      <div className="botonCentrar">
        <Button
          style={{
            'text-align': 'center',
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
      </div>
    </div>
  );
};
export default Comandas;

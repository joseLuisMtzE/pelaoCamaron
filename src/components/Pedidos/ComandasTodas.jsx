import React from 'react';
import { Button } from 'antd';
import { Modal } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Comanda from './Comanda';
import { Cascader } from 'antd';

const Comandas = (props) => {
  const { comandas } = props;
  var estadoCerrada = false;

  //opciones estado
  const options = [
    {
      value: 'En proceso',
      label: 'En proceso',
    },
    {
      value: 'Cerrada',
      label: 'Cerrada',
    },
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
          <p>Estado:</p>
          <br />
          <Cascader
            options={options}
            onChange={onChange}
            placeholder="Estado..."
          />
        </div>
      ),
      onOk() {},
    });
  }
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
              <div className="card-containr-comanda">
                {' '}
                <Comanda comanda={comanda} onChange={onChange} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Comandas;

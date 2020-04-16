import React, { useState } from 'react';
import { Typography, Input, Cascader, Card, Button, Select } from 'antd';
//import '../styles/components/HomeDelivery.css';

function FormHomeDelivery() {
  const LSKEY = 'address-home-delivery';
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    street: '',
    outdoorN: '',
    interiorN: '',
    suburb: '',
    reference: '',
    payment: '',
  });
  const [list, setList] = useState([]);

  const options = [
    {
      value: 'cash',
      label: 'Efectivo',
      name: 'payment',
    },
    {
      value: 'card',
      label: 'Tarjeta',
      name: 'payment',
    },
  ];

  const handleInputChange = (event,value) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      payment:value
    });
  };

  /*const onChange=(value)=> {
    console.log(typeof(value[0]))
    if(value[0]){
        setFormData({
            payment:value[0]
        })
    }
}*/

  const setHomeDelivery = () => {
    const listAddress = list;
    listAddress.unshift(formData);
    setList([...listAddress]);
    localStorage.setItem(LSKEY, JSON.stringify(list));
  };

  const { Option } = Select;

  function handleChange(value) {
    console.log(typeof(value));
  }

  return (
    <>
      <div style={{ backgroundColor: '#dc7171' }}>
        <div className="header-home-delivery">
          <div className="header-img"></div>
          <div>
            <Button className="margin-10 buttons" type="primary" size={'small'}>
              atras
            </Button>
          </div>
          <div className="centerContent">
            <h1 level={2} className="white-text-color">
              <strong>Pedido a domicilio</strong>
            </h1>
          </div>
        </div>
        <div className="margin-10">
          <form action="" className="form-home-delivery">
            <Input
              className="inputs"
              name="name"
              size="large"
              placeholder="Nombre"
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="phone"
              size="large"
              placeholder="Teléfono"
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="street"
              size="large"
              placeholder="Calle"
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="interiorN"
              size="large"
              placeholder="Número Ext."
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="outdoorN"
              size="large"
              placeholder="Número Int."
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="suburb"
              size="large"
              placeholder="Colonia"
              onChange={handleInputChange}
            />
            <Input
              className="inputs"
              name="reference"
              size="large"
              placeholder="Referencia"
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className="centerContent" style={{ padding: '1px' }}>
          <h1 className="white-text-color"> Total: 0.00$ </h1>
        </div>
      </div>
      <div className="centerContent footer-home-delivery">
        <Cascader
          id="cascaderHomeDelivery"
          className="margin-10"
          options={options}
          value={formData.payment}
          onChange={(e) => {
            setFormData(e.target.value);
          }}
          placeholder="Pagará con..."
        />

        <Select
            placeholder="Pagará con..."
          defaultValue=""
          style={{ width: 120 }}
          onChange={handleChange}
          
        >
          <Option  value="cash">Efectivo</Option>
          <Option  value="card">Tarjeta</Option>
        </Select>
        
        <div>
          <h2 className="white-text-color">
            <strong>Cambio:</strong>
            <p className="white-text-color"> 0.00$ </p>{' '}
          </h2>
        </div>
        <Button className="buttons" type="primary" onClick={setHomeDelivery}>
          Confirmar
        </Button>
      </div>
    </>
  );
}
//value={user} onChange={(e) => { setUser(e.target.value)}}

export default FormHomeDelivery;

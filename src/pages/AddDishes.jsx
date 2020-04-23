import React, { useEffect, useState } from 'react';
import Background from '../assets/background.png';
import { Input, Button, Col, Row } from 'antd';
import { AppleFilled } from '@ant-design/icons';
import url from '../constants/api';
import axios from 'axios';
const { Search } = Input;

const api = axios.create({
  baseURL: url.apiEndPoint,
});

function AddDishes(props) {
  const retrieveFormMenuDishes = async () => {
    try {
      let response = await api.get('platillos');
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const retrieveCategorias = async () => {
    try {
      let response = await api.get('categorias');
      let data = response.data.data;

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const initializeState = async () => {
    const initialState = await retrieveFormMenuDishes();
    const initCategorias = await retrieveCategorias();
    setDishes(initialState);
    setCategorias(initCategorias);
    console.log(initialState);
    console.log(props.location.noMesa);
    // const initialState = JSON.parse(localStorage.getItem("categories")) || [];
  };

  useEffect(() => {
    initializeState();
  }, []);

  const [dishes, setDishes] = useState([]);
  const [categorias, setCategorias] = useState([]);

  return (
    <div>
      <img src={Background} alt="bg" style={{ width: '100%', height: 180 }} />
      <header style={{ top: 0, position: 'absolute' }}>
        <h1
          style={{
            color: '#545454',
            position: 'absolute',
            left: 20,
            top: 30,
            fontWeight: 'bold',
          }}
        >
          Menú
        </h1>
        <h3
          style={{
            color: '#545454',
            position: 'absolute',
            left: 140,
            top: 10,
          }}
        >
          Mesa{props.location.noMesa}
        </h3>
        <div
          style={{ position: 'absolute', left: 250, top: 35, display: 'block' }}
        >
          <Search
            placeholder="Buscar"
            onSearch={(value) => console.log(value)}
            style={{ width: 100, border: 'none' }}
            size="large"
          />
        </div>
      </header>
      <div className="scrollmenu" style={{ position: 'relative', top: -95 }}>
        {categorias.map((categoria) => (
          <div style={{ display: 'inline-block' }} key={categoria._id}>
            <Button
              shape="circle"
              icon={<AppleFilled />}
              style={{
                margin: 12,
                width: 60,
                height: 60,
                border: 'none',
                boxShadow: '0px 3px 5px 0px grey',
              }}
            />
            <p style={{ textAlign: 'center' }}>{categoria.nombre}</p>
          </div>
        ))}
      </div>
      <Row style={{ position: 'relative', top: -60 }}>
        {dishes.map((dish) => (
          <Col xs={12} md={6} key={dish._id}>
            <div
              style={{ margin: 15 }}
              onClick={() => console.log(dish.nombre)}
            >
              <img
                alt="example"
                src="https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                style={{
                  boxShadow: '0px 3px 5px 0px grey',
                  width: '100%',
                  borderRadius: 5,
                }}
              />
              <p
                style={{
                  textAlign: 'center',
                  backgroundColor: 'white',
                  borderBottomRightRadius: '5px',
                  borderBottomLeftRadius: '5px',
                }}
              >
                {dish.nombre}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AddDishes;

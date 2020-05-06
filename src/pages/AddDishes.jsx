import React, { useEffect, useState } from 'react';
import Background from '../assets/background.png';
import { Input, Button, Col, Row } from 'antd';
import { AppleFilled } from '@ant-design/icons';
import url from '../constants/api';
import axios from 'axios';
import Dish from '../components/Dishes/Dish.jsx';
import DishesList from '../components/Dishes/DishesList';
const { Search } = Input;

const api = axios.create({
  baseURL: url.apiEndPoint,
});

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg2ODg0MzMsImV4cCI6MTU4ODcxNzIzM30.E5UBebL6sgKlFKVptNskC_-iAsA4Zo-g7YtxfCIfnzI';

function AddDishes(props) {
  const [dishes, setDishes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [dishesList, setDishesList] = useState([]);

  const addDishToList = (d) => {
    let temp = [...dishesList];
    temp.push(d);
    setDishesList(temp);
  };

  const retrieveFormMenuDishes = async () => {
    try {
      let response = await api.get('platillos', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  const retrieveCategorias = async () => {
    try {
      let response = await api.get('categorias', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      let data = response.data.data;
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initState = async () => {
      const initialState = await retrieveFormMenuDishes();
      const initCategorias = await retrieveCategorias();
      setDishes(initialState);
      setCategorias(initCategorias);
    };
    initState();
  }, []);

  return (
    <Row>
      <Col xs={24}>
        <img src={Background} alt="bg" style={{ width: '100%', height: 180 }} />
        <header style={{ top: 0, position: 'absolute', width: '100%' }}>
          <h1
            style={{
              color: '#545454',
              position: 'absolute',
              left: 20,
              top: 25,
              fontWeight: 'bold',
              fontSize: 25,
            }}
          >
            Menú
          </h1>
          <h3
            style={{
              color: '#545454',
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            Mesa{props.location.noMesa}
          </h3>
          <div style={{ float: 'right', marginRight: 20 }}>
            <Search
              placeholder="Buscar"
              onSearch={(value) => setSearchValue(value)}
              style={{ width: 125, border: 'none' }}
              size="large"
            />
          </div>
        </header>
        <div className="scrollmenu" style={{ position: 'relative', top: -90 }}>
          {categorias.map((categoria) => (
            <div
              style={{ display: 'inline-block' }}
              key={categoria._id}
              onClick={() => console.log(categoria._id)}
            >
              <Button
                shape="circle"
                icon={<AppleFilled style={{ fontSize: 25 }} />}
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
        <Row style={{ position: 'relative', top: -80 }}>
          {dishes.map((dish) =>
            searchValue === '' ? (
              <Col xs={12} md={6} key={dish._id}>
                <Dish dish={dish} addDishToList={addDishToList}/>
              </Col>
            ) : (
              dish.nombre.split(' ')[0].toUpperCase() ===
                searchValue.toUpperCase() && (
                <Col xs={12} md={6} key={dish._id}>
                  <Dish dish={dish} addDishToList={addDishToList}/>
                </Col>
              )
            )
          )}
        </Row>
        <DishesList dishesList={dishesList}/>
      </Col>
    </Row>
  );
}

export default AddDishes;

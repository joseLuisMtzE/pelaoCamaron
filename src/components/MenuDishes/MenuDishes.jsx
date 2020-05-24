import React, { useEffect, useState, useContext } from 'react';
import { Input, Button, Col, Row, Divider } from 'antd';
import ModalMenuDishes from '../MenuDishes/ModalMenuDishes';
import Background from '../../assets/background.png';
import { DownloadOutlined } from '@ant-design/icons';
import MenuGallery from './MenuGallery';
import axios from 'axios';
import url from '../../constants/api';
import { DishesContext } from './MenuDishesContext';
import ScrollMenu from './ScrollMenu';
import {getRol} from '../../shared/ApiWrapper'
const { Search } = Input;

const api = axios.create({
  baseURL: url.apiEndPoint
});

//const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVhMjBiZmU2ZTBmZDU0OWM0YWVlOTMzIiwibm9tYnJlIjoiSm9uYXRoYW4iLCJub21icmVVc3VhcmlvIjoiam9uYXRoYW5zYyIsInJvbCI6IkR1ZcOxbyJ9LCJpYXQiOjE1ODg1Njg0NzAsImV4cCI6MTU4ODU5NzI3MH0.e7uNW8Pd2UrlxseottDQo63dZiFN0gu7xiCpZdTGsno';

function MenuDishes() {
  const {
    retrieveFormMenuDishes,
    retrieveCategories,
    retrieveAreas,
    addDishesRequest
  } = useContext(DishesContext);

  const initializeState = async () => {
    const initialState = await retrieveFormMenuDishes();
    const initCategories = await retrieveCategories();
    const initAreas = await retrieveAreas();
    //console.log(initialState);
    setDishes(initialState);
    setCategories(initCategories);
    setAreas(initAreas);
    //console.log(initAreas);
  };
  
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);
  
  const[filter,setFilter] = useState('5ec74cb7d3f47700040080db') //categoria inicial
  const [selectedDishes,setSelectedDishes] = useState([])
  useEffect(()=>{
    initializeState();

  },[])

  useEffect(() => {
    let temp = [];
    dishes.map((dish)=>{
      if(dish.categoria!==null)
        temp.push(dish);
    })
    let result = temp.filter((dish)=>dish.categoria._id === filter);
    setSelectedDishes(result);
  }, [dishes,filter]);
  return (
    <>
      <div style={{ display: 'block' }} className="header">
        <img
          src={Background}
          alt=""
          style={{ width: '100%', position: 'absolute' }}
        />
        <div style={{ display: 'block' }}>
          <h1
            style={{
              position: 'relative',
              top: '20px',
              left: '10px',
              fontSize: '8vw'
            }}
          >
            MENÚ
            <Search
              placeholder="Buscar"
              onSearch={value => console.log(value)}
              style={{
                width: 100,
                border: 'none',
                float: 'right',
                marginRight: '20px'
              }}
              size="large"
            />
          </h1>
        </div>
      </div>
      <div className="scrollmenu" style={{ position: 'relative' }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: 'none',
            //boxShadow: '0px 3px 5px 0px grey',
            display: 'inline-block'
          }}
        />
        {categories.map(category => (
          <div
            className="centerContent"
            style={{ display: 'inline-block', margin: '5px' }}
            key={category._id}
          >

            <ScrollMenu category={category} setFilter={setFilter} />
          </div>
        ))}
        <div
          className="centerContent"
          style={{ display: 'inline-block', margin: '5px' }}
        >
          {getRol() === 'Dueño' ? (
            console.log("Acceso Concedido ", getRol()),
            <ModalMenuDishes />
            ) : null}

          {/*<p style={{ textAlign: 'center' }}>Agregar</p>*/}
        </div>
      </div>

      <Row>
        {selectedDishes.map((dish, index) => (
          <Col key={index} className="gutter-row" xs={12} md={6} lg={4}>
            <MenuGallery
              nombre={dish.nombre}
              imagen={dish.imagen}
              descripcion={dish.descripcion}
              categoria={dish.categoria}
              area={dish.area}
              precioConIva={dish.precioConIva}
              precioSinIva={dish.precioSinIva}
              peso={dish.peso}
              tiempoPreparación={dish.tiempoPreparación}
              dish={dish}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MenuDishes;

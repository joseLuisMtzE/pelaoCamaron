import React, { useEffect, useState } from 'react';
import Background from '../assets/background.png';
import { Input, Button, Col, Row } from 'antd';
import { AppleFilled, LoadingOutlined } from '@ant-design/icons';
import Dish from '../components/Dishes/Dish.jsx';
import DishesList from '../components/Dishes/DishesList';
import { makeRequest } from '../shared/ApiWrapper';
const { Search } = Input;

export default function AddDishes() {
  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [dishesList, setDishesList] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [filter, setFilter] = useState('todas');
  const noMesa = localStorage.getItem('noMesa');

  const addDishToList = d => {
    let temp = [...dishesList];
    temp.push(d);
    setDishesList(temp);
  };

  const getDishesRequest = async () => {
    try {
      let response = await makeRequest('GET', 'platillos?isActive=true');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoriesRequest = async () => {
    try {
      let response = await makeRequest('GET', 'categorias?isActive=true');
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initState = async () => {
      const responseDishes = await getDishesRequest();
      const responseCategories = await getCategoriesRequest();
      setDishes(responseDishes);
      setCategories(responseCategories);
    };
    initState();
  }, []);

  useEffect(() => {
    let temp = [];
    dishes.forEach(dish => {
      if (dish.categoria !== null) temp.push(dish);
    });
    let result =
      filter !== 'todas'
        ? temp.filter(dish => dish.categoria._id === filter)
        : temp;
    setSelectedDishes(result);
  }, [dishes, filter]);

  return (
    <Row>
      <Col xs={24} md={24}>
        <img src={Background} alt="bg" className="bg-img" />
        <header className="header">
          <h1 className="h1">Menú</h1>
          <h3 className="h3">Mesa{noMesa}</h3>
          <div className="search-input">
            <Search
              placeholder="Buscar"
              onSearch={value => setSearchedValue(value)}
              className="search"
              size="large"
            />
          </div>
        </header>
        <div className="scrollmenu up">
          {categories.length !== 0 && (
            <div className="inline-block" onClick={() => setFilter('todas')}>
              <Button
                shape="circle"
                icon={<AppleFilled className="normal-size" />}
                className="circle"
              />
              <p className="center">Todas</p>
            </div>
          )}
          {categories.map(categoria => (
            <div
              className="inline-block"
              key={categoria._id}
              onClick={() => setFilter(categoria._id)}
            >
              <Button
                shape="circle"
                icon={<AppleFilled className="normal-size" />}
                className="circle"
              />
              <p className="center">{categoria.nombre}</p>
            </div>
          ))}
        </div>
        <Row className="up">
          {selectedDishes.map(dish =>
            searchedValue === '' ? (
              <Col xs={12} md={6} key={dish._id}>
                <Dish dish={dish} addDishToList={addDishToList} />
              </Col>
            ) : (
              dish.nombre.split(' ')[0].toUpperCase() ===
                searchedValue.toUpperCase() && (
                <Col xs={12} md={6} key={dish._id}>
                  <Dish dish={dish} addDishToList={addDishToList} />
                </Col>
              )
            )
          )}
        </Row>
        <DishesList dishesList={dishesList} setDishesList={setDishesList} />
      </Col>
      {dishes.length === 0 && (
        <div
          style={{
            margin: '0 auto',
            display: 'block',
            top: 250,
            position: 'relative'
          }}
        >
          <LoadingOutlined className="big-size" spin />
        </div>
      )}
    </Row>
  );
}

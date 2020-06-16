import React, { useEffect, useState, useContext } from 'react';
import { Col, Row, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import ModalMenuDishes from '../MenuDishes/ModalMenuDishes';
import Background from '../../assets/background.png';
import MenuGallery from './MenuGallery';
import { DishesContext } from './MenuDishesContext';
import ScrollMenu from './ScrollMenu';
import { getRol } from '../../shared/ApiWrapper';
// const { Search } = Input;

function MenuDishes() {
  const {
    retrieveFormMenuDishes,
    retrieveCategories
    // retrieveAreas
    // addDishesRequest,
  } = useContext(DishesContext);

  const initializeState = async () => {
    const initialState = await retrieveFormMenuDishes();
    const initCategories = await retrieveCategories();
    // const initAreas = await retrieveAreas();
    //console.log(initialState);
    setDishes(initialState);
    setCategories(initCategories);
    // setAreas(initAreas);
    //console.log(initAreas);
  };

  const [dishes, setDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [areas, setAreas] = useState([]);
  //karen pipipopo
  const [filter, setFilter] = useState('todas'); //categoria inicial
  const [selectedDishes, setSelectedDishes] = useState([]);
  useEffect(() => {
    initializeState();
  }, [dishes]);

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
        <img className="bg-img" src={Background} alt="" />
        <header className="header">
          <h1 className="h1">MENÚ</h1>
          {/* <h3 className='h3' style={{height:'15px'}}></h3> */}
          {/*<div className='search-input'>

            <Search
              placeholder="Buscar"
              onSearch={(value) => console.log(value)}
              className='search'
              size="large"
            />
  </div>*/}
        </header>

        <div className="scrollmenu up">
          {categories.length !== 0 && (
            <div
              className="centerContent"
              style={{ display: 'inline-block', margin: '5px' }}
            >
              <Button
                onClick={() => setFilter('todas')}
                shape="circle"
                icon={<LoadingOutlined />}
                size={''}
                style={{
                  margin: 6,
                  width: 60,
                  height: 60,
                  border: 'none',
                  boxShadow: '0px 3px 5px 0px grey'
                }}
              />
              <p style={{ textAlign: 'center' }}>{'Todo'}</p>
            </div>
          )}
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
            {getRol() === 'Dueño' ? (getRol(), <ModalMenuDishes />) : null}

            {/*<p style={{ textAlign: 'center' }}>Agregar</p>*/}
          </div>
        </div>

        <Row className="up-dishes ">
          {selectedDishes.map((dish, index) => (
            <Col
              key={index}
              className="gutter-row"
              style={{ top: '50px' }}
              xs={12}
              md={6}
              lg={4}
            >
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

export default MenuDishes;

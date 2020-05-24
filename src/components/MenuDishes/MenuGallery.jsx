import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import ModalDishes from './ModalDishes';
//const style = {padding: '8px 0', borderRadius:"15px"  };
//const { Meta } = Card;

/*
<Card hoverable style={{ width: 150 }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
        <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
      </Card>

*/

function MenuGallery({
  categories,
  nombre,
  imagen,
  descripcion,
  precioSinIva,
  precioConIva,
  peso,
  tiempoPreparación,
  categoria,
  area,
  dish
}) {
  //const [state, setState] = useState({ visible: false, loading:false });
  // console.log('MenuGallery, Area: ', area);
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div style={{ padding: '5px' }}>
      <div>
        <ModalDishes
          categoria={categoria}
          area={area}
          nombre={nombre}
          imagen={imagen}
          descripcion={descripcion}
          precioSinIva={precioSinIva}
          precioConIva={precioConIva}
          peso={peso}
          tiempoPreparación={tiempoPreparación}
          visible={visible}
          setVisible={setVisible}
          handleOk={handleOk}
          handleCancel={handleCancel}
          dish={dish}
        
        />
      </div>
      <div>
        <div style={{ margin: 15 }} onClick={showModal}>
          <img
            alt={nombre}
            src="https://jaliscocina.com/wp-content/uploads/2019/04/taco-de-sal-jcn.jpg"
            style={{
              boxShadow: '0px 3px 5px 0px grey',
              width: '100%',
              borderRadius: '5px'
            }}
          />
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'white',
              borderBottomRightRadius: '5px',
              borderBottomLeftRadius: '5px',
              wordWrap: 'break-word'
            }}
          >
            <p>{nombre}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuGallery;

//--------------------------------------------------------

import React, { useState, useContext } from 'react';
import { Modal, Button, Row, Col, Typography } from 'antd';
import { DishesContext } from './MenuDishesContext';
import EditFormMenuDishes from './EditFormMenuDishes';

const { Title } = Typography;

function ModalDishes({
  nombre,
  imagen,
  descripcion,
  precioConIva,
  precioSinIva,
  peso,
  tiempoPreparación,categoria,area,

  visible,
  handleOk,
  handleCancel,
  categories
  
}) {
  const [editModal, setEditModal] = useState({ visible: false });

  const showEditModal = () => {
    setEditModal({
      visible: true,
    });
  };

  const editOk = () => {
    //use esta funcion cuando termine el formulario
    setTimeout(() => {
      setEditModal({ visible: false });
    }, 3000);
  };

  const editCancel = () => {
    setEditModal({ visible: false });
  };

  const { editDishes } = useContext(DishesContext);
  const click = () => {
    editDishes(112, 'taco de perro');
    console.log('click Editar');
  };
  return (
    <div>
      <Modal
        title="Editar Platillo"
        visible={editModal.visible}
        onOk={editOk}
        onCancel={editCancel}
        footer=""
      >
        <EditFormMenuDishes
          nombre={nombre}
          categorias={categories}
          descripcion={descripcion}
          imagen={imagen}
          precioSinIva={precioSinIva}
          precioConIva={precioConIva}
          peso={peso}
          tiempoPreparación={tiempoPreparación}
          categoria={categoria}
          area={area}
         
        />
      </Modal>

      <Modal
        title=""
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer=""
      >
        <img
          src="https://jaliscocina.com/wp-content/uploads/2019/04/taco-de-sal-jcn.jpg"
          alt={nombre}
          style={{
            maxWidth: '100%',
            height: 'auto',
            marginTop: '20px',
            borderRadius: '5px',
            zIndex: 0,
          }}
        />
        <div style={{ padding: '2px' }}>
          <div
            className="centerContent"
            style={{
              marginBottom: '40px',
              borderRadius: '5px',
              boxShadow: '0px 3px 5px 0px grey',
            }}
          >
            <Title level={4} vel>
              {nombre}
            </Title>
            <Row>
              <Col span={8}>categorias</Col>
              <Col span={8}>tiempo</Col>
              <Col span={8}>precio</Col>
            </Row>
            <Row>
              <Col span={12}>peso</Col>
              <Col span={12}>iva</Col>
            </Row>
          </div>

          <div className="centerContent">
            <label style={{ fontSize: '20px' }}>Descripcion</label>
            <p htmlFor="">{descripcion}</p>
            <Button
              onClick={showEditModal}
              type="primary"
              shape="circle"
              icon={'E'}
              style={{
                margin: 6,
                width: 40,
                height: 40,
                border: 'none',
                boxShadow: '0px 3px 5px 0px grey',
              }}
            />
            <Button
              type="primary"
              shape="circle"
              icon={'X'}
              style={{
                margin: 6,
                width: 40,
                height: 40,
                border: 'none',
                boxShadow: '0px 3px 5px 0px grey',
              }}
              danger
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDishes;

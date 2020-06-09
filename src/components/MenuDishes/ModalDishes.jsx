import React, { useState, useContext } from 'react';
import { Modal, Button, Row, Col, Typography } from 'antd';
import { DishesContext } from './MenuDishesContext';
import EditFormMenuDishes from './EditFormMenuDishes';
import {getRol} from '../../shared/ApiWrapper'
//import { confirmDialog } from '../../shared/Alerts.jsx';
import Swal from 'sweetalert2';
import {DeleteOutlined,EditOutlined } from '@ant-design/icons';
const { Title } = Typography;

function ModalDishes({
  nombre,
  imagen,
  descripcion,
  precioConIva,
  precioSinIva,
  peso,
  tiempoPreparación,
  categoria,
  area,
  visible,
  handleOk,
  handleCancel,
  categories,
  dish
}) {
 
  //console.log(categoria.nombre)
  //console.log(peso)

  const [editModal, setEditModal] = useState({ visible: false });
  // console.log('ModalDishes, Area: ', area);
  const showEditModal = () => {
    setEditModal({
      visible: true
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

  const { editDishes,deleteDishes } = useContext(DishesContext);
  
 // confirmDialog()


 function deleteClickaAlert() {
  Swal.fire({
    title: '¿Estás seguro de eliminarlo?',
    text: 'No podras revertir está acción!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si borralo!',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.value) {
      deleteDishes(dish._id)
    }
  });
}

/*
  const deleteClick = () => {
    //console.log(dish._id)
    deleteDishes(dish._id)
  }
  */



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
          dish={dish}
          
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
            zIndex: 0
          }}
        />
        <div style={{  zIndex:'60', display:'block' }}>
          <div
            className="centerContent"
            style={{
              marginBottom: '10px',
              borderRadius: '5px',
              boxShadow: '0px 3px 5px 0px grey',
              backgroundColor:'white',
              position:'relative',
              top:'-40px',
              width: '95%'
            }}
          >
            <Title level={4} vel>
              {nombre}
            </Title>
            <Row>
          <Col span={8}>
            <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/97-512.png" alt="" style={{width:'15px'}} />
            {categoria.nombre}</Col>
          <Col span={8}>
            <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/10-512.png" alt="" style={{width:'15px', margin:'5px'}}/>
            {tiempoPreparación} min</Col>
          <Col span={8}>
            <img src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Dollar-512.png" alt=""  style={{width:'24px'}}/>
            ${precioSinIva}</Col>
            </Row>
            <Row>
              <Col span={12}>
                <img src="https://cdn1.iconfinder.com/data/icons/electronics-outline-24/24/kitchen_scale_food_scale_weighing_scale_weight_machine_weight_scale-512.png" alt="" style={{width:'15px', margin:'5px'}}/>
                {peso} gr</Col>
          <Col span={12}>
            <img src="https://cdn0.iconfinder.com/data/icons/pinpoint-interface/48/taxes-and-fees-512.png" alt="" style={{width:'15px', margin:'5px'}}/>
            ${precioConIva}</Col>
            </Row>
          </div>

            
          <div className="centerContent">
            <label style={{ fontSize: '20px' }}>Descripcion</label>
            <p htmlFor="">{descripcion}</p>
            
            
{/*VAlIDACION DE PERMISOS DE USUARIO*/}
          {getRol() === 'Dueño' ? (
            
            <Button
              onClick={showEditModal}
              type="primary"
              shape="circle"
              icon={<EditOutlined />}
              style={{
                margin: 6,
                width: 40,
                height: 40,
                border: 'none',
                boxShadow: '0px 3px 5px 0px grey'
              }}
            />) : null}
             {getRol() === 'Dueño' ? (
            <Button
            onClick={deleteClickaAlert}
              type="primary"
              shape="circle"
              icon={<DeleteOutlined />}
              style={{
                margin: 6,
                width: 40,
                height: 40,
                border: 'none',
                boxShadow: '0px 3px 5px 0px grey'
              }}
              danger
            />) : null}
            
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalDishes;

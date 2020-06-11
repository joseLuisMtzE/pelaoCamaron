import React, { useState } from 'react';
import { Button, Modal,InputNumber  } from 'antd';
import { EditFilled } from '@ant-design/icons';
import {alertSuccess,alertError} from '../../shared/Alert';
import { makeRequest } from '../../shared/ApiWrapper';
import {
  DeleteFilled
} from '@ant-design/icons';

export default function Order({ order, getOrders }) {

  const [visible, setVisible] = useState(false);
  const [newCount,setNewCount] = useState(order.cantidad);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (value)=>{
    setNewCount(value);
  }

  const editarComanda = async ()=>{
    order.cantidad = newCount;
    console.log(order._id,order.platillo._id,newCount,order.estado,order.observaciones,order.orden)
    await editComandaRequest(order._id,order.platillo._id,newCount,order.estado,order.observaciones,order.orden);
    setVisible(false);
    await getOrders()
  }

  const cancelar = async ()=>{
    console.log('Cancelado xd');
    await editComandaRequest(order._id,order.platillo._id,newCount,'Cancelada',order.observaciones,order.orden);
    await getOrders()
  }

  const editComandaRequest = async (idComanda,idPlatillo,cantidad,estado,observaciones,idOrden) => {
    try {
      let response = await makeRequest('PUT',`comandas/${idComanda}`,{
        'platillo': idPlatillo,
        'cantidad':cantidad,
        'estado': estado,
        'observaciones': observaciones,
        'orden':idOrden
      })

      if (response.status === 200) {
        alertSuccess('Comanda editada correctamente');
      } else {
        alertError('Hubo un error al editar la comanda');
      }

      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
      alertError('Hubo un error al editar la comanda');
    }
  };

  return (
    <tr style={{ padding: 20 }}>
      <td>{order.platillo.nombre}</td>
      <td>{order.cantidad}</td>
      <td>{order.estado}</td>
      <td>${order.platillo.precioSinIva.toFixed(2)}</td>
      <td>${order.platillo.precioConIva.toFixed(2)}</td>
      <td>
        <Button
          type="primary"
          style={{ background: 'orange', border: 'none' }}
          onClick={showModal}
        >
          <EditFilled />
        </Button>
      </td>
      <Modal
        footer={null}
        title="Editar comanda"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <table className="table left">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.platillo.nombre}</td>
              <InputNumber defaultValue={order.cantidad} onChange={onChange} min={0}></InputNumber>
              <td>${(order.platillo.precioConIva/order.cantidad * newCount).toFixed(2)}</td>
              <td><Button onClick={cancelar} type="primary" danger>
                <DeleteFilled />
              </Button></td>
            </tr>
          </tbody>
        </table>
        <Button 
          onClick={editarComanda}
          type="primary"
          style={{ background: 'orange', border: 'none',marginTop:30 }}>Editar</Button>
      </Modal>
    </tr>
  );
}

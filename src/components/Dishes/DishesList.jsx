import React, { useState } from 'react';
import { Button, Modal, InputNumber } from 'antd';
import { FormOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import {makeRequest} from '../../shared/ApiWrapper';

export default function DishesList({ dishesList }) {

  const FakeID = '123141321321';
  const [visible, setVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [cantidad,setCantidadd] = useState(0);

  const showModal = () => {
    let temp = 0;
    setVisible(true);
    console.log(dishesList);
    dishesList.forEach((dish) => {
      temp += dish.precioConIva;
      setTotal(temp);
    });

    let cTemp = 0;
    dishesList.forEach((dish) => {
      cTemp += dish.cantidad;
      setCantidadd(cTemp);
    });
  };
  const handleOk = (e) => {
    setVisible(false);
    dishesList.forEach((dish) => {
      addComandasRequest(dish);
    });
    console.log(dishesList);
  };

  const handleCancel = (e) => {
    setVisible(false);
  };

  const addComandasRequest = async (dish) => {
    try {
      let response = await makeRequest('POST',`ordenes/${FakeID}/comandas`,{ platillo: dish._id,cantidad: dish.cantidad,observaciones:dish.observaciones})

      if (response.status === 201) {
        console.log('comanda creada correctamente');
      } else {
        console.log('Hubo un error al crear la comanda');
      }
      let data = response.data.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{ 
    /*Esto lo que hace es sumar los precios de platillos repetidos, sumar la cantidad de platillos repetidos y eliminar el platillo repetido*/
    for(let i =0;i<dishesList.length;i++){
      for(let y = 0;y<dishesList.length;y++){
        if(dishesList[i]._id===dishesList[y]._id && i !== y){
          (dishesList[i].cantidad) +=dishesList[y].cantidad;
          dishesList[i].precioConIva +=dishesList[y].precioConIva;
          dishesList.splice(y,1);
        }
      }
    }
  },[dishesList])

  return (
    <div>
      <Button
        onClick={showModal}
        shape="circle"
        icon={<FormOutlined className="normal-size" />}
        className="list-btn"
      ></Button>
      <Modal
        title="Artículos"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" onClick={handleOk}>
            Ordenar
          </Button>
        ]}
      >
        {dishesList.length !== 0 ? (
          <article>
            <table className="table left">
              <tbody>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
                {dishesList.map((dish) => (
                  <tr key={dish._id}>
                    <td>{dish.nombre}</td>
                    <td>{dish.cantidad}</td>
                    <td>${dish.precioConIva.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className="margin-top">Artículos: {cantidad}</h3>
            <h3>
              Total: <span className="total">${total.toFixed(2)}</span>
            </h3>
          </article>
        ) : (
          <div>
            <ExclamationCircleOutlined className="normal-size"/>
            <p>Nada agregado aún.</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

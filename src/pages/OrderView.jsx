import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import BackgroundYellow from '../assets/backgroundYellow';
import BackgroundRed from '../assets/backgroundRed';
import { makeRequest } from '../shared/ApiWrapper';
import {
  PlusOutlined,
  CloseOutlined,
  PrinterOutlined,
  DollarCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function OrderView() {
  const mesaID = localStorage.getItem('mesaID');
  const noMesa = localStorage.getItem('noMesa');

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const getOrderID = async () => {
    try {
      let response = await makeRequest('GET', `mesas/${mesaID}/ordenes`);
      let data = response.data.data;
      if (response.status === 200) await getOrdersRequest(data[0]._id);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getOrdersRequest = async (orderID) => {
    try {
      localStorage.setItem('orderID', orderID);
      let response = await makeRequest('GET', `ordenes/${orderID}`);
      let data = response.data.data.comandas;
      console.log(data);
      setOrders(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const initState = async () => {
      await getOrderID();
    };
    initState();
  }, []);

  useEffect(() => {
    /*Esto lo que hace es sumar los precios de platillos repetidos, sumar la cantidad de platillos repetidos y eliminar el platillo repetido*/
    orders.map((x)=>{
      orders.map((y,index)=>{
        if (
          x &&
          x.platillo._id === y.platillo._id &&
          x !== y
        ) {
          x.cantidad += y.cantidad;
          orders.splice(index, 1);
        }
      })
    })
    orders.map((order)=>{
      order.platillo.precioConIva *= order.cantidad;
      order.platillo.precioSinIva *= order.cantidad;
    })
    let totaltemp = 0;
    orders.map((order) => {
      totaltemp += order.platillo.precioConIva;
      setTotal(totaltemp);
    });
  }, [orders]);


  return (
    <div>
      <Row>
        <Col xs={24}>
          <img src={BackgroundYellow} alt="bg" className="bg-img" />
          <h1 className="h1">Orden - Mesa {noMesa}</h1>
        </Col>
        <Col xs={24} md={18}>
          <section
            style={{
              background: 'white',
              padding: 25,
              borderRadius: 15,
            }}
          >
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Estado</th>
                  <th>Sub-total</th>
                  <th>Precio</th>
                </tr>
                {orders.map((order) => (
                  <tr style={{ padding: 20 }}>
                    <td>{order.platillo.nombre}</td>
                    <td>{order.cantidad}</td>
                    <td>{order.estado}</td>
                    <td>${order.platillo.precioSinIva}</td>
                    <td>${order.platillo.precioConIva}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section
            style={{
              background: 'white',
              padding: 15,
              borderRadius: 15,
              marginTop: 20,
            }}
          >
            <h3 style={{ textAlign: 'center' }}>
              Subtotal: ${total.toFixed(2)}
            </h3>
            <h3 style={{ textAlign: 'center' }}>
              Total: <span className="total">${total.toFixed(2)}</span>
            </h3>
          </section>
        </Col>
        <Col xs={24} md={6}>
          <div className="center margin-top">
            <Button shape="circle" className="add-btn">
              <Link to="/agregar-platillos">
                <PlusOutlined className="normal-size" />
              </Link>
            </Button>
            <p>Agregar platillo</p>
          </div>
          <div className="center">
            <Button shape="circle" className="close-btn">
              <Link to="/cerrar-orden-salas-creo">
                <CloseOutlined className="normal-size" />
              </Link>
            </Button>
            <p>Cerrar orden</p>
          </div>
          <div className="center">
            <Button shape="circle" className="discount-btn">
              <Link to="/descuento/:id">
                <DollarCircleOutlined className="normal-size" />
              </Link>
            </Button>
            <p>Agregar descuento</p>
          </div>
          <div className="center alot-margin-bottom">
            <Button shape="circle" className="print-btn">
              <Link to="/imprimir-ticket-mariana">
                <PrinterOutlined className="normal-size" />
              </Link>
            </Button>
            <p>Imprimir Ticket</p>
          </div>
        </Col>
        <Col xs={24}>
          <img src={BackgroundRed} alt="bg" className="bg-img bottom" />
        </Col>
      </Row>
    </div>
  );
}

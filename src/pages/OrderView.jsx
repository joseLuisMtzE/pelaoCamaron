import React, { useState, useEffect } from 'react';
import { Col, Row, Button } from 'antd';
import BackgroundYellow from '../assets/backgroundYellow';
import { LoadingOutlined } from '@ant-design/icons';
import BackgroundRed from '../assets/backgroundRed';
import { makeRequest } from '../shared/ApiWrapper';
import Order from '../components/OrderView/Order';
import {
  PlusOutlined,
  CloseOutlined,
  PrinterOutlined,
  DollarCircleOutlined
} from '@ant-design/icons';
import Discount from '../components/Discounts/Discount';

import { Link } from 'react-router-dom';

export default function OrderView() {
  const mesaID = localStorage.getItem('mesaID');
  const noMesa = localStorage.getItem('noMesa');

  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState({
    subTotal:0,
    precioTotal:0
  });
  const [id,setId] = useState('');

  const getOrders = async () => {
    try {
      let response = await makeRequest('GET', `mesas/${mesaID}/ordenes`);
      let data = response.data.data;
      setOrders(data[0].comandas);
      setTotal(data[0].pago);
      if (response.status === 200) {
        // localStorage.setItem('orderID',data[0]._id);
        setId(data[0]._id);
        window.history.replaceState(
          null,
          null,
          'http://localhost:3000/ver-orden/' + data[0]._id
        );
      }
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const initState = async () => {
      await getOrders();
    };
    initState();
  }, []);

  useEffect(() => {
    /*Esto lo que hace es sumar los precios de platillos repetidos, sumar la cantidad de platillos repetidos y eliminar el platillo repetido*/
    orders.map(x => {
      orders.map((y, index) => {
        if (x && x.platillo._id === y.platillo._id && x !== y) {
          x.cantidad += y.cantidad;
          orders.splice(index, 1);
        }
        return null;
      });
      return null;
    });
    orders.map(order => {
      order.platillo.precioConIva *= order.cantidad;
      order.platillo.precioSinIva *= order.cantidad;
    });
  }, [orders]);

  return (
    <div>
      <Row>
        <Col xs={24}>
          <img src={BackgroundYellow} alt="bg" className="bg-img" />
          <h1 className="h1">Orden - Mesa {noMesa}</h1>
          {orders.length===0 ? <div style={{textAlign:'center',top:200,position:'relative'}}><LoadingOutlined className="big-size" spin/>
          </div>: null}
        </Col>
        <Col xs={24} md={18} style={{zIndex:10}}>
          {orders.length!==0 &&
            <section
              style={{
                background: 'white',
                padding: 25,
                borderRadius: 15,
              }}
            >
              <table className="table">
                <tbody>
                  <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Estado</th>
                    <th>Sub-total</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                  {orders.map((order,index) => (
                    <Order order={order} key={index} getOrders={getOrders}/>
                  ))}
                </tbody>
              </table>
            </section>}
          {orders.length !==0 &&
          <section
            style={{
              background: 'white',
              padding: 15,
              borderRadius: 15,
              marginTop: 20
            }}
          >
            <h3 style={{ textAlign: 'center' }}>
              Subtotal: ${total.subTotal.toFixed(2)}
            </h3>
            <h3 style={{ textAlign: 'center' }}>
              Total: <span className="total">${total.precioTotal.toFixed(2)}</span>
            </h3>
          </section>}
        </Col>
        {orders.length!==0 &&<Col xs={24} md={6} style={{zIndex:10}}>
          <div className="center margin-top">
            <Button shape="circle" className="add-btn">
              <Link to={`/agregar-platillos/${id}`}>
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
            <Discount orderId={id} total={total.precioTotal} />
          </div>
          <div className="center alot-margin-bottom">
            <Button shape="circle" className="print-btn">
              <Link to="/imprimir-ticket-mariana">
                <PrinterOutlined className="normal-size" />
              </Link>
            </Button>
            <p>Imprimir Ticket</p>
          </div>
        </Col>}
        <Col xs={24}>
          <img src={BackgroundRed} alt="bg" className="bg-img bottom" />
        </Col>
      </Row>
    </div>
  );
}

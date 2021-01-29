import React, { useState } from 'react';

//! Components
import ModalCloseOrder from './ModalCloseOrder';
import { Modal, Button } from 'antd';

//! Constants
// import url from '../../constants/api';

import { errorAlert, successAlert } from '../../shared/Alerts';

import { CloseOutlined } from '@ant-design/icons';
import { makeRequest } from '../../shared/ApiWrapper';

function ModalCloseAC({ id, ordenTotal }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cambio, setCambio] = useState(0);
  const total = ordenTotal;

  const closeOrderAndGetTicket = async (id, payload) => {
    try {
      setLoading(true);
      let response = await makeRequest('POST', `ordenes/${id}/ticket`, payload);
      let data = response.data.data;
      console.log('Response: ', response, 'Data: ', data);
      setLoading(false);
      successAlert('Pago realizado', 'Generando ticket...');
    } catch (err) {
      setLoading(false);
      errorAlert('Oops...', 'Algo salió mal al generar el ticket');
      console.log(err);
    }
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const onFinishForm = values => {
    console.log('Form submitted, values recieved are: ', values);
    closeOrderAndGetTicket(id, {
      tipoPago: values.tipoPago,
      porcentajeDescuento: parseInt(values.porcentajeDescuento),
      pagoCon: parseFloat(values.pagoCon),
      subTotal: total
    });
    setCambio(
      parseFloat(values.pagoCon) -
        total * (1 - parseInt(values.porcentajeDescuento) / 100)
    );
  };

  //--------FORM
  return (
    <>
      {/* <div className="close-order__wrapper"> */}
      {/* <Button
          type="primary"
          className="close-order_btn"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          Cerrar cuenta
        </Button> */}
      <div className="center">
        <Button
          shape="circle"
          className="close-btn"
          onClick={() => {
            setModalVisible(true);
          }}
        >
          <CloseOutlined className="normal-size" />
        </Button>
        <p>Cerrar orden</p>
      </div>
      <Modal
        title="CERRAR ORDEN"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={''}
      >
        <ModalCloseOrder
          total={total}
          cambio={cambio}
          loading={loading}
          onFinishForm={onFinishForm}
        />
      </Modal>
      {/* </div> */}
    </>
  );
}
export default ModalCloseAC;

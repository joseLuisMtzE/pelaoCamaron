import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Form } from 'antd';
import { makeRequest } from '../../shared/ApiWrapper';
import { alertError, alertSuccess } from '../../shared/Alert';

const Discount = props => {
  const [state, setState] = useState({ visible: false });
  const [porDiscount, setporDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const id = props.match.params.id;
  //5ec46ddbf79d82000415dc8f
  const [form] = Form.useForm();

  //funciones para la modal
  const showModal = () => {
    setState({
      visible: true
    });
  };

  const handleOk = () => {
    setState({ visible: false });
    sendDiscount(porDiscount);
  };

  const handleCancel = () => {
    setState({ visible: false });
    setporDiscount(0);
    form.setFieldsValue({ porcentaje: 0 });
  };

  //Guardado del valor del descuento
  const porDiscountChange = e => {
    setporDiscount(e.target.value);
    // console.log(porDiscount);
  };

  //Cambio del subtotal dependiendo el porcentaje de descuento
  const result = discount => {
    const porcentaje = (discount * total) / 100;
    const resultado = total - porcentaje;
    setSubTotal(resultado);
  };

  useEffect(() => {
    result(porDiscount);
  }, [porDiscount]);

  useEffect(() => {
    getTotal();
  }, []);

  //peticion para obtener el total
  const getTotal = async () => {
    try {
      let response = await makeRequest('GET', `ordenes/${id}`);
      let data = response.data.data.pago.precioTotal;
      setTotal(data);
      console.log(data);
      //return data;
    } catch (err) {
      console.log(err);
    }
  };

  //peticion para hacer la actualizacion del porcentaje descuento
  const sendDiscount = async discount => {
    try {
      let response = await makeRequest('PUT', `ordenes/${id}`, {
        pago: {
          porcentajeDescuento: discount
        }
      });
      console.log(response);
      if (response && response.status && response.status === 200) {
        alertSuccess(`Descuento aplicado correctamente`);
      } else {
        alertError(`Hubo un error al aplicar el descuento`);
      }
      setporDiscount(0);
      form.setFieldsValue({ porcentaje: 0 });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <Button type="primary" onClick={showModal}>
          Descuento
        </Button>
        <Modal
          title="Descuento"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel} type="primary" danger>
              Cancelar
            </Button>,
            <Button key="submit" type="primary" onClick={handleOk}>
              Aceptar
            </Button>
          ]}
        >
          <div className="Descuentos">
            <Form
              form={form}
              name="Discounts"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="porcentaje"
                label="% Porcentaje a Descontar"
                rules={[
                  {
                    required: true,
                    message: 'Por favor ingresa un porcentaje correcto',
                    whitespace: true,
                    validator: (_, value) =>
                      value >= 0 && value <= 100
                        ? Promise.resolve()
                        : Promise.reject('El porcentaje debe ser entre 0 y 100')
                  }
                ]}
              >
                <Input
                  type="number"
                  onChange={porDiscountChange}
                  value={porDiscount}
                />
              </Form.Item>
            </Form>
            <p></p>
            <p>Total anterior ${total}</p>
            <hr />
            <p></p>
            <p>Total nuevo ${subTotal}</p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Discount;

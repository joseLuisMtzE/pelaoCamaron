import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined} from '@ant-design/icons';

import Form from './FormHomeDelivery';

function HomeDelivery() {

  return (
    <>
      <div style={{ backgroundColor: '#EEEEEE' }}>
        <div className="header-home-delivery">
          <div className="header-img"></div>
          <div>
            <Button className="margin-10 buttons" type="primary" size={'small'}>
            <ArrowLeftOutlined />
            </Button>
          </div>
          <div className="centerContent">
            <h1 level={2} className="white-text-color">
              <strong>Pedido a domicilio</strong>
            </h1>
          </div>
        </div>
        <div className="margin-10">
          <Form />
        </div>

        <div className="centerContent" style={{ padding: '1px' }} />
      </div>
      <div className="footer-home-delivery" />
    </>
  );
}

export default HomeDelivery;

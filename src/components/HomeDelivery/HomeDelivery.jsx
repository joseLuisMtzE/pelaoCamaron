import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";


import Form from './FormHomeDelivery';

function HomeDelivery({props}) {
 console.log(props)
  let history = useHistory();

  function handleClick() {
    history.goBack();
  }
  return (
    <>
      <div style={{ backgroundColor: '#EEEEEE', height:"100%" }}>
        <div className="header-home-delivery">
          <div className="header-img"></div>
          <div>
            <Button className="margin-10 buttons" type="primary" size={'small'}  onClick={handleClick}>
              <ArrowLeftOutlined />
            </Button>
          </div>
          <div className="centerContent">
            <h1 level={2} className="white-text-color">
              <strong>Pedido a domicilio</strong>
            </h1>
          </div>
        </div>
        <div className="" >
        <div className="centerContent" style={{ padding: '1px' }} />
          <Form props={props}/>
          
        </div>

      </div>
    </>
  );
}

export default HomeDelivery;

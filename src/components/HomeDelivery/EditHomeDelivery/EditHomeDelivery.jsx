import React from 'react';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import EditFormHomeDelivery from './EditFormHomeDelivery';
import { Typography } from 'antd';
const { Title } = Typography;

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
            <h1  className="white-text-color" >
              <Title level={3} style={{color: '#FFFFFF'}}>Editar domicilio</Title>
            </h1>
          </div>
        </div>
        <div className="" >
        <div className="centerContent" style={{ padding: '20px' }} />
          <EditFormHomeDelivery props={props}/>
          
        </div>

      </div>
    </>
  );
}

export default HomeDelivery;

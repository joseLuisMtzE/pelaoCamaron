import React,{useEffect} from 'react';
import Background from '../assets/background.png';
import { Input, Button, Col, Row } from 'antd';
import { DownloadOutlined} from '@ant-design/icons';
const { Search } = Input;


function AddDishes(props) {

  useEffect(() => {
    console.log(props.location.numMesa);
  })
  return (
    <div>
      <img src={Background} alt="bg" style={{ width: '100%', height: 180 }} />
      <header style={{ top: 0, position: 'absolute' }}>
        <h1
          style={{
            color: '#545454',
            position: 'absolute',
            left: 20,
            top: 30,
            fontWeight: 'bold',
          }}
        >
          Menú
        </h1>

        <div
          style={{ position: 'absolute', left: 250, top: 35, display: 'block' }}
        >
          <Search
            placeholder="Buscar"
            onSearch={(value) => console.log(value)}
            style={{ width: 100, border: 'none' }}
            size="large"
          />
        </div>
      </header>
      <div className="scrollmenu" style={{ position: 'relative', top: -95 }}>
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
        <Button
          shape="circle"
          icon={<DownloadOutlined/>}
          style={{
            margin: 12,
            width: 60,
            height: 60,
            border: 'none',
            boxShadow: '0px 3px 5px 0px grey',
          }}
        />
      </div>
      <Row style={{position:'relative',top:-60}}>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
        <Col xs={12} md={6} xl={4}>
          <div style={{ margin: 15 }}>
            <img
              alt="example"
              src="https://images.pexels.com/photos/2410606/pexels-photo-2410606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              style={{ boxShadow: '0px 3px 5px 0px grey', width: '100%' }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AddDishes;

import React from 'react';
import { Card, Row, Col } from 'antd';
const style = {padding: '8px 0' };
const { Meta } = Card;

/*
<Card hoverable style={{ width: 150 }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
        <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
      </Card>

*/

function MenuGallery() {
  return (
    <div style={{padding:"5px"}}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
            <Col className="gutter-row" span={8}>
                <div style={style}>
                <Card hoverable style={{ width: "auto" }} cover={ <img alt="example" src="https://pbs.twimg.com/profile_images/3699449208/51ab4f23131f1ac33bc8458fae74c8bf_400x400.jpeg"/>}>
                    <Meta style={{padding:"2px"}} title="Europe Street beat" description="www.instagram.com" />
                </Card>
                </div>
            </Col>
        </Row>
    </div>
  );
}

export default MenuGallery;

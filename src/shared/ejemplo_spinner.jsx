import React from 'react';
import { Spin } from 'antd';

export default function Spinner() {
  return <div style={{top:'400px',textAlign:'center',position:'relative'}}>
    <Spin size="large" />
  </div>;
}

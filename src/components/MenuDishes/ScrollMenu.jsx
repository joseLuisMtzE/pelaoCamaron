import React from 'react';
import { Button} from 'antd';
import {  LoadingOutlined} from '@ant-design/icons';
function ScrollMenu({category, setFilter}) {

  return (
    <>
    
      <Button
      onClick={()=> setFilter(category._id)}
        shape="circle"
        icon={<LoadingOutlined />}
        size={''}
        style={{
          margin: 6,
          width: 60,
          height: 60,
          border: 'none',
          boxShadow: '0px 3px 5px 0px grey',
        }}
      />

      <p style={{ textAlign: 'center' }}>{category.nombre}</p>
   </>
  );
}

export default ScrollMenu;
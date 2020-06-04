import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function UserCard({nombre,rol}) {
  return (
    <div className="UserCard">
      <Avatar className="UserCardAvatar" shape="square" size="large" icon={<UserOutlined />} />
      <div className="UserText">
        <span className="text-bold">{nombre}</span>
        <span>{rol}</span>
      </div>
    </div>
  );
}

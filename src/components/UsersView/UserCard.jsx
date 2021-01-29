import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function UserCard({ nombre, rol, id }) {
  return (
    <Link to ={`/Editar-usuario/${id}`}>
      <div className="UserCard">
        <Avatar
          className="UserCardAvatar"
          shape="square"
          size="large"
          icon={<UserOutlined />}
        />
        <div className="UserText">
          <span className="text-bold">{nombre}</span>
          <span>{rol}</span>
        </div>
      </div>
    </Link>
  );
}

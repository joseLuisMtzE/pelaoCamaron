import React from 'react';
import { Input } from 'antd';


export default function UserTextInput({ title, id }) {
  return (
    <div className="UserTextInput">
      <span className="text-bold">{title}</span>
      <Input placeholder={title} />
    </div>
  );
}


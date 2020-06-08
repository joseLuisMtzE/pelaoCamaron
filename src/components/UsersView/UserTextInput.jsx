import React from 'react';
import { Form, Input} from 'antd';


export default function UserTextInput({ title, extra, name, reglas}) {
  if(extra != 'pasword'){
    return (
      <div className="UserTextInput">
        <span className="text-bold">{title}</span>
        <Form.Item
          name={name}
          rules={[{ required: true, message: 'Favor de introducir su '+ title}]}
        >
          <Input />
        </Form.Item>
      </div>
    );
  }
  else{
    return (
      <div className="UserTextInput">
        <span className="text-bold">{title}</span>
        <Form.Item
          name={name}
          rules= {reglas}
          has hasFeedback
        >
          <Input.Password />
        </Form.Item>
      </div>
    );
  }
}


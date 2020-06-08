import React from 'react';
import { Form, Input} from 'antd';


export default function UserTextInput({ title, extra, name, reglas}) {
  if(extra != 'pasword' && extra != 'mail'){
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
  else{if(extra == 'mail'){
    return (
      <div className="UserTextInput">
        <span className="text-bold">{title}</span>
        <Form.Item
          name={name}
          rules= {[{ type: 'email' }]}
        >
          <Input />
        </Form.Item>
      </div>
    );

  }else{
    return (
      <div className="UserTextInput">
        <span className="text-bold">{title}</span>
        <Form.Item
          name={name}
          rules= {reglas}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
      </div>
    );
  }

  }
}


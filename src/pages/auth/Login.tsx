import React, { Dispatch } from 'react';
import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { login } from '../../services/auth/AuthService';

const Login: React.FC<{ setAuth: Dispatch<boolean> }> = ({ setAuth }) => {
  const history = useNavigate();

  const onFinish = () => {
    login();
    setAuth(true);
    history('/');
  };

  return (
    <Form name="basic" onFinish={onFinish} className="login-form">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

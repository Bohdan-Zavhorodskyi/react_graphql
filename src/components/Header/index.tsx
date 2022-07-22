import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import * as AuthService from '../../service/AuthService';

const { Header } = Layout;

const HeaderCustom = () => (
  <Header>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="1">
        <Link to="/login" onClick={AuthService.logout}>
          Logout
        </Link>
      </Menu.Item>

      <Menu.Item key="2">
        <Link to="/"> Main </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default HeaderCustom;

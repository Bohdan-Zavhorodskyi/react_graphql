import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { logout } from 'services/auth/AuthService';

const { Header } = Layout;

const HeaderCustom = () => {
  const items = [
    {
      key: 1,
      label: <Link to="/"> Main </Link>,
    },
    {
      key: 2,
      label: (
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      ),
    },
  ];
  return (
    <Header>
      <Menu items={items} className="menu-content" />
    </Header>
  );
};

export default HeaderCustom;

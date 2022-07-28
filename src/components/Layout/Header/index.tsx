import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { logout } from 'services/auth/AuthService';
import { HeaderProps } from './types';

const { Header } = Layout;

const HeaderCustom: React.FC<HeaderProps> = ({ isAuth, setAuth }) => {
  const handleLogout = () => {
    logout();
    setAuth(false);
  };

  const UNAUTHORIZED_NAV = [
    {
      key: 1,
      label: <Link to="/">Main</Link>,
    },
  ];

  const AUTHORIZED_NAV = [
    {
      key: 1,
      label: <Link to="/">Main</Link>,
    },
    {
      key: 2,
      label: (
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      ),
    },
  ];

  const usedNavigation = isAuth ? AUTHORIZED_NAV : UNAUTHORIZED_NAV;

  return (
    <Header>
      <Menu items={usedNavigation} className="menu-content" />
    </Header>
  );
};

export default HeaderCustom;

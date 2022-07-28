import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/auth/Login';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import ItemList from './pages/ItemList';
import HeaderCustom from './components/Layout/Header';
import { isAuthenticated } from 'services/auth/AuthService';

import './App.css';

const { Content } = Layout;

const App = () => {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean>(
    isAuthenticated()
  );

  return (
    <BrowserRouter>
      <Layout className="layout">
        <HeaderCustom isAuth={isAuthorized} setAuth={setIsAuthorized} />
        <Content>
          <Routes>
            <Route
              path="/login"
              element={<Login setAuth={setIsAuthorized} />}
            />
            <Route
              path="/"
              element={<ProtectedRoute path="/" component={ItemList} />}
            />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};
export default App;

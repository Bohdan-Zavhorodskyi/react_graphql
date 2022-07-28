import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/auth/Login';
import ProtectedRoute from './components/Layout/ProtectedRoute';
import ItemList from './pages/ItemList';
import HeaderCustom from './components/Layout/Header';

import './App.css';

const { Content } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <HeaderCustom />
      <Content>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={<ProtectedRoute path="/" exact component={ItemList} />}
          />
        </Routes>
      </Content>
    </Layout>
  </BrowserRouter>
);

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Login from './pages/auth/Login';
import ProtectedRoute from './components/Common/ProtectRouter';
import ItemList from './pages/ItemList';
import HeaderCustom from './components/Header';

import './App.css';

const { Content } = Layout;

const App = () => (
  <BrowserRouter>
    <Layout className="layout">
      <HeaderCustom />
      <Content>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/" exact component={ItemList} />
        </Switch>
      </Content>
    </Layout>
  </BrowserRouter>
);

export default App;

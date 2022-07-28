import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { FilterSettingsProvider } from './context/FilterSettingsProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import client from './graphql/client';
import 'antd/dist/antd.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <FilterSettingsProvider>
      <App />
    </FilterSettingsProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

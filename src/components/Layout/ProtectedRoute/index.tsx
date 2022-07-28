import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'services/auth/AuthService';

const ProtectedRoute: React.FC<any> = ({ component: Component, ...props }) =>
  isAuthenticated() === true ? (
    <Component {...props} />
  ) : (
    <Navigate
      to={{
        pathname: '/login',
      }}
      state={{ from: props.location }}
    />
  );

export default ProtectedRoute;
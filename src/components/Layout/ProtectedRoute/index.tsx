import React from 'react';
import { Navigate } from 'react-router-dom';

import { isAuthenticated } from 'services/auth/AuthService';
import { ProtectedRouteProps } from './types';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...props
}) =>
  isAuthenticated() === true ? (
    <Component {...props} />
  ) : (
    <Navigate
      to={{
        pathname: '/login',
      }}
    />
  );

export default ProtectedRoute;

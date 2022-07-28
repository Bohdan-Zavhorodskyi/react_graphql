import { Dispatch } from 'react';

export interface HeaderProps {
  isAuth: boolean;
  setAuth: Dispatch<boolean>;
}

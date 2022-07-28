import {
  IndexRouteProps,
  LayoutRouteProps,
  PathRouteProps,
} from 'react-router-dom';

export type ProtectedRouteProps = (
  | PathRouteProps
  | LayoutRouteProps
  | IndexRouteProps
) & {
  component: (props: any) => JSX.Element;
};

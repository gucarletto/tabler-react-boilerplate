import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

import moment from 'moment';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Component, ...rest }) => {
  const { store, expiration, signOut } = useAuth();

  const date = moment();
  const expirationDate = moment(expiration)
  const expired = date.isAfter(expirationDate);
  if(expired) {
    signOut();
  }

  return (
    <ReactDOMRoute
      { ...rest }
      render= {({ location }) => {
        return isPrivate === !!store ? (
          <Component />
        ) : (
          <Redirect to={{
            pathname: isPrivate ? '/' : '/dashboard' ,
            state: { from: location }
          }} />
        )
      }}
    />
  );
}

export default Route;
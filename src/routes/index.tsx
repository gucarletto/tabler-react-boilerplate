import React from 'react';
import Route from './Route';
import { Switch } from 'react-router-dom';

import HomePage from "../pages/HomePage";
import UsersList from "../pages/UsersList";
import Login from "../pages/Login";
import Error404 from "../pages/exceptions/404";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/dashboard" component={HomePage} isPrivate />
	<Route exact path="/users" component={UsersList} isPrivate />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
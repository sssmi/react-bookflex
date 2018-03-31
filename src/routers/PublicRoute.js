import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      // If not logged in, render LoginPage, else throw to Dashboard
      (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)
    }
  />
);

export default PublicRoute;
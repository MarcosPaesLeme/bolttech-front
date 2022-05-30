import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate, Outlet } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { UserContext } from '../contexts/UserContext/UserContext';

const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  if (!user.token) return <Navigate to="/" />;

  const Layout = user ? DefaultLayout : AuthLayout;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default PrivateRoute;

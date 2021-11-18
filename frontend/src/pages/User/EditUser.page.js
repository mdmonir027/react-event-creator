import Layout from 'components/layout/Layout';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EditUser = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to='/' />;
  }
  if (!user.isAdmin) {
    return <Navigate to='/event/view' />;
  }
  return (
    <Layout>
      <h2>Edit User</h2>
    </Layout>
  );
};

export default EditUser;

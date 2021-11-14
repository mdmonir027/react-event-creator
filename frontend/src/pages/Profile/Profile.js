import Layout from 'components/layout/Layout';
import UserInfo from 'components/profile/UserInfo';
import React from 'react';

const Profile = () => {
  return (
    <Layout>
      <h2>User Information</h2>
      <UserInfo />
    </Layout>
  );
};

export default Profile;

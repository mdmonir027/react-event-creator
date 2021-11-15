import Layout from 'components/layout/Layout';
import UpdatePasswordForm from 'components/profile/UpdatePasswordForm';
import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const UpdatePassword = () => {
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>Update password Events</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to='/profile'>Go To Profile</Link>
          </Button>
        </Col>
      </Row>
      <UpdatePasswordForm />
    </Layout>
  );
};

export default UpdatePassword;

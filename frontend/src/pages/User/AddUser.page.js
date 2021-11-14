import { Button, Col, Row } from 'antd';
import Layout from 'components/layout/Layout';
import UserForm from 'components/user/UserForm';
import React from 'react';

const AddUser = () => {
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>Add User</h2>
        </Col>
        <Col>
          <Button type='primary'>View User</Button>
        </Col>
      </Row>
      <UserForm />
    </Layout>
  );
};

export default AddUser;

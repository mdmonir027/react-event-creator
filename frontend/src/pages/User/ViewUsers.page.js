import { Button, Col, Row } from 'antd';
import Layout from 'components/layout/Layout';
import UserTable from 'components/user/UserTable';
import React from 'react';

const ViewUsers = () => {
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>All User</h2>
        </Col>
        <Col>
          <Button type='primary'>Add User</Button>
        </Col>
      </Row>
      <UserTable />
    </Layout>
  );
};

export default ViewUsers;

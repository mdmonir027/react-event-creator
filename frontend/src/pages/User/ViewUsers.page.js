import { Button, Col, Row } from 'antd';
import Layout from 'components/layout/Layout';
import UserTable from 'components/user/UserTable';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllUser } from 'store/action/user.action';

const ViewUsers = ({ getAllUser }) => {
  useEffect(() => getAllUser(), [getAllUser]);
  return (
    <Layout>
      <Row justify='space-between'>
        <Col>
          <h2>All User</h2>
        </Col>
        <Col>
          <Button type='primary'>
            <Link to='/user/add'>Add User</Link>
          </Button>
        </Col>
      </Row>
      <UserTable />
    </Layout>
  );
};

export default connect(null, { getAllUser })(ViewUsers);

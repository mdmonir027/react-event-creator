import Layout from 'components/layout/Layout';
import UpdatePasswordForm from 'components/profile/UpdatePasswordForm';
import React from 'react';
import { Row, Col } from 'antd';

const UpdatePassword = () => {
  return (
    <Layout>
      <Row justify='center'>
        <Col span={18}>
          <Row>
            <Col span={12}>
              <h2 style={{ marginBottom: 10 }}>Update password</h2>
              <UpdatePasswordForm />
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default UpdatePassword;
